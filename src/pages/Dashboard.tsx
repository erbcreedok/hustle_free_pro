import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import BottomNav from "../components/dashboard/navigation/BottomNav";
import SideBar from "../components/dashboard/navigation/SideBar";
import useBreakpoint from "use-breakpoint";
import TopBar from "../components/bar/TopBar";
import { Box } from "@mui/material";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const DashboardWrapper = styled("div")`
	display: flex;
	margin-top: 38px;
`;
const DashSideBarSection = styled("div")``;
const DashContentSection = styled(Box)`
	width: 100%;
	overflow: auto;
`;

const Dashboard = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	return (
		<>
			<TopBar />
			<Container maxWidth="xl">
				<DashboardWrapper>
					{breakpoint !== "mobile" && (
						<DashSideBarSection>
							<SideBar />
						</DashSideBarSection>
					)}
					<DashContentSection>
						<Outlet />
					</DashContentSection>
				</DashboardWrapper>
			</Container>
			{breakpoint === "mobile" && <BottomNav />}
		</>
	);
};

export default Dashboard;
