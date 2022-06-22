import { useState, Fragment, SyntheticEvent, ReactElement } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";
import { ReactComponent as HomeIcon } from "../../../images/icons/dashboard/home.svg";
import { ReactComponent as ChartIcon } from "../../../images/icons/dashboard/chart.svg";
import { ReactComponent as CalendarIcon } from "../../../images/icons/dashboard/calendar.svg";
import { ReactComponent as ShopIcon } from "../../../images/icons/dashboard/shop.svg";
import { ReactComponent as ProfileIcon } from "../../../images/icons/dashboard/profile.svg";
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

type ItemProps = {
	name: string;
	value: string;
	icon?: ReactElement;
};

const Icon = styled("svg")`
	margin-bottom: 4px;
`;

const menuData: ItemProps[] = [
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
			sx={{
				width: "100%",
				position: "fixed",
				bottom: 0,
				zIndex: 1000,
				padding: "0px 16px",
				"@media (min-width: 769px)": {
					display: "none",
				},
				"&.MuiBottomNavigation-root .MuiButtonBase-root": {
					minWidth: "unset",
				},
				"&.MuiBottomNavigation-root a": {
					textDecoration: "unset",
				},
				"&.MuiBottomNavigation-root .active button, &.MuiBottomNavigation-root .active span":
					{
						color: "#6D4EEA",
					},
				"& .MuiBottomNavigationAction-label": {
					fontFamily: "Raleway",
					fontSize: "10px",
					fontWeight: 400,
					lineHeight: "12px",
					opacity: "unset",
					marginTop: "4px",
					color: "#848484",
				},
				"& .MuiBottomNavigationAction-label.Mui-selected": {
					color: "#6D4EEA",
				},
			}}
			value={value}
			onChange={handleChange}
		>
			{menuData.map((item) => (
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
