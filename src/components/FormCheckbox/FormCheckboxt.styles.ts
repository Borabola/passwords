import { Theme } from "@mui/material";

export const styles = {
	field: {
		color: "common.black",
		margin: (theme: Theme) => theme.spacing(
			1.25,
			0
		),
		"&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
			flexShrink: 0,
		}
	},
};
