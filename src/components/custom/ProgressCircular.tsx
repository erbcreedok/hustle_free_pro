import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate({
	height = "100vh",
}: {
	height?: string;
}) {
	return (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				justifyContent: "center",
				height: height,
				width: "100vw",
			}}
		>
			<CircularProgress />
		</Box>
	);
}
