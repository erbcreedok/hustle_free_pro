import { FC, useState, useCallback, useEffect, Fragment } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PartnerImage from "../../../../images/activity/partner_image.png";
// import MiniCard from '../../../../components/custom/MiniCard';
import useBreakpoint from "use-breakpoint";
import { Routes, Route, Link, Outlet } from "react-router-dom";
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

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

type NewsTextProp = {
	text1: string;
	text2: string;
};

const newsData: NewsTextProp[] = [
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

const Wrapper = styled("div")`
	margin-bottom: 34px;
`;

const TitleWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

type TitleProps = {
	fontWeight: number;
	fontSize: string;
	lineheight: string;
	color: string;
	margin?: string;
};
const Title = styled("h3")<TitleProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineheight};
	color: ${(props) => props.color};
	margin-bottom: ${(props) => props.margin};
`;

type MiniCardProps = {
	// ?????? ANY ?????????
	item: any;
	index: number;
};
const MiniCard = ({ item, index }: MiniCardProps) => {
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
			<MiniCardTextWrapper margin={"0 0 0 10px"}>
				<MiniCardText
					fontWeight={400}
					fontSize={"12px"}
					lineheight={"14px"}
					color={"#848484"}
					margin={"0 0 4px 0"}
				>
					{item.text1}
				</MiniCardText>

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

type MediumCardProps = {
	// ?????? ANY ?????????
	item: any;
	index: any;
};
const MediumCard = ({ item, index }: MediumCardProps) => {
	return (
		<MediumCardWrapper
			display={"flex"}
			flex_direction={"column"}
			justify_content={"center"}
			width={"327px"}
			background={"#FFFFFF"}
			box_shadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			border_radius={"10px"}
			padding={"12px"}
			key={index}
		>
			<MediumCardImage border_radius={"10px"} />
			<MediumCardTextWrapper>
				<MediumCardText
					fontWeight={700}
					fontSize={"12px"}
					lineheight={"14px"}
					color={"#848484"}
					margin={"12px 0 4px 0"}
				>
					{item.text1}
				</MediumCardText>

				<MediumCardText
					fontWeight={400}
					fontSize={"14px"}
					lineheight={"16px"}
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

const AllNews = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	return (
		<Wrapper
			sx={[
				breakpoint === "mobile" && {
					marginBottom: "70px",
				},
			]}
		>
			<TitleWrapper>
				<Title
					fontWeight={700}
					fontSize={"18px"}
					lineheight={"21px"}
					color={"#000000"}
					margin={"34px"}
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
					{(newsData as NewsTextProp[]).map((item, index) => (
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
