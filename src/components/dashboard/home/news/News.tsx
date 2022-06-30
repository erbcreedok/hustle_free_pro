import { FC } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import {
	MiniCardWrapper,
	MiniCardImage,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";
import { ShowAllButton } from "../../../custom/ShowAllButton";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper, TitleWrapper, Title } from "../../../custom/defaultStyles";

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
			padding={"8px 10px"}
			alignItems={"center"}
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
					lineHeight={"14px"}
					color={"#848484"}
					margin={"0 0 4px 0"}
				>
					{item.text1}
				</MiniCardText>
				<MiniCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#272727"}
				>
					<Link
						to={`news/${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text2}
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

const News: FC<DataProps> = () => {
	return (
		<Wrapper maxWidth="343px" display="flex" flexDirection="column">
			<TitleWrapper
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Title
					margin="0 0 14px 0"
					fontWeight={700}
					fontSize="18px"
					lineHeight="21px"
					color="#000000"
				>
					Новости
				</Title>
				<ShowAllButton
					label="Посмотреть все"
					to="news"
					margin="0 0 14px 0"
				/>
			</TitleWrapper>
			{data.map((item, index) => (
				<Card item={item} index={index} key={item.text1 + index} />
			))}
		</Wrapper>
	);
};

export default News;
