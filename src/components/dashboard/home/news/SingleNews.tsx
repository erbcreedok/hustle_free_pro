import { FC } from "react";
import { styled } from "@mui/material/styles";
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
		text1: "24.01.2021",
		text2: "Клубные карты уже доступны в продаже",
		text3: "Arcu hendrerit iaculis himenaeos senectus orci justo, tristique hac conubia erat libero. Ornare dapibus tellus finibus ullamcorper vehicula dis parturient, suscipit praesent aliquam lacinia donec condimentum luctus, imperdiet auctor facilisi enim odio risus. Facilisi auctor eu finibus at cubilia quis venenatis, sed dui sociosqu justo iaculis facilisis molestie vulputate, nullam inceptos elementum pretium amet tincidunt. Felis pellentesque fames venenatis accumsan ullamcorper potenti feugiat ornare aliquet, orci at tristique dolor ultricies maecenas vulputate rhoncus dui mattis, sodales molestie consequat finibus vehicula per montes vitae.",
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
			padding={breakpoint === "mobile" ? "12px" : "16px"}
			key={index}
		>
			<LargeCardImage border_radius={"10px"} width={"100%"} />
			<LargeCardTextWrapper>
				<LargeCardText
					fontWeight={400}
					fontSize={"12px"}
					lineHeight={"14px"}
					color={"#848484;"}
					margin={"14px 0"}
				>
					{item.text1}
				</LargeCardText>
				<LargeCardText
					fontWeight={700}
					fontSize={"18px"}
					lineHeight={"21px"}
					color={"#000000"}
					margin={"0 0 14px"}
				>
					{item.text2}
				</LargeCardText>
				<LargeCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"21px"}
					color={"#272727"}
				>
					{item.text3}
				</LargeCardText>
			</LargeCardTextWrapper>
		</LargeCardWrapper>
	);
};

const SingleNews: FC<DataProps> = () => {
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

export default SingleNews;
