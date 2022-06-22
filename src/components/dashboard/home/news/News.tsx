import { FC, ReactElement, useState, useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UserCardImage from "../../../../images/GreetingCard/user_card_image.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import {
	MiniCardWrapper,
	MiniCardImage,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";

type NewsTextProp = {
	date: string; // ?????????????????
	text: string; // ????????????
};

const newsData: NewsTextProp[] = [
	{
		date: "24.01.2021",
		text: "Вы пропустили тренировку, не забудьте посетить ее завтра",
	},
	{
		date: "24.01.2021",
		text: "Вы пропустили тренировку, не забудьте посетить ее завтра",
	},
	{
		date: "24.01.2021",
		text: "Вы пропустили тренировку, не забудьте посетить ее завтра",
	},
];

const NewsWrapper = styled("div")`
	box-sizing: border-box;
	max-width: 343px;
	display: flex;
	flex-direction: column;
`;
const NewsTitleWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
`;
const NewsTitle = styled("h3")`
	margin: 0 0 14px 0;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #000000;
`;
const AllNewsWrapper = styled("div")`
	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		text-decoration: underline;
	}
`;
const Text = styled("div")`
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
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
			<MiniCardTextWrapper margin={"0 0 0 10px"}>
				<MiniCardText
					fontWeight={400}
					fontSize={"12px"}
					lineheight={"14px"}
					color={"#848484"}
					margin={"0 0 4px 0"}
				>
					{item.date}
				</MiniCardText>
				<MiniCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#272727"}
				>
					<Link
						to={`news/${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text}
					</Link>
				</MiniCardText>
			</MiniCardTextWrapper>
			<Link to={`news/${index}`}>
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

const News = () => {
	return (
		<NewsWrapper>
			<NewsTitleWrapper>
				<NewsTitle>Новости</NewsTitle>
				<AllNewsWrapper>
					<Link
						to="news"
						style={{
							color: "inherit",
							textDecorationColor: "#2F80ED",
						}}
					>
						<Text>Посмотреть все</Text>
						<ArrowForwardIcon
							sx={{
								width: "20px",
								height: "12px",
								color: "#2F80ED",
							}}
						/>
					</Link>
				</AllNewsWrapper>
			</NewsTitleWrapper>
			{(newsData as NewsTextProp[]).map((item, index) => (
				<Card item={item} index={index} key={item.text + index} />
			))}
		</NewsWrapper>
	);
};

export default News;