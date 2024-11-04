import {
	FC,
	useEffect,
	useState
} from "react";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { PasswordFormValues } from "../../components/forms";
import PasswordForm from "../../components/forms/PasswordForm/PasswordForm";
import {mainContainerStyles as styles} from "./MainContainer.styles";
import { generatePassword } from "../../utils";
import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { useAuth } from "../../contexts/AuthContext";
import { AuthCurrentUser, AuthValues } from "../../contexts/AuthContext.types";

export const MainContainer: FC = () => {
	const [password, setPassword] = useState<string>("");

	const authContext = useAuth() as AuthValues;

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

	if (authContext === null) {
		return null;
	}

	const { currentUser } = authContext as AuthCurrentUser;

	console.log("currentUser", currentUser)

	const onSubmit = (
		values: PasswordFormValues, form: FormikHelpers<PasswordFormValues>
	) => {
		setPassword(generatePassword(values));
	};

	return (
        <Box
	        sx={styles.pageWrapper}
        >
			{!!password?.length && <ResultBlock password={password} />}
			<PasswordForm
				initialValues={initialValues}
				onSubmit={onSubmit}
			/>
        </Box>
	);
};
