import { styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackTextWrapper = styled("div")`
	span {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	margin-bottom: 16px;
`;
const BackText = styled("span")`
	font-size: 12px;
	line-height: 14px;
	color: #2f80ed;
	&:hover {
		text-decoration: underline;
	}
`;

export const BackButton = ({ label }: { label: string }) => {
	return (
		<BackTextWrapper>
			<span
				onClick={() => window.history.back()}
				style={{ color: "inherit", textDecorationColor: "#2F80ED" }}
			>
				<ArrowBackIcon
					sx={{
						width: "20px",
						height: "12px",
						color: "#2F80ED",
					}}
				/>
				<BackText>{label}</BackText>
			</span>
		</BackTextWrapper>
	);
};
