import { FC, useState, useCallback, useEffect, ReactElement } from "react";
import { styled } from "@mui/material/styles";
import CardImage from "../../../images/home/contacts_image.svg";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useBreakpoint from "use-breakpoint";
import { Box } from "../../custom/box";

import { ReactComponent as FacebookIcon } from "../../../images/icons/contacts/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../images/icons/contacts/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../images/icons/contacts/youtube.svg";
import { ReactComponent as VkIcon } from "../../../images/icons/contacts/vk.svg";
import { ReactComponent as WhatsAppIcon } from "../../../images/icons/contacts/whatsapp.svg";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import { BackButton } from "../../custom/BackButton";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

type Item = {
	name?: string;
	icon?: ReactElement;
}[];

type NewsTextProp = {
	title: string;
	text?: string;
	icons?: Item;
};
const Icon = styled("svg")`
	width: 20px;
	height: 20px;
	margin-left: 12px;
`;
const data: NewsTextProp[] = [
	{
		title: "Адрес",
		text: "ЖК Арай​Жарокова, 137 блок В2 ​цокольный этаж",
	},
	{
		title: "Почта",
		text: "​info@cheсkmat.kz",
	},
	{
		title: "Телефон",
		text: "+7‒701‒584‒47‒77",
	},
	{
		title: "Соц. сети",
		icons: [
			{ name: "facebook", icon: <Icon as={FacebookIcon} /> },
			{ name: "instagram", icon: <Icon as={InstagramIcon} /> },
			{ name: "youtube", icon: <Icon as={YoutubeIcon} /> },
			{ name: "vk", icon: <Icon as={VkIcon} /> },
			{ name: "whatsapp", icon: <Icon as={WhatsAppIcon} /> },
		],
	},
];

// type WrapperProp = {
//   padding?: string;
// }
// const Wrapper = styled('div')<WrapperProp>`
//   max-width: 674px;
//   background: #FFFFFF;
//   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
//   border-radius: 10px;
// `

const InnerWrapper = styled("div")`
	max-width: 320px;
`;
const ImageWrapper = styled("div")`
	width: 79px;
	height: 79px;
	border: 2px solid #f0f4f7;
	margin: 0 14px 24px 0;
	border-radius: 50%;
	display: flex;
	align-items: center;
	filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.03));
`;
const ContactTopSection = styled("div")`
	display: flex;
	align-items: center;
`;
const Image = styled("img")`
	width: 72px;
	height: 23px;
`;
const Title = styled("h3")`
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #000000;
	margin: 0 0 14px 0;
`;
const ListWrapper = styled("div")`
	margin-bottom: 24px;
`;
type TextProps = {
	fontWeight: number;
	fontSize: string;
	lineheight: string;
	color: string;
};
const ListTitle = styled("span")<TextProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineheight};
	color: ${(props) => props.color};
`;

const Contacts = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	); ///// ПЕРЕРЕНДЕР ??????????

	return (
		<>
			<BackButton label={"Назад"} />
			<Box
				padding={breakpoint === "mobile" ? "14px 12px" : "16px 15.63px"}
				maxWidth={"674px"}
				background={"#FFFFFF"}
				boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
				borderRadius={"10px"}
			>
				<InnerWrapper>
					<ContactTopSection>
						<ImageWrapper>
							<Image src={CardImage} />
						</ImageWrapper>
						<Title>CHEСKMAT KAZAKHSTAN</Title>
					</ContactTopSection>
					{data.map((item, index) => (
						<ListWrapper
							key={Math.random()}
							sx={[
								item.icons
									? { display: "flex", alignItems: "center" }
									: {},
							]}
						>
							<ListTitle
								fontWeight={700}
								fontSize={"14px"}
								lineheight={"16px"}
								color={"#272727"}
							>
								{item.title}:{" "}
							</ListTitle>
							{!item.icons ? (
								<ListTitle
									fontWeight={400}
									fontSize={"14px"}
									lineheight={"16px"}
									color={"#848484;"}
								>
									{" "}
									{item.text}{" "}
								</ListTitle>
							) : (
								item.icons && item.icons.map((val) => val.icon)
							)}
						</ListWrapper>
					))}
				</InnerWrapper>
			</Box>
		</>
	);
};

export default Contacts;
