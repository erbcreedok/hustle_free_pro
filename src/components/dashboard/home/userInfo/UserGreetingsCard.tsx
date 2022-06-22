import { FC, ReactElement, useState, useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import {
	MiniCardWrapper,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";

import UserCardImage from "../../../../images/GreetingCard/user_card_image.png";

type InfoTextProps = {
	title: string;
	subtitle: string;
};

const cardInfoData: InfoTextProps[] = [
	{
		title: "Безлимит",
		subtitle: "Абонемент",
	},
	{
		title: "105",
		subtitle: "Рейтинг",
	},
	{
		title: "21.12.2021",
		subtitle: "Действителен до",
	},
];

const GreetingCardWrapper = styled("div")`
	max-width: 354px;
	height: 182px;
	position: relative;
	background: linear-gradient(
		69.51deg,
		#5ea2ff 0%,
		#3e83e1 20.31%,
		#7b3eed 79.17%,
		#a778ff 100%
	);
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
	border-radius: 10px;
	padding: 15px;
	margin-bottom: 44px;
	box-sizing: border-box;
`;
const UserGreetingWrapper = styled("div")`
	display: flex;
	align-items: center;
`;
const GreetingTitle = styled("h3")`
	max-width: 252px;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	color: #ffffff;
	overflow-wrap: break-word;
	margin: 0;
	padding-right: 55px;
`;
const GreetingImage = styled("img")`
	width: 67px;
	height: 67px;
	border: 3px solid #ffffff;
	filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
	border-radius: 50%;
	box-sizing: border-box;
`;
const GreetingInfoWrapper = styled("div")`
	width: 90%; // ????????????????????????????????????????????????????????????????????
	height: 85px;
	display: flex;
	position: absolute;
	bottom: -12px;
	justify-content: space-between;
	padding: 23px 13px;
	background: rgba(255, 255, 255, 0.2);
	border: 1px solid rgba(217, 217, 217, 0.3);
	box-sizing: border-box;
	backdrop-filter: blur(40px);
	border-radius: 10px;
`;
const GreetingInfo = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 85px;
`;
type TextProps = {
	fontWeight: number;
	fontSize: string;
	lineheight: string;
	color: string;
	margin?: string;
	padding?: string;
};
const GreetingInfoText = styled("span")<TextProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineheight};
	color: ${(props) => props.color};
	margin-bottom: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	text-align: center;
`;

const UserGreetingsCard = () => {
	return (
		<GreetingCardWrapper>
			<UserGreetingWrapper>
				<GreetingTitle>Привет, Айгерим!</GreetingTitle>
				<GreetingImage src={UserCardImage} />
			</UserGreetingWrapper>

			<GreetingInfoWrapper>
				{(cardInfoData as InfoTextProps[]).map((item) => (
					<GreetingInfo key={item.title}>
						<GreetingInfoText
							fontWeight={700}
							fontSize={"18px"}
							lineheight={"21px"}
							color={"#FFFFFF"}
							margin={"4px"}
						>
							{item.title}
						</GreetingInfoText>
						<GreetingInfoText
							fontWeight={400}
							fontSize={"12px"}
							lineheight={"14px"}
							color={"#FFFFFF"}
						>
							{item.subtitle}
						</GreetingInfoText>
					</GreetingInfo>
				))}
			</GreetingInfoWrapper>
		</GreetingCardWrapper>
	);
};

export default UserGreetingsCard;
