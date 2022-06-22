import { Box as MuiBox } from "@mui/material";
import { ComponentProps, FC, ReactElement } from "react";

type Props = {
	children?: ReactElement | ReactElement[] | string;
} & ComponentProps<typeof MuiBox>["sx"];
export const Box: FC<Props> = ({ children, ...rest }) => {
	return <MuiBox sx={rest}>{children}</MuiBox>;
};
