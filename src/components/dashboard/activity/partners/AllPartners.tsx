import { FC, Fragment } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useBreakpoint from "use-breakpoint";
import {
	MediumCardWrapper,
	MediumCardImage,
	MediumCardTextWrapper,
	MediumCardText,
} from "../../../custom/cards/MediumCard";
import {
	MiniCardWrapper,
	MiniCardImage,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";
import { Link } from "react-router-dom";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper, TitleWrapper, Title } from "../../../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const data: TextProps[] = [
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
	{
		text1: "Скидка 20% на продукты питания от Degreen.kz.",
	},
];

const MiniCard = ({ item, index }: CardProps) => {
	return (
		<MiniCardWrapper
			display={"flex"}
			justify_content={"center"}
			width={"343px"}
			background={"#FFFFFF"}
			box_shadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			border_radius={"10px"}
			padding={"8px 10px"}
			align_items={"center"}
			margin={"0 0 14px 0"}
			key={index}
		>
			<MiniCardImage
				width={"71px"}
				height={"71px"}
				border_radius={"10px"}
			/>
			<MiniCardTextWrapper margin={"0 2px 0 10px"}>
				<MiniCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#272727"}
				>
					<Link
						to={`${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text1}
					</Link>
				</MiniCardText>
			</MiniCardTextWrapper>
			<Link to={`${index}`}>
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

const MeduimCard = ({ item, index }: CardProps) => {
	return (
		<MediumCardWrapper
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			// width={"327px"}
			bgcolor={"#FFFFFF"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={"12px"}
			key={index}
		>
			<MediumCardImage border_radius={"10px"} />
			<MediumCardTextWrapper>
				<MediumCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"16px"}
					color={"#272727"}
					margin={"12px 0 0 0"}
				>
					<Link
						to={`${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text1}
					</Link>
				</MediumCardText>
			</MediumCardTextWrapper>
		</MediumCardWrapper>
	);
};

const AllPartners: FC<DataProps> = () => {
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
					fontSize={"18px"}
					lineHeight={"21px"}
					color={"#272727"}
					margin={"34px"}
				>
					Партнеры
				</Title>
			</TitleWrapper>

			<Grid
				container
				columns={12}
				sx={[
					breakpoint === "mobile" && {
						marginBottom: "70px",
					},
				]}
			>
				<Grid
					container
					item
					rowSpacing={1}
					columnSpacing={2}
					md={12}
					lg={11}
				>
					{data.map((item, index) => (
						<Fragment key={Date.now() + Math.random()}>
							<Grid
								container
								item
								sm={12}
								md={6}
								lg={4}
								sx={[
									breakpoint === "mobile" && {
										justifyContent: "center",
									},
								]}
							>
								{breakpoint !== "mobile" ? (
									<MeduimCard item={item} index={index} />
								) : (
									<MiniCard item={item} index={index} />
								)}
							</Grid>
						</Fragment>
					))}
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default AllPartners;
