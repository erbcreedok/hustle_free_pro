import { FC, useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
	LargeCardWrapper,
	LargeCardImage,
	LargeCardTextWrapper,
	LargeCardText,
} from "../../../custom/cards/LargeCard";
import useBreakpoint from "use-breakpoint";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { BackButton } from "../../../custom/BackButton";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

type NewsTextProp = {
	text1: string;
	text2: string;
};
const data: NewsTextProp[] = [
	{
		text1: "Degreen.kz",
		text2: "Используйте промокод CheckMat2021 и получите скидку на фитнес набор для набора мышечной массы от нашего партнера Degreen.kz",
	},
];

const Wrapper = styled("div")`
	max-width: 674px;
`;

type CardProps = {
	// ?????? ANY ?????????
	item: any;
	index: number;
};
const Card = ({ item, index }: CardProps) => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	); ///// ПЕРЕРЕНДЕР ??????????

	return (
		<LargeCardWrapper
			display={"flex"}
			flex_direction={"column"}
			justify_content={"center"}
			width={"674px"}
			background={"#FFFFFF"}
			box_shadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			border_radius={"10px"}
			padding={
				breakpoint === "mobile" ? "12px 12px 58px" : "16px 16px 24px"
			}
			key={index}
		>
			<LargeCardImage border_radius={"10px"} width={"100%"} />
			<LargeCardTextWrapper>
				<LargeCardText
					fontWeight={700}
					fontSize={"18px"}
					lineheight={"wqpx"}
					color={"#272727;"}
					margin={"14px 0"}
				>
					{item.text1}
				</LargeCardText>
				<Divider />
				<LargeCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"21px"}
					color={"#272727"}
					margin={"14px 0 0"}
				>
					{item.text2}
				</LargeCardText>
			</LargeCardTextWrapper>
		</LargeCardWrapper>
	);
};

const SinglePartner = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	return (
		<>
			<BackButton label={"Назад"} />
			<Wrapper sx={{ marginBottom: "70px" }}>
				{(data as NewsTextProp[]).map((item, index) => (
					<Card item={item} index={index} />
				))}
			</Wrapper>
		</>
	);
};

export default SinglePartner;
