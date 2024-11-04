import {
	FC,
	useEffect,
	useState
} from "react";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { Header } from "../../components/Header/Header";
import { PasswordFormValues } from "../../components/forms";
import PasswordForm from "../../components/forms/PasswordForm/PasswordForm";
import { generatePassword } from "../../utils";
import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { mainContainerStyles as styles } from "./MainContainer.styles";

export const MainContainer: FC = () => {
	const [password, setPassword] = useState<string>("");

	const initialValues = {
		passwordLength: 8,
		hasUppercase: true,
		hasLowercase: true,
		hasNumbers: true,
		hasSymbols: true,
	};

	useEffect(
		() => {
			setPassword(generatePassword(initialValues));
		},
		[]
	);

	const onSubmit = (
		values: PasswordFormValues, form: FormikHelpers<PasswordFormValues>
	) => {
		setPassword(generatePassword(values));
		form.setSubmitting(false);
	};

	return (
		<Box
			sx={styles.pageWrapper}
		>
			<Header />
			{!!password?.length && <ResultBlock password={password} />}
			<PasswordForm
				initialValues={initialValues}
				onSubmit={onSubmit}
			/>
		</Box>
	);
};
