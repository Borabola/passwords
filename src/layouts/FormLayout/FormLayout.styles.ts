import { Theme } from "@mui/material";

export const formLayoutStyles = {
	wrapper: {
		width: (theme: Theme) => theme.spacing(343 / 8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "stretch",
		padding: 0,
	},
};
