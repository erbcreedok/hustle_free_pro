import { FC, useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../../../custom/Button";
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
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../../custom/BackButton";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

type NewsTextProp = {
	text1: string;
	text2: string;
	text3: string;
};
const data: NewsTextProp[] = [
	{
		text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)",
		text2: "Дата проведения: 05 июня 2021",
		text3: "Arcu hendrerit iaculis himenaeos senectus orci justo, tristique hac conubia erat libero. Ornare dapibus tellus finibus ullamcorper vehicula dis parturient, suscipit praesent aliquam lacinia donec condimentum luctus, imperdiet auctor facilisi enim odio risus. Facilisi auctor eu finibus at cubilia quis venenatis, sed dui sociosqu justo iaculis facilisis molestie vulputate, nullam inceptos elementum pretium amet tincidunt. Felis pellentesque fames venenatis accumsan ullamcorper potenti feugiat ornare aliquet, orci at tristique dolor ultricies maecenas vulputate rhoncus dui mattis, sodales molestie consequat finibus vehicula per montes vitae.",
	},
];

const Wrapper = styled("div")`
	max-width: 690px;
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
	);
	return (
		<LargeCardWrapper
			display={"flex"}
			flex_direction={"column"}
			justify_content={"center"}
			width={"690px"}
			background={"#FFFFFF"}
			box_shadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			border_radius={"10px"}
			padding={breakpoint === "mobile" ? "12px" : "16px"}
			key={index}
		>
			<LargeCardImage border_radius={"10px"} width={"100%"} />
			<LargeCardTextWrapper>
				<LargeCardText
					fontWeight={700}
					fontSize={"18px"}
					lineheight={"21px"}
					color={"#000000;"}
					margin={"14px 0"}
				>
					{item.text1}
				</LargeCardText>
				<Divider />
				<LargeCardText
					fontWeight={700}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#272727"}
					margin={"14px 0"}
				>
					{item.text2}
				</LargeCardText>
				<Divider />
				<LargeCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"21px"}
					color={"#272727"}
					margin={"14px 0"}
				>
					{item.text3}
				</LargeCardText>
			</LargeCardTextWrapper>
			<CustomButton
				width={"100%"}
				height={"54px"}
				text={"Принять участие"}
				backColor={
					"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
				}
				position={"center"}
			/>
		</LargeCardWrapper>
	);
};

const SingleCompetition = () => {
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

export default SingleCompetition;
