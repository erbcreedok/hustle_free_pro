import { styled } from "@mui/material/styles";
import { Title } from "../../custom/defaultStyles";

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
type Props = {
	searchProduct: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchSection = ({
	searchProduct,
	dataLength,
}: {
	searchProduct: any;
	dataLength: number;
}) => {
	return (
		<>
			<SearchInput onChange={searchProduct} />

			<Title
				fontWeight={400}
				fontSize={"14px"}
				lineHeight={"16px"}
				color={"#272727;"}
				margin={"34px 0"}
			>
				По вашему запросу найдено <b>{dataLength}</b> товаров
			</Title>
		</>
	);
};

export default SearchSection;
