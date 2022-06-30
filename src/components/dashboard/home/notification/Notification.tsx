import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
	MiniCardWrapper,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper, Title } from "../../../custom/defaultStyles";

const data: TextProps[] = [
	{
		text1: "24.01.2021",
		text2: "Вы пропустили тренировку, не забудьте посетить ее завтра",
	},
	{
		text1: "24.01.2021",
		text2: "Вы пропустили тренировку, не забудьте посетить ее завтра",
	},
	{
		text1: "24.01.2021",
		text2: "Вы пропустили тренировку, не забудьте посетить ее завтра",
	},
];

const Card = ({ item, index }: CardProps) => {
	return (
		<MiniCardWrapper
			display={"flex"}
			justifyContent={"center"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={"19px 16px"}
			alignItems={"center"}
			margin={"0 0 14px 0"}
			position={"relative"}
			key={index}
		>
			<MiniCardTextWrapper margin={"0 0 0 10px"}>
				<MiniCardText
					fontWeight={400}
					fontSize={"12px"}
					lineHeight={"14px"}
					color={"#848484"}
					margin={"0 10px 4px 0"}
				>
					{item.text1}
				</MiniCardText>
				<MiniCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#272727"}
					margin={"0 15px 0 0"}
				>
					{item.text2}
				</MiniCardText>
			</MiniCardTextWrapper>
			<CloseIcon
				sx={{
					color: "#848484",
					width: "15px",
					height: "15px",
					position: "absolute",
					top: "15px",
					right: "15px",
				}}
			/>
		</MiniCardWrapper>
	);
};

const Notification: FC<DataProps> = () => {
	return (
		<Wrapper maxWidth="343px" display="flex" flexDirection="column">
			<Title
				width="100%"
				margin="0 0 14px 0"
				fontWeight={700}
				fontSize="18px"
				lineHeight="21px"
				color="#000000"
			>
				Уведомления
			</Title>
			{data.map((item, index) => (
				<Card item={item} index={index} key={item.text1 + index} />
			))}
		</Wrapper>
	);
};

export default Notification;
