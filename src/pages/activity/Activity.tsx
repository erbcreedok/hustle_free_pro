import { FC, useState, useCallback, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import Competition from "../../components/dashboard/activity/competition/Competition";
import Partners from "../../components/dashboard/activity/partners/Partner";
import Support from "../../components/dashboard/activity/support/Support";

const Wrapper = styled("div")`
	display: flex;
	flex-direction: column;
	margin-bottom: 70px;
`;

const Activity = () => {
	return (
		<Wrapper>
			<Competition />
			<Grid
				container
				spacing={2}
				columns={12}
				sx={{ flexWrap: "wrap-reverse" }}
			>
				<Grid item lg={8}>
					<Partners />
				</Grid>

				<Grid item lg={4} sx={{ width: "100%" }}>
					<Support />
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default Activity;
