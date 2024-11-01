import { Theme } from "@mui/material";
import { pxToRem } from "../../utils";

export const styles = {
	field: {
		margin: (theme: Theme) => theme.spacing(
			1.25,
			0
		),
		"&:hover": {
			borderColor: "primary.main",
			"& .MuiFormLabel-root.MuiInputLabel-root": {
			}
		},
		"&:focus": {
			borderColor: "primary.main",
		}
	},
	inputWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: (theme: Theme) => theme.spacing(30 / 8),
		marginButton: (theme: Theme) => theme.spacing(20 / 8),
		"& .sliderInput": {
			borderRadius: (theme: Theme) => theme.spacing(5/ 8),
			textAlign: "center"
		}
	},
	label: {
		fontSize: pxToRem(18)
	}
};
