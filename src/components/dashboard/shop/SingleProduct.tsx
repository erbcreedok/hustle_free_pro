import { styled } from "@mui/material/styles";
import CardImage from "../../../images/activity/single_partner.png";
import Divider from "@mui/material/Divider";
import { CustomButton } from "../../custom/Button";
import useBreakpoint from "use-breakpoint";
import { BackButton } from "../../custom/BackButton";
import { Wrapper, Text } from "../../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280, minWidth: 900 };

const ImageWrapper = styled("div")`
	display: flex;
	flex-wrap: wrap;
`;
const Image = styled("img")`
	max-width: 319px;
	height: 250px;
	border-radius: 10px;
	object-fit: cover;
`;
const ProductPriceWrapper = styled("div")`
	margin-left: 16px;
`;

const CharacteristicWrapper = styled("div")`
	margin: 14px 0;
`;
const DescriptionWrapper = styled("div")`
	margin-top: 14px;
`;

const SingleProduct = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<>
			<BackButton label={"Назад"} />

			<Wrapper
				maxWidth={breakpoint === "mobile" ? "504px" : "674px"}
				bgcolor="#ffffff"
				boxShadow="0px 0px 30px rgba(0, 0, 0, 0.03)"
				borderRadius="10px"
				padding="14px"
				display="flex"
				flexDirection="column"
				marginBottom="126px !important"
				margin={breakpoint === "mobile" ? "0 auto" : ""}
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
						<Text
							fontWeight={700}
							fontSize={"18px"}
							lineHeight={"21px"}
							color={"#272727"}
							margin={"0 0 14px 0"}
						>
							Кимоно для тхэквондо
						</Text>
						<Text
							fontWeight={700}
							fontSize={"12px"}
							lineHeight={"14px"}
							color={"#848484"}
							margin={"0 0 14px 0"}
						>
							Артикул: 365434
						</Text>
						<Text
							fontWeight={700}
							fontSize={"18px"}
							lineHeight={"21px"}
							color={"#272727"}
							margin={"0 0 14px 0"}
						>
							54500 тнг
						</Text>
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
					<Text
						fontWeight={700}
						fontSize={"14px"}
						lineHeight={"16px"}
						color={"#272727"}
						margin={"0 0 12px 0"}
					>
						Характеристики:
					</Text>
					<ul>
						{[1, 2, 3].map((item, index) => (
							<li key={index}>
								<Text
									fontWeight={400}
									fontSize={"14px"}
									lineHeight={"16px"}
									color={"#272727"}
									margin={"0"}
								>
									100% хлопок. Плотность 200 гр./м
								</Text>
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
					<Text
						fontWeight={700}
						fontSize={"14px"}
						lineHeight={"16px"}
						color={"#272727"}
						margin={"0 0 12px 0"}
					>
						Описание:
					</Text>

					<Text
						fontWeight={400}
						fontSize={"14px"}
						lineHeight={"21px"}
						color={"#272727"}
						margin={"0"}
					>
						Arcu hendrerit iaculis himenaeos senectus orci justo,
						tristique hac conubia erat libero. Ornare dapibus tellus
						finibus ullamcorper vehicula dis parturient, suscipit
						praesent aliquam lacinia donec condimentum luctus,
						imperdiet auctor facilisi enim odio risus.
					</Text>
				</DescriptionWrapper>
			</Wrapper>
		</>
	);
};

export default SingleProduct;
