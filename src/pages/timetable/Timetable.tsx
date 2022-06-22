import React, {
	useState,
	useEffect,
	MouseEventHandler,
	useCallback,
	useRef,
	useMemo,
} from "react";
import moment from "moment";
import "moment/locale/ru";
import { styled } from "@mui/material";
import { useDraggable } from "react-use-draggable-scroll";
import {
	scrollStyles,
	defaultSelectedDayStyle,
} from "../../components/custom/styled";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DatePicker from "react-datepicker";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

import buildCalendar from "./build";
import dayStyles from "./styles";
import { extendMoment } from "moment-range";

type TextProps = {
	fontWeight?: number;
	fontSize?: string;
	lineHeight?: string;
	color?: string;
};
const Wrapper = styled("div")``;

const CalendarWrapper = styled("div")`
	max-width: 906px;
	overflow-x: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	background: #ffffff;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
	border-radius: 10px;
	padding: 13px 25px 14px 14px;
`;

const CalendarHeader = styled("div")`
	display: flex;
	align-items: center;
	padding-top: 10px;
	position: fixed;
`;
const CalendarBody = styled("div")`
	display: flex;
	justify-content: space-between;
`;
const CalendarItemWrapper = styled("div")``;
const CalendarItem = styled("div")`
	width: 38px;
	height: 76px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #272727;
	cursor: pointer;
	&.selected_day {
		${defaultSelectedDayStyle}
	}
	:hover {
		transition: 1.5ms;
		${defaultSelectedDayStyle}
	}
`;
const DayWrapper = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const DayText = styled("span")<TextProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineHeight};
	color: ${(props) => props.color};
`;
const DatePickerWrapper = styled("div")`
	margin-left: 17px;
	cursor: pointer;
`;

function getMonthDateRange(year: any, month: any) {
	var moment = require("moment");

	// month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
	// array is 'year', 'month', 'day', etc
	var startDate = moment([year, month - 1]);

	// Clone the value before .endOf()
	var endDate = moment(startDate).endOf("month");

	// just for demonstration:
	// console.log(startDate.toDate());
	// console.log(endDate.toDate());

	// make sure to call toDate() for plain JavaScript date type
	return { start: startDate, end: endDate };
}

const ScrollDay = () => {
	const ref =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);
	const [startDate, setStartDate] = useState(new Date());

	const [selectedDate, setSelectedDate] = useState(moment());
	const selectedYear = useMemo(
		() => selectedDate.get("year"),
		[selectedDate]
	);
	const selectedMonth = useMemo(
		() => selectedDate.get("month"),
		[selectedDate]
	);
	const selectedDay = useMemo(
		() => +selectedDate.get("date") - 1,
		[selectedDate]
	);

	const dateRangeOfSelectedMonth = getMonthDateRange(
		selectedDate.set("year", selectedYear).format("YYYY"),
		selectedDate.set("month", selectedMonth).format("M")
	);

	const getDaysBetweenDates = useCallback(
		(startDate: any, endDate: any, variant?: string) => {
			const now = startDate.clone();
			const dates = [];
			while (now.isSameOrBefore(endDate)) {
				dates.push(
					variant === "full"
						? now.format("YYYY-MM-DD")
						: now.format("dd")
				);
				now.add(1, "days");
			}
			return dates;
		},
		[]
	);

	const allMonth = moment
		.months()
		.map((month) => month[0].toUpperCase() + month.slice(1));

	const daysWithWeekName = useMemo(
		() =>
			getDaysBetweenDates(
				dateRangeOfSelectedMonth.start.clone(),
				dateRangeOfSelectedMonth.end.clone()
			),
		[selectedDate]
	);

	const handleChangeMonth = useCallback(
		(value: number) => {
			setSelectedDate((prev) => prev.set("month", value).clone());
		},
		[selectedDate]
	);
	const handleChangeYear = useCallback(
		(value: number) => {
			setSelectedDate((prev) => prev.set("year", value).clone());
			console.log(selectedDate);
		},
		[selectedDate]
	);
	const handleChangeDay = useCallback(
		(value: number) => {
			setSelectedDate((prev) => prev.set("date", value + 1).clone());
		},
		[selectedDate]
	);

	return (
		<CalendarWrapper
			className="calendat_wrapper"
			{...events}
			ref={ref}
			sx={[
				scrollStyles({
					width: "8px",
					height: "8px",
					background: "rgb(216,210,207)",
					hoverBackground: "#888",
					borderRadius: "10px",
				}),
			]}
		>
			<CalendarHeader>
				<FormControl>
					<NativeSelect
						value={selectedMonth}
						onChange={(e) => handleChangeMonth(+e.target.value)}
						IconComponent={KeyboardArrowDownOutlinedIcon}
						disableUnderline
					>
						{allMonth.map((item, index) => (
							<option value={index} key={item}>
								{item} {startDate.getFullYear()}
							</option>
						))}
					</NativeSelect>
				</FormControl>
				<DatePickerWrapper>
					<DatePicker
						selected={startDate}
						onChange={(date: Date) => {
							handleChangeYear(date.getFullYear());
							setStartDate(date);
						}}
						showYearPicker
						dateFormat="yyyy"
						customInput={<CalendarMonthOutlinedIcon />}
						portalId="root-portal"
					/>
				</DatePickerWrapper>
			</CalendarHeader>
			<CalendarBody sx={{ marginTop: "44px" }}>
				{daysWithWeekName.map((day, index) => (
					<CalendarItemWrapper key={Math.random()}>
						<CalendarItem
							onClick={() => handleChangeDay(index)}
							key={Math.random()}
							className={
								index === selectedDay ? "selected_day" : ""
							}
						>
							<DayWrapper>
								<DayText
									fontWeight={400}
									fontSize={"12px"}
									color={"#848484"}
									className="day_name"
								>
									{day}
								</DayText>
								<DayText>{index + 1}</DayText>
							</DayWrapper>
						</CalendarItem>
					</CalendarItemWrapper>
				))}
			</CalendarBody>
		</CalendarWrapper>
	);
};

const Timetable = () => {
	return (
		<Wrapper>
			<ScrollDay />
		</Wrapper>
	);
};

export default Timetable;
