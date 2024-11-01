import { FC } from "react";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import {
	SignUpForm, SinUpValues
} from "../../components/forms";
import {loginContainerStyles as styles} from "./SignUpContainer.styles";

export const SigUpContainer: FC = () => {
	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}
	const { signup } = authContext;
	const initialValuesLogin = {
		email: "",
		password: "",
		passwordConfirm: "" ,
	};

	const onSubmit = (
		values: SinUpValues, form: FormikHelpers<SinUpValues>
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

		const {passwordConfirm, ...restValeus} = values;
		signup(restValeus);
		form.setSubmitting(false);
	};

	const isLoginLoading = false; //!!!

	return (
        <Box
	        sx={styles.pageWrapper}
        >
			<SignUpForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				isLoading={isLoginLoading}
			/>
        </Box>
	);
};
