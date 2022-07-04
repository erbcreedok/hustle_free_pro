import { FC, Fragment } from "react";
import { Grid } from "@mui/material";
import useBreakpoint from "use-breakpoint";
import {
	MediumCardWrapper,
	MediumCardImage,
	MediumCardTextWrapper,
	MediumCardText,
} from "../../../custom/cards/MediumCard";
import { Link } from "react-router-dom";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper, TitleWrapper, Title } from "../../../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const data: TextProps[] = [
	{ id: 1, text1: "AIGA СРЕДИ МАСТЕРОВ (+30 ЛЕТ)", text2: "05 июня" },
	{ id: 2, text1: "AIGA СРЕДИ МАСТЕРОВ (+20 ЛЕТ)", text2: "06 июня" },
	{ id: 3, text1: "AIGA СРЕДИ МАСТЕРОВ (+40 ЛЕТ)", text2: "07 июня" },
	{ id: 4, text1: "AIGA СРЕДИ МАСТЕРОВ (+50 ЛЕТ)", text2: "08 июня" },
	{ id: 5, text1: "AIGA СРЕДИ МАСТЕРОВ (+10 ЛЕТ)", text2: "09 июня" },
	{ id: 6, text1: "AIGA СРЕДИ МАСТЕРОВ (+25 ЛЕТ)", text2: "10 июня" },
];

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
			key={index}
		>
			<MediumCardImage border_radius={"10px"} />
			<MediumCardTextWrapper>
				<MediumCardText
					fontWeight={700}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#000000;"}
					margin={"6px 0 4px 0"}
				>
					<Link
						to={`${index}`}
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

const AllCompetitions: FC<DataProps> = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<Wrapper marginBottom={breakpoint === "mobile" ? "70px" : "34px"}>
			<TitleWrapper
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Title
					fontWeight={700}
					fontSize="14px"
					lineHeight="16px"
					color="#000000"
					margin="24px 0"
				>
					Соревнования
				</Title>
			</TitleWrapper>

			<Grid container columns={12}>
				<Grid container item spacing={2} xs={12} md={9}>
					{data.map((item, index) => (
						<Fragment key={item.id}>
							<Grid item xs={6} lg={4}>
								{<Card item={item} index={index} />}
							</Grid>
						</Fragment>
					))}
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default AllCompetitions;
