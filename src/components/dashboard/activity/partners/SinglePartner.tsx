import { FC } from "react";
import Divider from "@mui/material/Divider";
import {
	LargeCardWrapper,
	LargeCardImage,
	LargeCardTextWrapper,
	LargeCardText,
} from "../../../custom/cards/LargeCard";
import useBreakpoint from "use-breakpoint";
import { BackButton } from "../../../custom/BackButton";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper } from "../../../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const data: TextProps[] = [
	{
		text1: "Degreen.kz",
		text2: "Используйте промокод CheckMat2021 и получите скидку на фитнес набор для набора мышечной массы от нашего партнера Degreen.kz",
	},
];

const Card = ({ item, index }: CardProps) => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<LargeCardWrapper
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={
				breakpoint === "mobile" ? "12px 12px 58px" : "16px 16px 24px"
			}
			key={index}
		>
			<LargeCardImage border_radius={"10px"} width={"100%"} />
			<LargeCardTextWrapper>
				<LargeCardText
					fontWeight={700}
					fontSize={"18px"}
					lineHeight={"wqpx"}
					color={"#272727;"}
					margin={"14px 0"}
				>
					{item.text1}
				</LargeCardText>
				<Divider />
				<LargeCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"21px"}
					color={"#272727"}
					margin={"14px 0 0"}
				>
					{item.text2}
				</LargeCardText>
			</LargeCardTextWrapper>
		</LargeCardWrapper>
	);
};

const SinglePartner: FC<DataProps> = () => {
	return (
		<>
			<BackButton label={"Назад"} />
			<Wrapper maxWidth="674px" marginBottom="70px">
				{data.map((item, index) => (
					<Card item={item} index={index} key={index} />
				))}
			</Wrapper>
		</>
	);
};

export default SinglePartner;
