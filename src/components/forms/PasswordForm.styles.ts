import { Theme } from "@mui/material";
import { pxToRem } from "../../utils/pxToRem";

export const passwordFormStyles = {
	lineWrapper: {
		display: "flex",
		justifyContent: "space-between",
		gap: (theme: Theme) => ({
			xs: theme.spacing(
				0,
				10 / 8
			),
			md: theme.spacing(20 / 8),
		}),
		flexWrap: {
			xs: "wrap",
			md: "no-wrap"
		},
		"& label": {
			width: {
				xs: "45%",
				md: "auto"
			},
		}
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
		padding: (theme: Theme) => theme.spacing(30 / 8),
		backgroundColor: "common.white",
		borderRadius: (theme: Theme) => theme.spacing(10 / 8),
	},
	sliderWrapper: {
		"&": {
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
			},
			"& .MuiInputBase-input.MuiOutlinedInput-input": {
				textAlign: "center"
			}
		}
	},
	pageContent: {
		width: (theme: Theme) => theme.spacing(343 / 8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "stretch",
		padding: 0,
		color: "primary.main",
		"& .MuiFormControl-root.MuiTextField-root": {
			width: "100%",
			marginTop: 0,
			marginBottom: (theme: Theme) => theme.spacing(20 / 8),
		},
		"& .MuiInputAdornment-root": {
			display: "none",
			width: 0,
			height: 0,
		}
	},
	title: {
		textAlign: "center",
		marginBottom: (theme: Theme) => ({
			xs: theme.spacing(20 / 8),
			md: theme.spacing(60 / 8),
		}),
	},
	textInput: {
		color: "primary.main",
		border: "1px solid",
		"& input:-internal-autofill-selected": {
			backgroundColor: "common.white",
			//color: "primary.main",
		},
		"& .MuiFormLabel-root.MuiInputLabel-root": {
			fontSize: pxToRem(14),
			fontWeight: 500,
			color: "primary.main",
			opacity: 0.45,
			left: (theme: Theme) => theme.spacing(4 / 8),
			top: (theme: Theme) => theme.spacing(-2 / 8),
			"&.MuiInputLabel-shrink": {
				opacity: 0,
				display: "none",
			}
		},
		"& .MuiInputBase-input.MuiFilledInput-input": {
			padding: (theme: Theme) => theme.spacing(
				1.375,
				2
			),
			borderRadius: (theme: Theme) => theme.spacing(2 / 8),
			overflow: "hidden",
		},
		"& .MuiInputBase-root.MuiFilledInput-root": {
			color: "primary.main",
			backgroundColor: "common.white",
			opacity: 1,
			boxShadow: "none",
			borderRadius: (theme: Theme) => theme.spacing(2 / 8),
			borderTopLeftRadius: (theme: Theme) => theme.spacing(2 / 8),
			borderTopRightRadius: (theme: Theme) => theme.spacing(2 / 8),
			overflow: "hidden",
			"&::before": {
				display: "none",
				//border: "none"
			},
			"&:hover::after": {
				display: "none",
				//border: "none"
			}
		},
		"& .MuiFormHelperText-root": {
			textTransform: "none",
			fontWeight: "400"
		},
		"& .MuiFormHelperText-root.Mui-error": {
			color: "error.main",
			border: "none"
		},
		"& .MuiInputBase-root.MuiFilledInput-root:after": {
			display: "none",
			border: "none"
		},
	},
};
