import { FC, Fragment } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useBreakpoint from "use-breakpoint";
import { Link } from "react-router-dom";
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
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper, TitleWrapper, Title } from "../../../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const data: TextProps[] = [
	{
		text1: "24.01.2021",
		text2: "Клубные карты уже доступны в продаже, подробности...",
	},
	{
		text1: "24.01.2021",
		text2: "Клубные карты уже доступны в продаже, подробности...",
	},
	{
		text1: "24.01.2021",
		text2: "Клубные карты уже доступны в продаже, подробности...",
	},
	{
		text1: "24.01.2021",
		text2: "Клубные карты уже доступны в продаже, подробности...",
	},
	{
		text1: "24.01.2021",
		text2: "Клубные карты уже доступны в продаже, подробности...",
	},
	{
		text1: "24.01.2021",
		text2: "Клубные карты уже доступны в продаже, подробности...",
	},
];

const MiniCard = ({ item, index }: CardProps) => {
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
						to={`${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{item.text2}
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

const MediumCard = ({ item, index }: CardProps) => {
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
					fontWeight={700}
					fontSize={"12px"}
					lineHeight={"14px"}
					color={"#848484"}
					margin={"12px 0 4px 0"}
				>
					{item.text1}
				</MediumCardText>

				<MediumCardText
					fontWeight={400}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#272727"}
				>
					<Link
						to={`${index}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{" "}
						{item.text2}
					</Link>
				</MediumCardText>
			</MediumCardTextWrapper>
		</MediumCardWrapper>
	);
};

const AllNews: FC<DataProps> = () => {
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
					fontSize={"18px"}
					lineHeight={"21px"}
					color={"#000000"}
					margin={"34px 0"}
				>
					Новости
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
				<Grid container item spacing={2} md={12} lg={11}>
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
									<MediumCard item={item} index={index} />
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

export default AllNews;
