import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import {
	Form,
	Formik,
	//FormikFormProps
} from "formik";
// import {
// 	AuthContext, useAuth
// } from "../../../contexts/AuthContext";
import Button from "../../Button/Button";
import { validateShema } from "./PasswordForm.schema";
import { passwordFormStyles as styles } from "./PasswordForm.styles";
import type { PasswordFormProps } from "./PasswordForm.types";
//import { AuthValues } from "../../../contexts/AuthContext.types";
import FormCheckbox from "../../FormCheckbox/FormCheckbox";
import FormSlider from "../../FormSlider/FormSlider";

export const PasswordForm: FC<PasswordFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();
	// const theme = useTheme();
	// const authContext = useAuth() as AuthValues;

	// if (authContext === null) {
	// 	return null;
	// }
	const labelText = intl.formatMessage({
		id: "passwordLength",
		defaultMessage: "Password Length"
	});

	return (
		<Formik
			initialValues={initialValues}
			validateOnBlur={false}
			validationSchema={validateShema}
			onSubmit={onSubmit}
		>
			{({
				isSubmitting
			}) => (
				<Form>
					<Box
						sx={styles.blockWrapper}
					>
						<Typography
							sx={styles.title}
							variant="h2"
						>
							{intl.formatMessage({
								id: "createPassword",
								defaultMessage: "Create strong password"
							})}
						</Typography>
						<FormSlider
							name="passwordLength"
							labelText={labelText}
							defaultValue={8}
							minValue={4}
							maxValue={125}
							step={1}
							sx={styles.sliderWrapper}
						/>
						<Box sx={styles.lineWrapper}>
							<FormCheckbox
								name="hasUppercase"
								label="A-Z"
							/>
							<FormCheckbox
								name="hasLowercase"
								label="a-z"
							/>
							<FormCheckbox
								name="hasNumbers"
								label="0 - 9"
							/>
							<FormCheckbox
								name="hasSymbols"
								label="!@#$%^&*"
							/>
						</Box>

						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
							isLoading={isLoading ?? false}
						>
							{intl.formatMessage({
								id: "go",
								defaultMessage: "Go"
							})}
						</Button>
					</Box>

				</Form>
			)}
		</Formik>
	);
};

export default PasswordForm;
