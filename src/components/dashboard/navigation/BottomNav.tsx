import { useState, SyntheticEvent } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { NavLink } from "react-router-dom";
import { BottomNavDefaultStyles } from "../../custom/defaultStyles";
import { SidebarTypes } from "../../../types/types";
import { useSelector } from "react-redux";
import { iconMap } from "../../custom/NavigationIcons";

export default function BottomNav() {
	const [value, setValue] = useState("home");
	const { sidebarData }: { sidebarData: SidebarTypes[] } = useSelector(
		(state: any) => state.sidebar
	);

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
			{sidebarData.map((item, index) => (
				<NavLink
					key={index}
					style={({ isActive }) =>
						isActive ? { color: "#6D4EEA" } : {}
					}
					to={item.name}
				>
					<BottomNavigationAction
						key={Math.random()}
						label={item.value}
						value={item.name}
						icon={iconMap[item.icon]}
					/>
				</NavLink>
			))}
		</BottomNavigation>
	);
}
