import { Theme } from "@mui/material";

export const mainContainerStyles = {
	pageWrapper: {
		display: "flex",
		flexDirection: "column",
		rowGap: (theme: Theme) => theme.spacing(22 / 8),
		justifyContent: "center",
		alignItems: "center",
		padding: (theme: Theme) => ({
			xs: theme.spacing(
				0 / 8,
				20 / 8
			),
			md: 0
		})
	},
	blockWrapper: {
		width: (theme: Theme) => ({
			xs: "100%",
			md: theme.spacing(500 / 8)
		}),
		maxWidth: (theme: Theme) => theme.spacing(700 / 8),
		minWidth: (theme: Theme) => ({
			xs: theme.spacing(300 / 8),
			md: theme.spacing(500 / 8)
		}),
		padding: (theme: Theme) => theme.spacing(
			15 / 8,
			30 / 8
		),
		textAlign: "center",
		color: "secondary.main",
		backgroundColor: "common.white",
		borderRadius: (theme: Theme) => theme.spacing(10 / 8),
	},
};
