import { styled } from "@mui/material/styles";

import { ReactComponent as HomeIcon } from "../../../images/icons/dashboard/home.svg";
import { ReactComponent as ChartIcon } from "../../../images/icons/dashboard/chart.svg";
import { ReactComponent as CalendarIcon } from "../../../images/icons/dashboard/calendar.svg";
import { ReactComponent as BagIcon } from "../../../images/icons/dashboard/shop.svg";
import { ReactComponent as UserIcon } from "../../../images/icons/dashboard/profile.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHttp } from "../../../services/useHttp";
import { useEffect } from "react";
import { fetchData } from "../../../store/sidebarActions";
import { useSelector } from "react-redux";
import { SidebarTypes, IconMapTypes } from "../../../types/types";

const Icon = styled("svg")`
	margin-right: 14px;
`;

const iconMap: IconMapTypes = {
	HomeIcon: <Icon as={HomeIcon} />,
	ChartIcon: <Icon as={ChartIcon} />,
	CalendarIcon: <Icon as={CalendarIcon} />,
	BagIcon: <Icon as={BagIcon} />,
	UserIcon: <Icon as={UserIcon} />,
};

const SideBarWrapper = styled("div")`
	width: 297px;
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

const SideBar = () => {
	const { sidebarData }: { sidebarData: SidebarTypes[] } = useSelector(
		(state: any) => state.sidebar
	);
	const dispatch: any = useDispatch();
	const { request } = useHttp();
	useEffect(() => {
		dispatch(fetchData(request));
	}, []);

	return (
		<SideBarWrapper
			sx={{
				"@media (max-width: 768px)": {
					display: "none",
				},
			}}
		>
			<Ul>
				{sidebarData.map((item, index) => (
					<Li key={item.value}>
						<NavLink
							style={({ isActive }) =>
								isActive ? { color: "#6D4EEA" } : {}
							}
							to={item.name}
						>
							{iconMap[item.icon] ? (
								iconMap[item.icon]
							) : (
								<div style={{ marginLeft: "34px" }}></div>
							)}
							{item.value}
						</NavLink>
					</Li>
				))}
			</Ul>
		</SideBarWrapper>
	);
};

export default SideBar;
