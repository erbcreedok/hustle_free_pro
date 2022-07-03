import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import BottomNav from "../components/dashboard/navigation/BottomNav";
import SideBar from "../components/dashboard/navigation/SideBar";
import useBreakpoint from "use-breakpoint";
import TopBar from "../components/bar/TopBar";
import { Box } from "@mui/material";
import { Suspense, useEffect } from "react";
import ProgressCircular from "../components/custom/ProgressCircular";
import { useHttp } from "../services/useHttp";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/sidebarActions";
import { SidebarTypes } from "../types/types";
import { Dispatch } from "../store";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const DashboardWrapper = styled(Box)`
	display: flex;
	margin-top: 38px;
`;
const DashSideBarSection = styled(Box)``;
const DashContentSection = styled(Box)`
	width: 100%;
	overflow: auto;
`;

const Dashboard = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");
	const dispatch: Dispatch = useDispatch();
	const { request } = useHttp<SidebarTypes>();
	useEffect(() => {
		dispatch(fetchData(request));
	}, [dispatch, request]);

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
					<Suspense fallback={<ProgressCircular height="50vh" />}>
						<DashContentSection>
							<Outlet />
						</DashContentSection>
					</Suspense>
				</DashboardWrapper>
			</Container>
			{breakpoint === "mobile" && <BottomNav />}
		</>
	);
};

export default Dashboard;
