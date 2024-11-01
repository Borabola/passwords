import {
	Context,
	FC,
	useCallback
} from "react";
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
import {
	AuthContext, useAuth
} from "../../../contexts/AuthContext";
import FormFieldText from "../../FormFieldText/FormFieldText";
import Button from "../../Button/Button";
import { validateShema } from "./LoginForm.schema";
import { loginStyles } from "./LoginForm.styles";
import type { LoginFormProps } from "./LoginForm.types";
import { AuthValues } from "../../../contexts/AuthContext.types";

export const LoginForm: FC<LoginFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();
	const authContext = useAuth() as AuthValues;

	// if (authContext === null) {
	// 	return null;
	// }

	console.log(
		"authContext",
		authContext
	);

	//const { googlePopupSignIn} = AuthContext;

	// const onGoogleLoginClick = useCallback(
	// 	() => {
	// 		return () =>
	// 			authContext !== null &&
	// 			googlePopupSignIn();
	// 	},
	// 	[AuthContext]
	// );

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

					<Box>
						<Button
							//onClick={() => googlePopupSignIn()}
							//onClick={onGoogleLoginClick}
							fullWidth={true}
						>
							{intl.formatMessage({
								id: "loginWithGoogle",
								defaultMessage: "Google login"
							})}
						</Button>
					</Box>
					<Box mt={2}>
						<Typography
							color="secondary"
							variant="body1"
						>
							{intl.formatMessage({
								id: "dontHaveAcc",
								defaultMessage: "Don't have account?"
							})}

							<Link
								//component={RouterLink}
								href="/signUp"
								variant="body1"
							>
								{intl.formatMessage({
									id: "signUp",
									defaultMessage: "Sign Up"
								})}
							</Link>
						</Typography>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
