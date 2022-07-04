import { FC } from "react";
import { styled } from "@mui/material/styles";
import { BackButton } from "../../custom/BackButton";
import { PaymentTextProps, PaymentDataProps } from "../../../types/types";
import { Wrapper, Title } from "../../custom/defaultStyles";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const paymentData: PaymentTextProps[] = [
	{
		id: 1,
		title: "Перевод на Kaspi счет",
		definition:
			"Перевети деньги можно по номеру телефона +7 (777) 777-77-77",
	},
	{
		id: 2,
		title: "Оплата безналичным путем для ЮР.лиц",
		definition: "Оплатить можно по номеру счета KZ8181818818818181",
	},
];
const SubTitle = styled(Title)`
	margin: 14px 0 20px 0;
	font-size: 16px;
`;

const DL = styled("dl")`
	font-size: 0.9rem;
`;
const DT = styled("dt")`
	font-weight: 700;
	font-size: 14px;
	line-height: 21px;
	color: #000000;
`;
const DD = styled("div")`
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #272727;
	margin-bottom: 20px;
	padding: 0;
	margin-left: 0px;
`;
const OL = styled("ol")`
	padding: 0 16px;
	font-weight: bold;
`;

const WorkoutPayment: FC<PaymentDataProps> = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<>
			<BackButton label={"Назад"} />

			<Wrapper
				maxWidth="674px"
				bgcolor="#ffffff"
				boxShadow="0px 0px 30px rgba(0, 0, 0, 0.03)"
				borderRadius="10px"
				padding="16px 15.63px"
				marginBottom={breakpoint === "mobile" ? "70px" : "34px"}
			>
				<Title
					fontWeight={700}
					fontSize="18px"
					lineHeight="21px"
					color="#000000"
					margin="0 0 14px 0"
				>
					Как оплатить тренировки?
				</Title>
				<SubTitle>Оплатить тренировки можно тремя способами:</SubTitle>
				<OL>
					<DL>
						{paymentData.map((item, index) => (
							<li key={item.id}>
								<DT>{item.title}</DT>
								<DD>{item.definition}</DD>
							</li>
						))}
					</DL>
				</OL>
			</Wrapper>
		</>
	);
};

export default WorkoutPayment;
