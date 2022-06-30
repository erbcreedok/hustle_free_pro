import { Grid } from "@mui/material";
import Competition from "../../components/dashboard/activity/competition/Competition";
import Partners from "../../components/dashboard/activity/partners/Partner";
import Support from "../../components/dashboard/activity/support/Support";
import { Wrapper } from "../../components/custom/defaultStyles";

const Activity = () => {
	return (
		<Wrapper display="flex" flexDirection="column" marginBottom="70px">
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
