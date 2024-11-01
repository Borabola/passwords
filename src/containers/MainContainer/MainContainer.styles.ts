import { Theme } from "@mui/material";

export const mainContainerStyles = {
	pageWrapper: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		rowGap: (theme: Theme) => theme.spacing(30 / 8),
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "background.paper"
	}
};
