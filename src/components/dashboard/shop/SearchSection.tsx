import { styled } from "@mui/material/styles";

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
const SearchInput = styled("input")`
	width: 100%;
	height: 43px;
	background: #f9f9f9;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
	border-radius: 10px;
	border: 0px;
	font-size: 14px;
	font-family: Raleway;
	line-height: 16px;
	&:focus {
		outline: none;
	}
`;

const SearchSection = () => {
	return (
		<>
			<SearchInput />

			<Title
				fontWeight={400}
				fontSize={"14px"}
				lineheight={"16px"}
				color={"#272727;"}
				margin={"34px"}
			>
				По вашему запросу найдено <b>10</b> товаров
			</Title>
		</>
	);
};

export default SearchSection;
