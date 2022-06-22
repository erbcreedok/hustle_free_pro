import { ReactElement, useState } from "react";
import React, { FC } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

type btnProps = {
	width?: string;
	height?: string;
	text?: string;
	backColor?: string;
	position?: string;
	margin?: string;
	boxShadow?: string;
	transformText?: string;
	color?: string;
	zIndex?: number;
	fontSize?: string;
	fontWeight?: string;
	WrapperMargin?: string;
	onClick?: () => void;
};

const BtnWrapper = styled("div")`
	max-width: 343px;
`;

export const CustomButton: FC<btnProps> = ({
	width,
	height,
	text,
	backColor,
	position,
	fontWeight,
	boxShadow,
	color,
	fontSize,
	transformText,
	margin,
	zIndex,
	WrapperMargin,
	onClick,
}) => {
	return (
		<BtnWrapper
			sx={{
				margin: WrapperMargin,
			}}
		>
			<Button
				type="submit"
				sx={{
					width: width,
					height: height,
					background: backColor,
					alignSelf: position,
					boxShadow: !boxShadow
						? "0px 0px 30px rgba(0, 0, 0, 0.03)"
						: boxShadow,
					border: "0px",
					borderRadius: "10px",
					fontWeight: !fontWeight ? "700" : fontWeight,
					fontSize: !fontSize ? "14px" : fontSize,
					color: !color ? "#FFFFFF" : color,
					cursor: "pointer",
					textTransform: "capitalize",
					fontFamily: "Raleway",
					margin: margin,
					zIndex: zIndex,
					"&:hover": {
						backgroundColor: `unset`,
					},
				}}
				onClick={onClick}
			>
				{text}
			</Button>
		</BtnWrapper>
	);
};
