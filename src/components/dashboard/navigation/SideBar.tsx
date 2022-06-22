import { FC, ReactElement, useState, useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import { ReactComponent as HomeIcon } from "../../../images/icons/dashboard/home.svg";
import { ReactComponent as ChartIcon } from "../../../images/icons/dashboard/chart.svg";
import { ReactComponent as CalendarIcon } from "../../../images/icons/dashboard/calendar.svg";
import { ReactComponent as BagIcon } from "../../../images/icons/dashboard/shop.svg";
import { ReactComponent as UserIcon } from "../../../images/icons/dashboard/profile.svg";
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

type ItemProps = {
	value: string;
	name: string;
	icon?: ReactElement;
};
const Icon = styled("svg")`
	margin-right: 14px;
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
		icon: <Icon as={BagIcon} />,
	},
	{
		name: "profile",
		value: "Профиль",
		icon: <Icon as={UserIcon} />,
	},
];

const SideBarWrapper = styled("div")`
	width: 297px;
	/* @media (max-width: 768px) {
    display: "none";
  } */
`;
const Ul = styled("ul")`
	list-style-type: none;
	padding: 0 0 0 51px;
	margin: 0;
`;
const Li = styled("li")`
	a {
		font-weight: 700;
		font-size: 14px;
		line-height: 16px;
		color: #848484;
		display: flex;
		align-items: center;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	&:first-of-type {
		padding-top: 0;
	}
	&:last-child {
		padding-bottom: 0;
	}
	padding: 30px 0;
`;

function renderItems(items: ItemProps[]) {
	const item = items.map((item) => {
		return (
			<Li key={item.value}>
				<NavLink
					style={({ isActive }) =>
						isActive ? { color: "#6D4EEA" } : {}
					}
					to={item.name}
				>
					{item.icon}
					{item.value}
				</NavLink>
			</Li>
		);
	});
	return <Ul>{item}</Ul>;
}

const SideBar = () => {
	const items = renderItems(menuData);

	return (
		<SideBarWrapper
			sx={{
				"@media (max-width: 768px)": {
					display: "none",
				},
			}}
		>
			{items}
		</SideBarWrapper>
	);
};

export default SideBar;
