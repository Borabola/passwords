import { FC } from "react";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import {
	LoginForm,
	Values
} from "../../components/forms";
import {loginContainerStyles as styles} from "./LoginContainer.styles";

export const LoginContainer: FC = () => {
	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}
	const { login } = authContext;

	const initialValuesLogin = {
		email: "",
		password: ""
	};

	const onSubmit = (
		values: Values, form: FormikHelpers<Values>
	) => {
		// const formData = new FormData();
		// formData.append(
		// 	"email",
		// 	values.email
		// );
		// formData.append(
		// 	"password",
		// 	values.password
		// );

		console.log(
			"login values",
			values
		);
		login(values);

		form.setSubmitting(false);
	};

	const isLoginLoading = false; //!!!

	return (
        <Box
	        sx={styles.pageWrapper}
        >
			<LoginForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				isLoading={isLoginLoading}
			/>
        </Box>
	);
};
