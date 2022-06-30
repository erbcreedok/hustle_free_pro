import { Grid } from "@mui/material";
import {
	MediumCardWrapper,
	MediumCardImage,
	MediumCardTextWrapper,
	MediumCardText,
} from "../../custom/cards/MediumCard";
import { Link } from "react-router-dom";
import { FC } from "react";
import { TextProps, CardProps, DataProps } from "../../../types/types";

const data: TextProps[] = [
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

const Card = ({ item, index }: CardProps) => {
	return (
		<MediumCardWrapper
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			// width={"209px"}
			height={"282px"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
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

const Products: FC<DataProps> = () => {
	return (
		<Grid container spacing={2} columns={12}>
			{data.map((item, index) => (
				<Grid item xs={6} sm={6} md={4} lg={4} key={index}>
					{<Card item={item} index={index} />}
				</Grid>
			))}
		</Grid>
	);
};

export default Products;
