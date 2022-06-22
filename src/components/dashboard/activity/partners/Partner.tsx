import { FC, ReactElement, useState, useCallback, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UserCardImage from "../../../../images/GreetingCard/user_card_image.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef } from "react";
import {
	MiniCardWrapper,
	MiniCardImage,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";
import { Routes, Route, Link, Outlet } from "react-router-dom";

type PartnersTextProp = {
	text: string;
};

const partnersData: PartnersTextProp[] = [
	{
		text: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text: "Скидка 20% на продукты питания от Degreen.kz.",
	},
];

const PartnersWrapper = styled("div")`
	/* width: 343px; */
	display: flex;
	flex-direction: column;
`;
const PartnersTitleWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
`;
const PartnersTitle = styled("h3")`
	margin: 0 0 14px 0;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #000000;
`;
const AllPartnersWrapper = styled("div")`
	a {
		display: flex;
		align-items: center;
	}
`;
const AllPartnersText = styled("div")`
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	text-decoration-line: underline;
	color: #2f80ed;
`;

type CardProps = {
	// ?????? ANY ?????????
	item: any;
	index: number;
};
const Card = ({ item, index }: CardProps) => {
	return (
		<MiniCardWrapper
			display={"flex"}
			justify_content={"center"}
			width={"343px"}
			background={"#FFFFFF"}
			box_shadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			border_radius={"10px"}
			padding={"8px 10px"}
			align_items={"center"}
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
					lineheight={"16px"}
					color={"#272727"}
				>
					<Link
						to={`partners/${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text}
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

const Partners = () => {
	return (
		<PartnersWrapper>
			<PartnersTitleWrapper>
				<PartnersTitle>Наши партнеры</PartnersTitle>
				<AllPartnersWrapper>
					<Link to="partners">
						<AllPartnersText>Посмотреть все</AllPartnersText>
						<ArrowForwardIcon
							sx={{
								width: "20px",
								height: "12px",
								color: "#2F80ED",
							}}
						/>
					</Link>
				</AllPartnersWrapper>
			</PartnersTitleWrapper>

			<Grid container spacing={2} columns={12}>
				{(partnersData as PartnersTextProp[]).map((item, index) => (
					<Grid item xs={12} md={6} lg={6} key={index + item.text}>
						{<Card item={item} index={index} />}
					</Grid>
				))}
			</Grid>
		</PartnersWrapper>
	);
};

export default Partners;
