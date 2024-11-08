import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import {
	Form,
	Formik,
} from "formik";
import Button from "../../Button/Button";
import { validateShema } from "./PwSaveForm.schema";
import { passwordFormStyles as styles } from "../PasswordForm.styles";
import type { PwSaveFormProps } from "./PwSaveForm.types";
import FormFieldText from "../../FormFieldText/FormFieldText";

export const PwSaveForm: FC<PwSaveFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();
	const tagText = intl.formatMessage({
		id: "tagPlaceholder",
		defaultMessage: "Add tag for password"
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
				<Box sx={styles.blockWrapper}>
					<Form>
						<Typography
							sx={styles.title}
							variant="h2"
						>
							{intl.formatMessage({
								id: "savePassword",
								defaultMessage: "Save new password"
							})}
						</Typography>

						<Box sx={styles.lineWrapper}>
							<FormFieldText
								type="text"
								name="tag"
								sx={styles.textInput}
								title={""}
								placeholder={tagText}
								variant="filled"
								color="primary"
								required
							/>
							<FormFieldText
								type="text"
								name="description"
								sx={styles.textInput}
								title={""}
								//placeholder={loginText}
								variant="filled"
								color="primary"
							/>
						</Box>
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
							isLoading={(isSubmitting || isLoading) ?? false}
						>
							{intl.formatMessage({
								id: "save",
								defaultMessage: "Save"
							})}
						</Button>
					</Form>
				</Box>
			)}
		</Formik>
	);
};

export default PwSaveForm;
