import { Theme } from "@mui/material";

export const mainContainerStyles = {
	pageWrapper: {
		display: "flex",
		flexDirection: "column",
		rowGap: (theme: Theme) => theme.spacing(30 / 8),
		justifyContent: "center",
		alignItems: "center",
		padding: (theme: Theme) => ({
			xs: theme.spacing(
				0 / 8,
				20 / 8
			),
			md: 0
		})
	}
};
