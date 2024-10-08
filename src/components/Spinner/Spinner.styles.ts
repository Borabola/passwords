import { Theme } from "@mui/material";

export const spinnerStyles = {
	spinWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: (theme: Theme) => theme.zIndex.drawer + 100,
		background: (theme: Theme) => theme.palette.grey[50],
	},
	spinner: {
		display: "flex"
	}
};
