import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { styled } from "@mui/material/styles";
import UserCardImage from "../../../images/GreetingCard/user_card_image.png";
import { CustomButton } from "../../../components/custom/Button";

type NewsTextProp = {
	title: string;
	text: string;
};
const userData: NewsTextProp[] = [
	{
		title: "Имя",
		text: "Maxim Tsinovkin",
	},
	{
		title: "Вы с нами с",
		text: "21.02.2021",
	},
	{
		title: "Логин",
		text: "12456",
	},
	{
		title: "Договор",
		text: "Подписан (Скачать)",
	},
	{
		title: "Пояс",
		text: "Красный",
	},
	{
		title: "Дата рождения",
		text: "21.07.1993",
	},
	{
		title: "Электронный адрес",
		text: "tsinovkin@mail.ru",
	},
	{
		title: "Телефон",
		text: "+7 (777) 777-77-77",
	},
];

const ProfileWrapper = styled("div")`
	max-width: 343px;
	background: #ffffff;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
	border-radius: 10px;
	position: relative;
	padding: 75px 12px 24px;
	margin-bottom: 14px;
	margin-top: 95px;
`;
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
const ProfileTextWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
	padding: 0;
`;
type TextProps = {
	fontWeight: number;
	fontSize: string;
	lineheight: string;
	color: string;
	margin?: string;
};
const ProfileText = styled("p")<TextProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineheight};
	color: ${(props) => props.color};
	margin: ${(props) => props.margin};
`;

const ProfileInfo = () => {
	const navigate = useNavigate();

	const onNavigate = useCallback(() => {
		navigate("edit");
	}, []); // зависимость????

	return (
		<>
			<ProfileWrapper>
				<ProfileImage src={UserCardImage} />
				{(userData as NewsTextProp[]).map((item, index) => (
					<ProfileTextWrapper>
						<ProfileText
							fontWeight={400}
							fontSize={"14px"}
							lineheight={"16px"}
							color={"#848484"}
							margin={"0"}
						>
							{item.title}
						</ProfileText>
						<ProfileText
							fontWeight={700}
							fontSize={"14px"}
							lineheight={"16px"}
							color={"#272727"}
							margin={"0"}
						>
							{item.text}
						</ProfileText>
					</ProfileTextWrapper>
				))}
			</ProfileWrapper>
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
