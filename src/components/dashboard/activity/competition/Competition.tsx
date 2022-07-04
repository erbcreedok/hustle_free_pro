import { FC, useRef } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useDraggable } from "react-use-draggable-scroll";
import useBreakpoint from "use-breakpoint";
import { scrollStyles } from "../../../custom/defaultStyles";
import {
	MediumCardWrapper,
	MediumCardImage,
	MediumCardTextWrapper,
	MediumCardText,
} from "../../../custom/cards/MediumCard";
import { Link } from "react-router-dom";
import { ShowAllButton } from "../../../custom/ShowAllButton";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper, TitleWrapper, Title } from "../../../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const data: TextProps[] = [
	{ id: 1, text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)", text2: "05 июня" },
	{ id: 2, text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)", text2: "05 июня" },
	{ id: 3, text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)", text2: "05 июня" },
	{ id: 4, text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)", text2: "05 июня" },
];

const CardsWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	max-width: 768px;
	overflow-x: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const Card = ({ item, index }: CardProps) => {
	return (
		<MediumCardWrapper
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={"10px"}
			margin={"0 20px 0 0"}
		>
			<MediumCardImage border_radius={"10px"} />
			<MediumCardTextWrapper>
				<MediumCardText
					fontWeight={700}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#000000"}
					margin={"6px 0 4px 0"}
				>
					<Link
						to={`competitions/${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text1}
					</Link>
				</MediumCardText>
				<MediumCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#848484"}
				>
					{item.text2}
				</MediumCardText>
			</MediumCardTextWrapper>
		</MediumCardWrapper>
	);
};

const ScrollCards: FC<DataProps> = () => {
	const ref =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	return (
		<CardsWrapper
			{...events}
			ref={ref}
			sx={[
				scrollStyles({
					height: "8px",
					background: "rgb(216,210,207)",
					hoverBackground: "#888",
					borderRadius: "10px",
				}),
			]}
		>
			{data.map((item, index) => (
				<Card item={item} index={index} />
			))}
		</CardsWrapper>
	);
};

const Competition: FC<DataProps> = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<Wrapper marginBottom="34px">
			<TitleWrapper
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Title
					fontWeight={700}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#000000"}
					margin={"0 0 24px 0"}
				>
					Соревнования
				</Title>
				<ShowAllButton
					label="Посмотреть все"
					to="competitions"
					margin="0 0 24px 0"
				/>
			</TitleWrapper>
			{breakpoint === "mobile" ? (
				<ScrollCards />
			) : (
				<Grid container columns={12}>
					<Grid container item spacing={2} xs={11.5}>
						{data.map((item, index) => (
							<Grid item sm={6} md={6} lg={3} key={item.id}>
								{<Card item={item} index={index} />}
							</Grid>
						))}
					</Grid>
				</Grid>
			)}
		</Wrapper>
	);
};

export default Competition;
