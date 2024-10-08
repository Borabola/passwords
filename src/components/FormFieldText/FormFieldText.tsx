import { FC } from "react";
import {
	Field,
	FieldProps
} from "formik";
import { checkeErrorForMetaField } from "../../utils";
import TextField from "../TextField/TextField";
import { styles } from "./FormFieldText.styles";
import type { FormFieldTextProps } from "./FormFieldText.types";

export const FormFieldText: FC<FormFieldTextProps> = ({
	name, ...rest
}) => {
	return (
		<Field
			name={name}
			sx={rest.sx ?? styles.field }
		>
			{({ field, meta }: FieldProps) => {
				const { value, ...fieldProps } = field;
				return (
					<TextField
						error={checkeErrorForMetaField(meta)}
						helperText={meta.touched ?
							meta.error :
							""}
						value={value ?? ""}
						variant="outlined"
						{...fieldProps}
						{...rest}
					/>
				);
			}}
		</Field>
	);
};

export default FormFieldText;
