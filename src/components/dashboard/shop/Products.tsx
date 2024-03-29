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

const Card = ({ item, index }: CardProps) => {
	return (
		<MediumCardWrapper
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			height={"282px"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={"16px"}
		>
			<MediumCardImage height={"180px"} />
			<MediumCardTextWrapper>
				<MediumCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
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
					lineHeight={"21px"}
					color={"#272727"}
				>{`${item.text2} тнг`}</MediumCardText>
			</MediumCardTextWrapper>
		</MediumCardWrapper>
	);
};

const Products: FC<DataProps> = ({ data }) => {
	return (
		<Grid container spacing={2} columns={12}>
			{(data as TextProps[]).map((item, index) => (
				<Grid item xs={6} sm={6} md={4} lg={4} key={item.id}>
					{<Card item={item} index={index} />}
				</Grid>
			))}
		</Grid>
	);
};

export default Products;
