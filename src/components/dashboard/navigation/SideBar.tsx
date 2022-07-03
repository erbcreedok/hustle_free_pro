import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { SidebarTypes } from "../../../types/types";
import { useSelector } from "react-redux";
import { iconMap } from "../../custom/NavigationIcons";

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
