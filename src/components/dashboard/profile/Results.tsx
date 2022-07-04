import { FC, useCallback } from "react";
import { CustomButton } from "../../../components/custom/Button";
import { useNavigate } from "react-router-dom";
import {
	MiniCardWrapper,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../custom/cards/MiniCard";
import { TextProps, CardProps, DataProps } from "../../../types/types";
import { Wrapper, TitleWrapper, Text } from "../../custom/defaultStyles";

const data: TextProps[] = [
	{
		id: 1,
		text1: "21.02.2021",
		text2: "Чемпионата и Первенства Казахстана по киокушинкай",
		text3: "Результат: 1 место / Баллы: 20",
	},
	{
		id: 2,
		text1: "21.02.2021",
		text2: "Чемпионата и Первенства Казахстана по киокушинкай",
		text3: "Результат: 1 место / Баллы: 20",
	},
	{
		id: 3,
		text1: "21.02.2021",
		text2: "Чемпионата и Первенства Казахстана по киокушинкай",
		text3: "Результат: 1 место / Баллы: 20",
	},
];

const Card = ({ item, index }: CardProps) => {
	return (
		<MiniCardWrapper
			display={"flex"}
			justifyContent={"center"}
			flexDirection={"column"}
			width={"100%"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={"12px"}
			margin={"0 0 14px 0"}
		>
			<MiniCardTextWrapper>
				<MiniCardText
					fontWeight={700}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#6D4EEA"}
					margin={"0 0 6px 0"}
				>
					{item.text1}
				</MiniCardText>
				<MiniCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#272727"}
				>
					{item.text2}
				</MiniCardText>
				<MiniCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#848484"}
				>
					{item.text3}
				</MiniCardText>
			</MiniCardTextWrapper>
		</MiniCardWrapper>
	);
};

const Results: FC<DataProps> = () => {
	const navigate = useNavigate();

	const onNavigate = useCallback(() => {
		navigate("add");
	}, []);

	return (
		<Wrapper width="100%" marginTop="34px">
			<TitleWrapper
				width="100%"
				display="flex"
				justifyContent="space-between"
				marginBottom="14px"
			>
				<Text
					display="inline"
					fontWeight={700}
					fontSize={"18px"}
					lineHeight={"21px"}
					color={"#000000"}
				>
					Мои результаты
				</Text>
				<Text
					display="inline"
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#272727"}
				>
					Рейтинг: 105
				</Text>
			</TitleWrapper>
			{data.map((item, index) => (
				<Card item={item} index={index} key={item.id} />
			))}
			<CustomButton
				width={"100%"}
				height={"54px"}
				text={"Добавить результат"}
				onClick={onNavigate}
				backColor={
					"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
				}
				position={"center"}
			/>
		</Wrapper>
	);
};

export default Results;
