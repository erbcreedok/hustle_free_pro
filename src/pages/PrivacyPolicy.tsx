import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CustomCheckbox } from "../components/custom/Checkbox";
import { CustomButton } from "../components/custom/Button";
import { styled } from "@mui/material/styles";
import { PRIVACY_POLICY_TEXT } from "../components/privacyPolicy/privacyPolicyText";
import TopBar from "../components/bar/TopBar";
import { scrollStyles } from "../components/custom/styled";
import { Box } from "@mui/material";
// import ShowMoreText from "react-show-more-text";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const PrivacyWrapper = styled("div")`
	max-width: 624px;
	display: flex;
	flex-direction: column;
`;
const PrivacyTitle = styled("h3")`
	font-weight: bold;
	font-size: 24px;
	line-height: 36px;
	color: #000000;
	overflow-wrap: break-word;
`;
const PrivacyTextWrapper = styled("div")`
	background: #fafafa;
	padding: 10px 0px 0px 18.5px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #000000;
	margin-bottom: 10px;
	white-space: pre-wrap; /* Since CSS 2.1 */
	white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
	white-space: -pre-wrap; /* Opera 4-6 */
	white-space: -o-pre-wrap; /* Opera 7 */
	word-wrap: break-word;
	position: relative;
`;
const TextLayer = styled("div")`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 68.89%,
		#ffffff 89.36%
	);
`;
const MoreButton = styled("button")`
	z-index: 1000;
`;
const CheckboxWrapper = styled("div")`
	justify-content: flex-start;
	padding: 14px 0;
	display: flex;
`;
const ButtonWrapper = styled("div")`
	width: 100%;
`;
const CheckSpan = styled("span")`
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #848484;
	margin-left: 7px;
`;
const PrivacyCheckTextLink = styled("a")``;
const styles = () => ({
	color: "#000",
	bgcolor: "background.paper",
	// overflow: 'scroll',
	// height: '644px',
	backgroundColor: "#FAFAFA",
});

type IFormInputs = {
	checkbox: boolean;
};
const PrivacyPolicy = () => {
	const [showMore, setShowMore] = useState(false);
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	const { control, handleSubmit, register } = useForm<IFormInputs>({
		defaultValues: {
			checkbox: false,
		},
	});

	breakpoint === "mobile"
		? (document.body.style.backgroundColor = "#fff")
		: (document.body.style.backgroundColor = "#f0f4f7");

	return (
		<>
			{breakpoint !== "mobile" && <TopBar />}
			<Container
				maxWidth="xl"
				sx={{
					height: " 100vh ",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<PrivacyWrapper
					sx={{
						margin: "0 auto",
					}}
				>
					<PrivacyTitle
						sx={[
							breakpoint === "mobile"
								? { paddingRight: "0px", marginTop: "37px" }
								: { paddingRight: "30px" },
						]}
					>
						Политика конфиденциальности сайта Hustlefree.pro
					</PrivacyTitle>
					<PrivacyTextWrapper
						sx={[
							scrollStyles({
								width: "3px",
								background: "rgb(216,210,207)",
								hoverBackground: "#888",
								borderRadius: "10px",
							}),
							!showMore && breakpoint === "mobile"
								? {
										height: "unset !important",
										overflow: "unset",
								  }
								: { height: "644px", overflow: "scroll" },
						]}
					>
						{(breakpoint !== "mobile" && PRIVACY_POLICY_TEXT) ||
						(showMore && breakpoint === "mobile")
							? PRIVACY_POLICY_TEXT
							: `${PRIVACY_POLICY_TEXT.substring(0, 850)}`}
						{!showMore && breakpoint === "mobile" && (
							<CustomButton
								text={"Показать все"}
								width={"100%"}
								color={"#272727"}
								boxShadow={"none"}
								WrapperMargin={"0 auto"}
								transformText={"inherit"}
								fontSize={"12px"}
								zIndex={1}
								onClick={() => setShowMore(!showMore)}
							/>
						)}
						{!showMore && breakpoint === "mobile" && <TextLayer />}
					</PrivacyTextWrapper>
					<Controller
						name="checkbox"
						control={control}
						render={({ field, fieldState, formState }) => (
							<CheckboxWrapper>
								{/* ЧЕКБОКС ВНУТРИ ФОРМЫ БОЛУ КЕРЕКПА???? */}
								<CustomCheckbox
									checked={field.value}
									onChange={field.onChange}
								/>
								<CheckSpan>
									Нажимая данную кнопку, я подтверждаю, что
									ознакомился (ознакомилась) с положениями{" "}
									<PrivacyCheckTextLink href="#">
										Соглашения с пользователем
									</PrivacyCheckTextLink>{" "}
									и{" "}
									<PrivacyCheckTextLink href="#">
										Политики Конфеденциалнсти
									</PrivacyCheckTextLink>
								</CheckSpan>
							</CheckboxWrapper>
						)}
					/>
					<ButtonWrapper>
						<CustomButton
							width={"100%"}
							height={"54px"}
							text={"Продолжить"}
							backColor={
								"linear-gradient(69.51deg, #3E83E1 0%, #7B3EED 100%)"
							}
							position={"center"}
							WrapperMargin={"0 auto"}
						/>
					</ButtonWrapper>
				</PrivacyWrapper>
			</Container>
		</>
	);
};

export default PrivacyPolicy;
