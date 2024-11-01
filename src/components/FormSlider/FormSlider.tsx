import { FC } from "react";
import {
	Field,
	FieldProps
} from "formik";
import {
	Box,
	Slider,
	TextField,
	Typography
} from "@mui/material";
import { styles } from "./FormSlider.styles";
import type { FormSliderProps } from "./FormSlider.types";
import { checkeErrorForMetaField } from "../../utils";

export const FormSlider: FC<FormSliderProps> = ({
	name,
	defaultValue,
	minValue,
	maxValue,
	step = 1,
	labelText,
	...rest
}) => {
	return (
		<Field
			name={name}
			min={minValue}
			max={maxValue}
			step={step}
			sx={rest.sx ?? styles.field}
		>
			{({ field, meta }: FieldProps) => {
				const { value, ...fieldProps } = field;
				return (
					<Box>
						<Box sx={styles.inputWrapper}>
							{labelText && <Typography
								variant="h5"
								sx={styles.label}
							>
								{labelText}
							</Typography>
							}
							<TextField
								error={checkeErrorForMetaField(meta)}
								helperText={meta.touched ?
									meta.error :
									""}
								value={value ?? defaultValue}
								variant="outlined"
								type="number"
								className="sliderInput"
								{...fieldProps}
								{...rest}
							/>
						</Box>
						<Slider
							aria-label="Volume"
							value={value ?? defaultValue}
							step={1}
							min={4}
							max={225}
							{...fieldProps}
						/>
					</Box>
				);
			}}
		</Field>

	);
};

export default FormSlider;
