import { useNavigate } from "react-router-dom";
import { FC, useCallback } from "react";
import { styled } from "@mui/material/styles";
import UserCardImage from "../../../utils/images/GreetingCard/user_card_image.png";
import { CustomButton } from "../../../components/custom/Button";
import { TextProps, ProfileInfoData } from "../../../types/types";
import { Wrapper, TextWrapper, Text } from "../../custom/defaultStyles";

const data: TextProps[] = [
	{
		text1: "Имя",
		text2: "Maxim Tsinovkin",
	},
	{
		text1: "Вы с нами с",
		text2: "21.02.2021",
	},
	{
		text1: "Логин",
		text2: "12456",
	},
	{
		text1: "Договор",
		text2: "Подписан (Скачать)",
	},
	{
		text1: "Пояс",
		text2: "Красный",
	},
	{
		text1: "Дата рождения",
		text2: "21.07.1993",
	},
	{
		text1: "Электронный адрес",
		text2: "tsinovkin@mail.ru",
	},
	{
		text1: "Телефон",
		text2: "+7 (777) 777-77-77",
	},
];

const ProfileImage = styled("img")`
	width: 110px;
	height: 110px;
	border: 5px solid #ffffff;
	filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.03));
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ProfileInfo: FC<ProfileInfoData> = () => {
	const navigate = useNavigate();

	const onNavigate = useCallback(() => {
		navigate("edit");
	}, []);

	return (
		<>
			<Wrapper
				maxWidth="343px"
				bgcolor="#ffffff"
				boxShadow="0px 0px 30px rgba(0, 0, 0, 0.03)"
				borderRadius="10px"
				position="relative"
				padding="75px 12px 24px"
				marginBottom="14px"
				marginTop="95px"
			>
				<ProfileImage src={UserCardImage} />
				{data.map((item, index) => (
					<TextWrapper
						display="flex"
						justifyContent="space-between"
						marginBottom="12px"
						padding={0}
						key={index + item.text1}
					>
						<Text
							fontWeight={400}
							fontSize={"14px"}
							lineHeight={"16px"}
							color={"#848484"}
							margin={"0"}
						>
							{item.text1}
						</Text>
						<Text
							fontWeight={700}
							fontSize={"14px"}
							lineHeight={"16px"}
							color={"#272727"}
							margin={"0"}
						>
							{item.text2}
						</Text>
					</TextWrapper>
				))}
			</Wrapper>
			<CustomButton
				width={"100%"}
				height={"54px"}
				text={"Изменить"}
				onClick={onNavigate}
				backColor={
					"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
				}
				position={"center"}
			/>
		</>
	);
};

export default ProfileInfo;
