import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Link,
	Typography
} from "@mui/material";
import {
	Form, Formik
} from "formik";
import { useAuth } from "../../../contexts/AuthContext";
import FormFieldText from "../../FormFieldText/FormFieldText";
import Button from "../../Button/Button";
import { AppRouteEnum } from "../../../types";
import { getValidationSchema } from "./SignUpForm.schema";
import { loginStyles } from "./SignUpForm.styles";
import type { SinUpFormProps } from "./SignUpForm.types";

export const SignUpForm: FC<SinUpFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();
	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}

	console.log(
		"authContext",
		authContext
	);

	const loginText = intl.formatMessage({
		id: "email",
		defaultMessage: "Email"
	});

	return (
		<Formik
			initialValues={initialValues}
			validateOnBlur={false}
			validationSchema={getValidationSchema(intl)}
			onSubmit={onSubmit}
		>
			{({
				isSubmitting
			}) => (
				<Form>
					<Box
						component="div"
						sx={loginStyles.pageContent}
					>
						<Typography
							sx={loginStyles.title}
							variant="h1"
						>
							{intl.formatMessage({
								id: "signIn",
								defaultMessage: "Sign In"
							})}
						</Typography>
						<FormFieldText
							type="email"
							name="email"
							sx={loginStyles.textInput}
							title={""}
							placeholder={loginText}
							variant="filled"
							color="primary"
						/>
						<FormFieldText
							type="password"
							name="password"
							sx={loginStyles.textInput}
							title={""}
							placeholder={intl.formatMessage({
								id: "password",
								defaultMessage: "Password"
							})}
							variant="filled"
							color="primary"
						/>
						<FormFieldText
							type="password"
							name="passwordConfirm"
							sx={loginStyles.textInput}
							title={""}
							placeholder={intl.formatMessage({
								id: "confirmPassword",
								defaultMessage: "Confirm Password"
							})}
							variant="filled"
							color="primary"
						/>
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
							data-testid="submitBtn"
							isLoading={isLoading}
						>
							{intl.formatMessage({
								id: "signUpNow",
								defaultMessage: "Sign Up Now"
							})}
						</Button>
					</Box>

					<Box mt={2}>
						<Typography
							color="#ffffff"
							variant="body1"
						>
							{intl.formatMessage({
								id: "haveAccount",
								defaultMessage: "Have account?n"
							})}
							<Link
								href={AppRouteEnum.LOGIN}
							>
								{intl.formatMessage({
									id: "login",
									defaultMessage: "Log in"
								})}
							</Link>
						</Typography>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default SignUpForm;
