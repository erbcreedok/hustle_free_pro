import { FC } from "react";
import { styled } from "@mui/material/styles";
import ItemImg from "../../../utils/images/activity/partner_image.png";
import { Box, Typography } from "@mui/material";

// Card Wrapper
export const MiniCardWrapper = styled(Box)``;

// Card Image
type MiniCardImageProps = {
	url?: string;
	height?: string;
	width?: string;
	border_radius?: string;
};
const MiniCardImageSection = styled("img")<MiniCardImageProps>`
	object-fit: cover;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.border_radius};
`;
export const MiniCardImage: FC<MiniCardImageProps> = ({
	url,
	height,
	width,
	border_radius,
}) => {
	return (
		<MiniCardImageSection
			src={ItemImg}
			height={height}
			width={width}
			border_radius={border_radius}
		/>
	);
};

// Text Wrapper
export const MiniCardTextWrapper = styled(Box)``;

// Top Text
export const MiniCardText = styled(Typography)`
	display: block;
	a:hover {
		text-decoration: underline !important;
	}
`;
