import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import Link from "@mui/material/Link";
import {
	Form,
	Formik
} from "formik";
import { useAuth } from "../../../contexts/AuthContext";
import {
	AuthCurrentUser,
	AuthValues
} from "../../../contexts/AuthContext.types";
import GoogleLogo from "../../../assets/google.svg";
import FormFieldText from "../../FormFieldText/FormFieldText";
import Button from "../../Button/Button";
import { AppRouteEnum } from "../../../types";
import { validateShema } from "./LoginForm.schema";
import { loginStyles } from "./LoginForm.styles";
import type { LoginFormProps } from "./LoginForm.types";

export const LoginForm: FC<LoginFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();
	const authContext = useAuth() as AuthValues;
	if (authContext === null) {
		return null;
	}

	const { currentUser, googlePopupSignIn } = authContext as AuthCurrentUser;

	const onGoogleLoginClick = () => googlePopupSignIn();

	const loginText = intl.formatMessage({
		id: "email",
		defaultMessage: "Email"
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
						component="div"
						sx={loginStyles.pageContent}
					>
						<Typography
							sx={loginStyles.title}
							variant="h1"
						>
							{intl.formatMessage({
								id: "login",
								defaultMessage: "Log In"
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
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
							isLoading={isLoading}
						>
							{intl.formatMessage({
								id: "go",
								defaultMessage: "Go"
							})}
						</Button>
					</Box>

					{!!(currentUser === null ) &&
						<Box>
							<Button
								onClick={onGoogleLoginClick}
								fullWidth={true}
								sx={loginStyles.googleBtn}
							>
								<Box sx={loginStyles.googleBtnWrap}>
									<img
										src={GoogleLogo}
										alt={"Google logo"}
										width="25"
									/>
									{intl.formatMessage({
										id: "loginWithGoogle",
										defaultMessage: "Google login"
									})}
								</Box>
							</Button>
						</Box>}
					<Box sx={loginStyles.signUpWrap}>
						<Typography sx={loginStyles.message} >
							{intl.formatMessage({
								id: "dontHaveAcc",
								defaultMessage: "Don't have account?"
							})}
						</Typography>
						<Link
							href={AppRouteEnum.SIGNUP}
							variant="body1"
						>
							{intl.formatMessage({
								id: "signUp",
								defaultMessage: "Sign Up"
							})}
						</Link>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
