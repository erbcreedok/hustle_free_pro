import { useState, SyntheticEvent, ReactElement } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";
import { ReactComponent as HomeIcon } from "../../../images/icons/dashboard/home.svg";
import { ReactComponent as ChartIcon } from "../../../images/icons/dashboard/chart.svg";
import { ReactComponent as CalendarIcon } from "../../../images/icons/dashboard/calendar.svg";
import { ReactComponent as ShopIcon } from "../../../images/icons/dashboard/shop.svg";
import { ReactComponent as ProfileIcon } from "../../../images/icons/dashboard/profile.svg";
import { NavLink } from "react-router-dom";
import { BottomNavDefaultStyles } from "../../custom/defaultStyles";
import { NavProps } from "../../../types/types";

const Icon = styled("svg")`
	margin-bottom: 4px;
`;

const data: NavProps[] = [
	{
		name: "home",
		value: "Главная",
		icon: <Icon as={HomeIcon} />,
	},
	{
		name: "activity",
		value: "Активность",
		icon: <Icon as={ChartIcon} />,
	},
	{
		name: "timetable",
		value: "Расписание",
		icon: <Icon as={CalendarIcon} />,
	},
	{
		name: "shop",
		value: "Магазин",
		icon: <Icon as={ShopIcon} />,
	},
	{
		name: "profile",
		value: "Профиль",
		icon: <Icon as={ProfileIcon} />,
	},
];

export default function BottomNav() {
	const [value, setValue] = useState("home");

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			showLabels
			sx={[BottomNavDefaultStyles]}
			value={value}
			onChange={handleChange}
		>
			{data.map((item) => (
				<NavLink
					style={({ isActive }) =>
						isActive ? { color: "#6D4EEA" } : {}
					}
					to={item.name}
				>
					<BottomNavigationAction
						key={Math.random()}
						label={item.value}
						value={item.name}
						icon={item.icon}
					/>
				</NavLink>
			))}
		</BottomNavigation>
	);
}
