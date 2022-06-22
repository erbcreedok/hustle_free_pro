import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
	MediumCardWrapper,
	MediumCardImage,
	MediumCardTextWrapper,
	MediumCardText,
} from "../../custom/cards/MediumCard";
import useBreakpoint from "use-breakpoint";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

type NewsTextProp = {
	text1: string;
	text2: string;
};
const shopData: NewsTextProp[] = [
	{
		text1: "Кимоно для тхэквондо",
		text2: "54500",
	},
	{
		text1: "Кимоно для тхэквондо",
		text2: "54500",
	},
	{
		text1: "Кимоно для тхэквондо",
		text2: "54500",
	},
	{
		text1: "Кимоно для тхэквондо",
		text2: "54500",
	},
	{
		text1: "Кимоно для тхэквондо",
		text2: "54500",
	},
	{
		text1: "Кимоно для тхэквондо",
		text2: "54500",
	},
];

type CardProps = {
	// ?????? ANY ?????????
	item: any;
	index: any;
};
const Card = ({ item, index }: CardProps) => {
	return (
		<MediumCardWrapper
			display={"flex"}
			flex_direction={"column"}
			justify_content={"center"}
			width={"209px"}
			height={"282px"}
			background={"#FFFFFF"}
			box_shadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			border_radius={"10px"}
			padding={"16px"}
			key={index}
		>
			<MediumCardImage height={"180px"} />
			<MediumCardTextWrapper>
				<MediumCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#272727"}
					margin={"16px 0"}
				>
					<Link
						to={`${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text1}
					</Link>
				</MediumCardText>
				<MediumCardText
					fontWeight={700}
					fontSize={"18px"}
					lineheight={"21px"}
					color={"#272727"}
				>{`${item.text2} тнг`}</MediumCardText>
			</MediumCardTextWrapper>
		</MediumCardWrapper>
	);
};

const Products = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	return (
		<Grid container spacing={2} columns={12}>
			{(shopData as NewsTextProp[]).map((item, index) => (
				<Grid item xs={6} sm={6} md={4} lg={4} key={index}>
					{<Card item={item} index={index} />}
				</Grid>
			))}
		</Grid>
	);
};

export default Products;
