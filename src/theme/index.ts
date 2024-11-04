import {
	createTheme,
	darken
} from "@mui/material/styles";
import {
	defaultBodyFontSize,
	pxToRem
} from "../utils/pxToRem";

const theme = createTheme({
	typography: {
		fontFamily: "Poppins, sans-serif"
	},
	palette: {
		primary: {
			main: "#406e6b", //"#71826d",
			dark: "#71826d",
			light: "rgba(0, 16, 100, 0.24)",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#EBEBEB",
			light: "#D6D6D6",
			dark: "#BCBCBC",
		},
		info: {
			main: "#5F5FC4", //light blue
			light: "#8E2DE2",
			dark: "#00B22C",
			contrastText: "#293780",
		},
		error: {
			main: "#FF0C00",
		},
		background: {
			default: "#F6F6F6",
			paper: "#F0F2F1",
		},
		common: {
			white: "#FFFFFF",
			black: "#000000",
		},
		success: {
			main: "#E5E5E5",
			light: "#E8E8E8",
			dark: "#646464",
		},
	},
});

theme.typography.h1 = {
	fontSize: 44,
	fontWeight: 500,
	lineHeight: "127%",
	letterSpacing: 0,
	[theme.breakpoints.down("lg")]: {
		fontSize: 40,
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 35,
	},
};

theme.typography.h2 = {
	fontSize: 30,
	fontWeight: 500,
	lineHeight: "150%",
	color: theme.palette.common.black
};

theme.typography.h3 = {
	fontFamily: theme.typography.fontFamily,
	fontSize: 24,
	fontWeight: 500,
	lineHeight: "150%",
	padding: 0,
};

theme.typography.h4 = {
	fontSize: 20,
	fontWeight: 500,
	lineHeight: "150%",
};

theme.typography.h5 = {
	fontSize: 12,
	fontWeight: 500,
	lineHeight: "150%",
};

theme.typography.h6 = {
	fontSize: defaultBodyFontSize,
	fontWeight: 500,
	lineHeight: "150%",
};
theme.typography.body1 = {
	fontSize: defaultBodyFontSize,
	fontWeight: 400,
	lineHeight: "150%",
};
theme.typography.body2 = {
	fontSize: pxToRem(12),
	fontWeight: 400,
	lineHeight: "150%",
};
theme.typography.caption = {
	fontSize: pxToRem(14),
	fontWeight: 500,
	lineHeight: "150%",
};

theme.components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				fontSize: defaultBodyFontSize,
				fontFamily: theme.typography.fontFamily,
				backgroundColor: theme.palette.background.paper,
				letterSpacing: 0.25,
				minHeight: "100vh",
				padding: 0,
				margin: 0,
				"& #root": {
					minHeight: "100vh",
					padding: 0,
					margin: 0,
				}
			},
			html: {
				fontSize: defaultBodyFontSize,
			},
			"& *": {
				[theme.breakpoints.up("sm")]: {
					"&::-webkit-scrollbar": {
						width: theme.spacing(4 / 8)
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: theme.palette.common.white
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: darken(
							theme.palette.background.paper,
							0.25
						),
						borderRadius: theme.spacing(2 / 8),
					}
				}
			}
		},
	},
	MuiButtonBase: {
		defaultProps: {
			disableRipple: true,
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: theme.spacing(2 / 8),
				whiteSpace: "nowrap",
				boxShadow: "none",

				padding: theme.spacing(
					0,
					11 / 8
				),
				textTransform: "none",
			},
			sizeLarge: {
				minWidth: 100,
				minHeight:  theme.spacing(44 / 8),
			},
			sizeMedium: {
				minWidth: 77
			}
		},
		variants: [
			{
				props: { variant: "contained" },
				style: {
					color: theme.palette.primary.contrastText,
					backgroundColor: theme.palette.primary.main,
					borderRadius: theme.spacing(2 / 8),
					fontSize: 14,
					fontWeight: 700,
					lineHeight: 1.5,
					textAlign: "center",
					textTransform: "none",
					padding: theme.spacing(
						11 / 8,
						0
					),
					"&:hover": {
						opacity: 0.8,
						backgroundColor: theme.palette.primary.main,
						boxShadow: "none",
					},
					"&:focus": {
						opacity: 0.8,
						backgroundColor: theme.palette.primary.main,
						boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.3) "
					},
					"&:disabled": {
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.common.white,
						opacity: 0.24,
					}
				},
			},
			{
				props: { variant: "outlined" },
				style: {
					margin: 0,
					backgroundColor: theme.palette.primary.contrastText,
					color: theme.palette.primary.main,
					borderRadius: theme.spacing(2 / 8),
					fontSize: 14,
					fontWeight: 700,
					lineHeight: 1.5,
					textAlign: "center",
					textTransform: "none",
					padding: theme.spacing(
						11 / 8,
						0
					),
					"&.MuiButtonBase-root.MuiButton-root&:hover": {
						backgroundColor: theme.palette.common.white,
					},
					"&:hover": {
						opacity: 0.8,
						backgroundColor: theme.palette.common.white,
						boxShadow: "none",
					},
					"&:focus": {
						opacity: 0.8,
						backgroundColor: theme.palette.common.white,
						boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.15) "
					},
					"&:disabled": {
						backgroundColor: theme.palette.common.white,
						color: theme.palette.primary.main,
						opacity: 0.45,
					}
				},
			},
		],
	},
	MuiInput: {
		styleOverrides: {
			root: {
				color: theme.palette.primary.main,
				backgroundColor: theme.palette.common.white,
				borderRadius: theme.spacing(2 / 8),
				"&::placeholder": {
					fontSize: 14,
					fontWeight: 500,
					lineHeight: 1.5,
					color: theme.palette.primary.main,
					opacity: 0.45,
				},
				transition: "0.3s ease",

				"&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
					borderColor: theme.palette.primary.main,
				},
			}
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				borderRadius: theme.spacing(2 / 8),
			}
		}
	},
	MuiMenu: {
		styleOverrides: {
			paper: {
				maxHeight: `${theme.spacing(160 / 8)}!important`,
			},
			list: {
				overflowY: "auto",
				maxHeight: `${theme.spacing(160 / 8)}!important`,
				paddingTop: theme.spacing(15 / 8),
				paddingBottom: theme.spacing(15 / 8),
				"& option": {
					paddingLeft: theme.spacing(15 / 8),
					backgroundColor: theme.palette.background.paper,
					"&:hover": {
						backgroundColor: "rgba(0, 16, 100, 0.08)",
						cursor: "pointer"
					}
				}
			}
		}
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.background.paper
			}
		}
	},
	MuiSelect: {
		defaultProps: {
			variant: "outlined",
		},
		styleOverrides: {
			outlined: {
				padding: theme.spacing(
					1.5,
					2
				),
			}
		}
	},
	MuiTableCell: {
		styleOverrides: {
			paddingNone: {
				"&:first-of-type": {
					padding: "0!important"
				}
			}
		}
	},
};

export default theme;
