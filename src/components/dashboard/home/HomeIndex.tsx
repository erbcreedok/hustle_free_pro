import { FC, useState, useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
// import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import { Box } from "../../custom/box";

import UserGreetingsCard from "./userInfo/UserGreetingsCard";
import Contacts from "./userInfo/Contacts";
import Notification from "./notification/Notification";
import News from "./news/News";

// const DashGreetingWrapper = styled('div')`
// `
// const DashGreetingInfoSection = styled('div')`
// `
// const DashNotifySection = styled('div')`
// `
// const DashNewsSection = styled('div')`
// `

const HomeIndex = () => {
	return (
		<Box sx={{ marginBottom: "70px" }}>
			<Grid container spacing={2} columns={12}>
				<Grid
					container
					item
					sm={12}
					md={7}
					lg={4}
					justifyContent="center"
				>
					<Box>
						<UserGreetingsCard />
						<Contacts />
					</Box>
				</Grid>

				<Grid
					container
					spacing={2}
					item
					sm={12}
					md={5}
					lg={8}
					justifyContent="center"
				>
					<Grid
						container
						item
						xs={12}
						md={12}
						lg={6}
						justifyContent="center"
					>
						<Box>
							<Notification />
						</Box>
					</Grid>

					<Grid
						item
						container
						xs={12}
						md={12}
						lg={6}
						justifyContent="center"
					>
						<Box>
							<News />
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default HomeIndex;
