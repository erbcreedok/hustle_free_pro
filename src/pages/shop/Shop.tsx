import useBreakpoint from "use-breakpoint";
import SearchSection from "../../components/dashboard/shop/SearchSection";
import Products from "../../components/dashboard/shop/Products";
import { Wrapper } from "../../components/custom/defaultStyles";
import { TextProps } from "../../types/types";
import { useState } from "react";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const productData: TextProps[] = [
	{ id: 1, text1: "Кимоно для тхэквондо", text2: "54500" },
	{ id: 2, text1: "Шлем для бокса", text2: "51000" },
	{ id: 3, text1: "Очки для плавания", text2: "44500" },
	{ id: 4, text1: "Шлем для бокса", text2: "34600" },
	{ id: 5, text1: "Кимоно для тхэквондо", text2: "84200" },
	{ id: 6, text1: "Очки для плавания", text2: "92100" },
];

const searchInTable = (data: TextProps[], term: string) => {
	if (!term.length) {
		return data;
	}
	return data.filter((item) => {
		return isNaN(parseInt(term))
			? item.text1!.toLowerCase().indexOf(term.toLowerCase()) > -1
			: item.text2!.toLowerCase().indexOf(term.toLowerCase()) > -1;
	});
};

const Shop = () => {
	const [term, setTerm] = useState("");
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");
	const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	const newData = searchInTable(productData, term);
	return (
		<Wrapper
			maxWidth="674px"
			marginBottom={breakpoint === "mobile" ? "126px" : "70px"}
		>
			<SearchSection
				searchProduct={searchProduct}
				dataLength={newData.length}
			/>
			<Products data={newData} />
		</Wrapper>
	);
};

export default Shop;
