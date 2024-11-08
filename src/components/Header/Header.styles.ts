import { Theme } from "@mui/material";

export const headerStyles = {
	headerWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
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
			8 / 8,
			30 / 8
		),
	},
	iconBtn: {
		backgroundColor: "transparent",
		padding: (theme: Theme) => theme.spacing(5 / 8),
		borderRadius: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
		"& svg": {
			width: (theme: Theme) => theme.spacing(40 / 8),
			height: (theme: Theme) => theme.spacing(40 / 8),
			marginRight: (theme: Theme) => theme.spacing(-15 / 8),
			fill: "common.black",
			transition: "all 0.3s ease",
			cursor: "pointer",
			"&:hover": {
				fill: (theme: Theme) => theme.palette.primary.main,
			}
		}
	},
	logoWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginRight: (theme: Theme) => theme.spacing(20 / 8),

		"& img": {
			width: (theme: Theme) => theme.spacing(70 / 8),
			marginLeft: (theme: Theme) => theme.spacing(-20 / 8),
		}
	},
};
