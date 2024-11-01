import { Theme } from "@mui/material";
import { pxToRem } from "../../utils";

export const resulBlockStyles = {
	wrapper: {
		position: "relative",
		width: (theme: Theme) => theme.spacing(500 / 8),
		height: (theme: Theme) => theme.spacing(100 / 8),
		backgroundColor: "common.white",
		borderRadius: (theme: Theme) => theme.spacing(10 / 8),
		overflow: "hidden"
	},
	scrollContainer: {
		padding: (theme: Theme) => ({
			xs: theme.spacing(
				10 / 8,
				20 / 8
			),
			md: theme.spacing(
				30 / 8,
				30 / 8
			)
		}),
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		overflowX: "auto",
		whiteSpace: "pre",
		"&::-webkit-scrollbar": {
			width: (theme: Theme) => theme.spacing(4 / 8),
			height: (theme: Theme) => theme.spacing(4 / 8),
		},
		"&::-webkit-scrollbar-track": {
			backgroundColor: (theme: Theme) => theme.palette.common.white
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: (theme: Theme) => theme.palette.primary.main,
			borderRadius: (theme: Theme) => theme.spacing(4 / 8),
		}
	},
	text: {
		width: "calc(100% - 150px)",
		fontSize: pxToRem(50),
	},
	iconBtn: {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		backgroundColor: "common.white",
		right: (theme: Theme) => theme.spacing(-2 / 8),
		padding: (theme: Theme) => theme.spacing(20 / 8),
		borderRadius: 0,
		"&:hover": {
			backgroundColor: "common.white",
		}
	},
	icon: {
		width: (theme: Theme) => theme.spacing(50 / 8),
		height: (theme: Theme) => theme.spacing(50 / 8),
		fill: "common.black",
		transition: "all 0.3s ease",
		cursor: "pointer",
		"&:hover": {
			fill: (theme: Theme) => theme.palette.primary.main,
		}
	}
};
