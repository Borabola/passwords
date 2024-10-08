import { FC } from "react";
import {
	Box,
	CircularProgress
} from "@mui/material";
import { spinnerStyles } from "./Spinner.styles";
import { SpinnerProps } from "./Spinner.types";

export const Spinner: FC<SpinnerProps> = ({
	size = 50,
	color = "primary",
	isCentered = true
}) => {
	return (
		<>
			{isCentered ?
				<Box
					sx={spinnerStyles.spinWrapper}
					component="div"
					id="spinner"
				>
					<CircularProgress
						disableShrink
						size={size}
						color={color}
						sx={spinnerStyles.spinner}
					/>
				</Box> :
				<CircularProgress
					disableShrink
					size={size}
					color={color}
					sx={spinnerStyles.spinner}
				/>
			}
		</>
	);
};

export default Spinner;
