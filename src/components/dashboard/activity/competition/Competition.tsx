import { FC, useState, useCallback, useEffect, useRef } from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardItemImage from "../../../../images/activity/competition_image.svg";
import { useDraggable } from "react-use-draggable-scroll";
import useBreakpoint from "use-breakpoint";
import { scrollStyles } from "../../../custom/styled";
import {
	MediumCardWrapper,
	MediumCardImage,
	MediumCardTextWrapper,
	MediumCardText,
} from "../../../custom/cards/MediumCard";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

type NewsTextProp = {
	text1: string; // ?????????????????
	text2: string; // ????????????
};

const competitionData: NewsTextProp[] = [
	{
		text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)",
		text2: "05 июня",
	},
	{
		text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)",
		text2: "05 июня",
	},
	{
		text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)",
		text2: "05 июня",
	},
	{
		text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)",
		text2: "05 июня",
	},
];

const Wrapper = styled("div")`
	margin-bottom: 34px;
`;
const TitleWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
type TitleProps = {
	fontWeight: number;
	fontSize: string;
	lineheight: string;
	color: string;
	margin?: string;
};
const Title = styled("h3")<TitleProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineheight};
	color: ${(props) => props.color};
	margin-bottom: ${(props) => props.margin};
`;
const AllCompetitionText = styled("div")`
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	text-decoration-line: underline;
	color: #2f80ed;
`;
const AllCompetitionTextWrapper = styled("div")`
	a {
		display: flex;
		align-items: center;
	}
`;
const CardsWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	max-width: 768px;
	overflow-x: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
`;
type CardProps = {
	// ?????? ANY ?????????
	item: any;
	index: number;
};

const Card = ({ item, index }: CardProps) => {
	return (
		<MediumCardWrapper
			display={"flex"}
			flex_direction={"column"}
			justify_content={"center"}
			width={"252px"}
			background={"#FFFFFF"}
			box_shadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			border_radius={"10px"}
			padding={"10px"}
			margin={"0 20px 0 0"}
			key={index}
		>
			<MediumCardImage border_radius={"10px"} />
			<MediumCardTextWrapper>
				<MediumCardText
					fontWeight={700}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#000000;"}
					margin={"6px 0 4px 0"}
				>
					<Link
						to={`competitions/${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text1}
					</Link>
				</MediumCardText>
				<MediumCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#848484"}
				>
					{item.text2}
				</MediumCardText>
			</MediumCardTextWrapper>
		</MediumCardWrapper>
	);
};

const ScrollCards = () => {
	const ref =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	return (
		<CardsWrapper
			{...events}
			ref={ref}
			sx={[
				scrollStyles({
					height: "8px",
					background: "rgb(216,210,207)",
					hoverBackground: "#888",
					borderRadius: "10px",
				}),
			]}
		>
			{(competitionData as NewsTextProp[]).map((item, index) => (
				<Card item={item} index={index} key={item.text1 + index} />
			))}
		</CardsWrapper>
	);
};

const Competition = (): JSX.Element => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	return (
		<Wrapper>
			<TitleWrapper>
				<Title
					fontWeight={700}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#000000;"}
					margin={"24px"}
				>
					Соревнования
				</Title>
				<AllCompetitionTextWrapper>
					<Link to="competitions">
						<AllCompetitionText>Посмотреть все</AllCompetitionText>
						<ArrowForwardIcon
							sx={{
								width: "20px",
								height: "12px",
								color: "#2F80ED",
							}}
						/>
					</Link>
				</AllCompetitionTextWrapper>
			</TitleWrapper>
			{breakpoint === "mobile" ? (
				<ScrollCards />
			) : (
				<Grid container columns={12}>
					<Grid container item spacing={2} xs={11.5}>
						{(competitionData as NewsTextProp[]).map(
							(item, index) => (
								<Grid item sm={6} md={6} lg={3} key={index}>
									{<Card item={item} index={index} />}
								</Grid>
							)
						)}
					</Grid>
				</Grid>
			)}
		</Wrapper>
	);
};

export default Competition;
