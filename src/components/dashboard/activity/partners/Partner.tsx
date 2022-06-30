import { FC } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
	MiniCardWrapper,
	MiniCardImage,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";
import { Link } from "react-router-dom";
import { ShowAllButton } from "../../../custom/ShowAllButton";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper, TitleWrapper, Title } from "../../../custom/defaultStyles";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { xs: 0, sm: 768, mid: 900, lg: 1200 };

const data: TextProps[] = [
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
];

const Card = ({ item, index }: CardProps) => {
	return (
		<MiniCardWrapper
			display={"flex"}
			justifyContent={"center"}
			maxWidth={"343px"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={"8px 10px"}
			alignItems={"center"}
			margin={"0 0 14px 0"}
			key={index}
		>
			<MiniCardImage
				width={"71px"}
				height={"71px"}
				border_radius={"10px"}
			/>
			<MiniCardTextWrapper margin={"0 2px 0 10px"}>
				<MiniCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#272727"}
				>
					<Link
						to={`partners/${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text1}
					</Link>
				</MiniCardText>
			</MiniCardTextWrapper>
			<Link to={`partners/${index}`}>
				<ArrowForwardIosIcon
					sx={{
						color: "#848484",
						width: "15px",
						height: "20px",
					}}
				/>
			</Link>
		</MiniCardWrapper>
	);
};

const Partners: FC<DataProps> = () => {
	const { breakpoint, minWidth } = useBreakpoint(BREAKPOINTS, "mid");
	return (
		<Wrapper
			display="flex"
			flexDirection="column"
			maxWidth={minWidth > 900 ? "700px" : "343px"}
		>
			<TitleWrapper
				display="flex"
				justifyContent=" space-between"
				alignItems="center"
			>
				<Title
					margin="0 0 12px 0"
					fontWeight={700}
					fontSize="18px"
					lineHeight="21px"
					color="#000000"
				>
					Наши партнеры
				</Title>
				<ShowAllButton
					label="Посмотреть все"
					to="partners"
					margin="0 0 12px 0"
				/>
			</TitleWrapper>

			<Grid container spacing={2} columns={12}>
				{data.map((item, index) => (
					<Grid
						item
						xs={12}
						md={12}
						lg={6}
						key={index + item.text1}
						sx={[
							breakpoint === "xs" && {
								justifyContent: "center",
							},
						]}
					>
						{<Card item={item} index={index} />}
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default Partners;
