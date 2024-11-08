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
		login(values);

		form.setSubmitting(false);
	};

	return (
        <Box
	        sx={styles.pageWrapper}
        >
			<LoginForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				isLoading={false}
			/>
        </Box>
	);
};
