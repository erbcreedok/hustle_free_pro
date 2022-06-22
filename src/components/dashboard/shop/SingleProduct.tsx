import { FC, useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import CardImage from "../../../images/activity/single_partner.png";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CustomButton } from "../../custom/Button";
import Carousel from "react-material-ui-carousel";
import useBreakpoint from "use-breakpoint";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { BackButton } from "../../custom/BackButton";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const Wrapper = styled("div")`
	max-width: 674px;
	background: #ffffff;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
	border-radius: 10px;
	padding: 14px;
	display: flex;
	flex-direction: column;
	margin-bottom: 70px;
`;
const ImageWrapper = styled("div")`
	display: flex;
	flex-wrap: wrap;
`;
const Image = styled("img")`
	max-width: 319px;
	height: 250px;
	border-radius: 10px;
`;
const ProductPriceWrapper = styled("div")`
	margin-left: 16px;
`;
type TextProps = {
	fontWeight: number;
	fontSize: string;
	lineheight: string;
	color: string;
	margin?: string;
};
const ProductText = styled("p")<TextProps>`
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineheight};
	color: ${(props) => props.color};
	margin: ${(props) => props.margin};
`;
const CharacteristicWrapper = styled("div")`
	margin: 14px 0;
`;
const DescriptionWrapper = styled("div")`
	margin-top: 14px;
`;
// ???????????   CAROUSEL  ????????????????????????????

const SingleProduct = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	return (
		<>
			<BackButton label={"Назад"} />

			<Wrapper
				sx={[
					breakpoint === "mobile" && {
						maxWidth: "504px",
						margin: "0 auto",
						marginBottom: "70px",
					},
				]}
			>
				<ImageWrapper>
					<Image
						sx={[
							breakpoint === "mobile" && { maxWidth: "100%" },
							{
								maxWidth: { sm: "100%", md: "319px" },
							},
						]}
						src={CardImage}
					/>

					<ProductPriceWrapper
						sx={{
							margin: { xs: "14px 0", md: "0 0 0 16px" },
						}}
					>
						<ProductText
							fontWeight={700}
							fontSize={"18px"}
							lineheight={"21px"}
							color={"#272727"}
							margin={"0 0 14px 0"}
						>
							Кимоно для тхэквондо
						</ProductText>
						<ProductText
							fontWeight={700}
							fontSize={"12px"}
							lineheight={"14px"}
							color={"#848484"}
							margin={"0 0 14px 0"}
						>
							Артикул: 365434
						</ProductText>
						<ProductText
							fontWeight={700}
							fontSize={"18px"}
							lineheight={"21px"}
							color={"#272727"}
							margin={"0 0 14px 0"}
						>
							54500 тнг
						</ProductText>
						<CustomButton
							width={"100%"}
							height={"48px"}
							text={"Купить"}
							backColor={
								"linear-gradient(69.51deg, #00A859 0%, #00A859 100%)"
							}
							position={"center"}
						/>
					</ProductPriceWrapper>
				</ImageWrapper>
				<Divider />

				<CharacteristicWrapper>
					<ProductText
						fontWeight={700}
						fontSize={"14px"}
						lineheight={"16px"}
						color={"#272727"}
						margin={"0 0 12px 0"}
					>
						Характеристики:
					</ProductText>
					<ul>
						{[1, 2, 3].map((item, index) => (
							<li key={index}>
								<ProductText
									fontWeight={400}
									fontSize={"14px"}
									lineheight={"16px"}
									color={"#272727"}
									margin={"0"}
								>
									100% хлопок. Плотность 200 гр./м
								</ProductText>
							</li>
						))}
					</ul>
				</CharacteristicWrapper>
				<Divider />

				<DescriptionWrapper
					sx={[
						breakpoint === "mobile" && {
							maxWidth: "319px",
						},
					]}
				>
					<ProductText
						fontWeight={700}
						fontSize={"14px"}
						lineheight={"16px"}
						color={"#272727"}
						margin={"0 0 12px 0"}
					>
						Описание:
					</ProductText>

					<ProductText
						fontWeight={400}
						fontSize={"14px"}
						lineheight={"21px"}
						color={"#272727"}
						margin={"0"}
					>
						Arcu hendrerit iaculis himenaeos senectus orci justo,
						tristique hac conubia erat libero. Ornare dapibus tellus
						finibus ullamcorper vehicula dis parturient, suscipit
						praesent aliquam lacinia donec condimentum luctus,
						imperdiet auctor facilisi enim odio risus.
					</ProductText>
				</DescriptionWrapper>
			</Wrapper>
		</>
	);
};

export default SingleProduct;
