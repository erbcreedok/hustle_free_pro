import { styled, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { FC } from "react";

type Props = {
	label: string;
	to: string;
	margin?: string;
};

const BackTextWrapper = styled(Box)`
	a {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
`;
const BackText = styled("span")`
	font-size: 12px;
	line-height: 14px;
	color: #2f80ed;
	&:hover {
		text-decoration: underline;
	}
`;

export const ShowAllButton: FC<Props> = ({ label, to, margin }) => {
	return (
		<BackTextWrapper margin={margin}>
			<Link
				to={to}
				style={{ color: "inherit", textDecorationColor: "#2F80ED" }}
			>
				<BackText>{label}</BackText>
				<ArrowForwardIcon
					sx={{
						width: "20px",
						height: "12px",
						color: "#2F80ED",
					}}
				/>
			</Link>
		</BackTextWrapper>
	);
};
