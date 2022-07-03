import { ReactComponent as HomeIcon } from "../../utils/images/icons/dashboard/home.svg";
import { ReactComponent as ChartIcon } from "../../utils/images/icons/dashboard/chart.svg";
import { ReactComponent as CalendarIcon } from "../../utils/images/icons/dashboard/calendar.svg";
import { ReactComponent as BagIcon } from "../../utils/images/icons/dashboard/shop.svg";
import { ReactComponent as UserIcon } from "../../utils/images/icons/dashboard/profile.svg";
import { IconMapTypes } from "../../types/types";
import { styled } from "@mui/material/styles";

const Icon = styled("svg")`
	margin-right: 14px;
`;

export const iconMap: IconMapTypes = {
	HomeIcon: <Icon as={HomeIcon} />,
	ChartIcon: <Icon as={ChartIcon} />,
	CalendarIcon: <Icon as={CalendarIcon} />,
	BagIcon: <Icon as={BagIcon} />,
	UserIcon: <Icon as={UserIcon} />,
};
