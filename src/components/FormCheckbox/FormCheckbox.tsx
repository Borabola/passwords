import { FC } from "react";
import { Field } from "formik";
import {
	Checkbox,
	FormControlLabel,
	useTheme
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { styles } from "./FormCheckboxt.styles";
import type { FormCheckboxProps } from "./FormCheckbox.types";

export const FormCheckbox: FC<FormCheckboxProps> = ({
	name,
	label,
	...rest
}) => {
	const theme = useTheme();

	return (
		<Field
			name={name}
			type="checkbox"
			as={FormControlLabel}
			sx={rest.sx ?? styles.field}
			control={<Checkbox
				icon={<CheckBoxOutlineBlankIcon />}
				checkedIcon={
					<CheckBoxIcon
						style={{
							fill: theme.palette.primary.main
						}}
					/>}
			/>}
			label={label}

		/>
	);
};

export default FormCheckbox;
