import { FC } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
	MiniCardWrapper,
	MiniCardTextWrapper,
	MiniCardText,
} from "../../../custom/cards/MiniCard";
import { Link } from "react-router-dom";
import { TextProps, CardProps, DataProps } from "../../../../types/types";
import { Wrapper } from "../../../custom/defaultStyles";

const data: TextProps[] = [
	{
		text1: "Как оплатить тренировки?",
		text2: "Информация о стоимости и способах оплаты тренировок",
		link: "payment",
	},
	{
		text1: "Контакты ",
		text2: "Мкр. Самал, д. 2/3, 3 этаж, +7 (777) 777-77-77",
		link: "contacts",
	},
];

const Card = ({ item, index }: CardProps) => {
	return (
		<MiniCardWrapper
			display={"flex"}
			justifyContent={"space-between"}
			border={"1px dashed #CACACA"}
			boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.03)"}
			borderRadius={"10px"}
			padding={"14px 16px"}
			alignItems={"center"}
			margin={"0 0 14px 0"}
			key={index}
		>
			<MiniCardTextWrapper>
				<MiniCardText
					fontWeight={700}
					fontSize={"14px"}
					lineHeight={"16px"}
					color={"#2F80ED"}
					margin={"0 10px 4px 0"}
					sx={{ textDecoration: "underline" }}
				>
					<Link
						to={item.link ?? "payment"}
						style={{ color: "inherit" }}
					>
						{item.text1}
					</Link>
				</MiniCardText>
				<MiniCardText
					fontWeight={400}
					fontSize={"12px"}
					lineHeight={"14px"}
					color={"#848484"}
					margin={"0 10px 0 0 "}
				>
					{item.text2}
				</MiniCardText>
			</MiniCardTextWrapper>
			<Link to={item.link ?? "payment"}>
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

const Contacts: FC<DataProps> = () => {
	return (
		<Wrapper maxWidth="343px">
			{data.map((item, index) => (
				<Card item={item} index={index} key={item.text1 + index} />
			))}
		</Wrapper>
	);
};

export default Contacts;
