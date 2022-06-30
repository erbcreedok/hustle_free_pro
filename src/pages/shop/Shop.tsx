import useBreakpoint from "use-breakpoint";
import SearchSection from "../../components/dashboard/shop/SearchSection";
import Products from "../../components/dashboard/shop/Products";
import { Wrapper } from "../../components/custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const Shop = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<Wrapper
			maxWidth="674px"
			marginBottom={breakpoint === "mobile" ? "126px" : "70px"}
		>
			<SearchSection />
			<Products />
		</Wrapper>
	);
};

export default Shop;
