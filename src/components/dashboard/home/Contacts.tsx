import { styled } from "@mui/material/styles";
import CardImage from "../../../images/home/contacts_image.svg";
import useBreakpoint from "use-breakpoint";

import { ReactComponent as FacebookIcon } from "../../../images/icons/contacts/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../images/icons/contacts/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../images/icons/contacts/youtube.svg";
import { ReactComponent as VkIcon } from "../../../images/icons/contacts/vk.svg";
import { ReactComponent as WhatsAppIcon } from "../../../images/icons/contacts/whatsapp.svg";
import { BackButton } from "../../custom/BackButton";
import { ContactsTextProps } from "../../../types/types";
import { Wrapper, Title } from "../../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const Icon = styled("svg")`
	width: 20px;
	height: 20px;
	margin-left: 12px;
`;
const data: ContactsTextProps[] = [
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

const InnerWrapper = styled("div")`
	max-width: 320px;
`;
const ListWrapper = styled("div")`
	margin-bottom: 24px;
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

const Contacts = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<>
			<BackButton label={"Назад"} />
			<Wrapper
				padding={breakpoint === "mobile" ? "14px 12px" : "16px 15.63px"}
				maxWidth={"674px"}
				bgcolor={"#FFFFFF"}
				boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
				borderRadius={"10px"}
			>
				<InnerWrapper>
					<ContactTopSection>
						<ImageWrapper>
							<Image src={CardImage} />
						</ImageWrapper>
						<Title
							fontWeight={700}
							fontSize="18px"
							lineHeight="21px"
							color="#000000"
							margin="0 0 14px 0"
						>
							CHEСKMAT KAZAKHSTAN
						</Title>
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
							<Title
								display="inline"
								fontWeight={700}
								fontSize={"14px"}
								lineHeight={"16px"}
								color={"#272727"}
							>
								{item.title}:{" "}
							</Title>
							{!item.icons ? (
								<Title
									display="inline"
									fontWeight={400}
									fontSize={"14px"}
									lineHeight={"16px"}
									color={"#848484;"}
								>
									{" "}
									{item.text}{" "}
								</Title>
							) : (
								item.icons && item.icons.map((val) => val.icon)
							)}
						</ListWrapper>
					))}
				</InnerWrapper>
			</Wrapper>
		</>
	);
};

export default Contacts;
