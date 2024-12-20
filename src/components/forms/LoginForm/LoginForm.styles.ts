import { Theme } from "@mui/material";
import { pxToRem } from "../../../utils/pxToRem";

export const loginStyles = {
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
		"& input:-internal-autofill-selected": {
			backgroundColor: "common.white",
			color: "primary.main",
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
				border: "none"
			},
			"&:hover::after": {
				display: "none",
				border: "none"
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
	message: {
		fontSize: pxToRem(14),
		color: "primary.main"
	},
	signUpWrap: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: (theme: Theme) => ({
			xs: theme.spacing(10 / 8),
			md: theme.spacing(20 / 8),
		}),
		gap: (theme: Theme) => ({
			xs: theme.spacing(10 / 8),
			md: theme.spacing(20 / 8),
		}),
	},
	googleBtn: {
		marginTop: (theme: Theme) => theme.spacing(20 / 8),
		marginBottom: (theme: Theme) => theme.spacing(20 / 8),
	},
	googleBtnWrap: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"& img": {
			width: (theme: Theme) => theme.spacing(25 / 8),
			height: (theme: Theme) => theme.spacing(25 / 8),
			marginRight: (theme: Theme) => theme.spacing(10/ 8),
		}
	}
};
