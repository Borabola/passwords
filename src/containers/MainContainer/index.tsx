import {
	FC,
	useEffect,
	useState
} from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import { FormikHelpers } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import { AuthValues } from "../../contexts/AuthContext.types";
import { Header } from "../../components/Header/Header";
import {
	PasswordFormValues,
	PwSaveForm,
	PwSaveFormValues
} from "../../components/forms";
import PasswordForm from "../../components/forms/PasswordForm/PasswordForm";
import { generatePassword } from "../../utils";
import ResultBlock from "../../components/ResultBlock/ResultBlock";
import { mainContainerStyles as styles } from "./MainContainer.styles";

export const MainContainer: FC = () => {
	const intl = useIntl();
	const authContext = useAuth() as AuthValues;
	const [password, setPassword] = useState<string>("");

	const initialValues = {
		passwordLength: 8,
		hasUppercase: true,
		hasLowercase: true,
		hasNumbers: true,
		hasSymbols: true,
	};
	const initialSavePwValues = {
		password: "",
		tag: "",
		description: "",
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

	const { currentUser } = authContext;

	const onSubmit = (
		values: PasswordFormValues, form: FormikHelpers<PasswordFormValues>
	) => {
		setPassword(generatePassword(values));
		form.setSubmitting(false);
	};

	const onSavePwSubmit = (
		values: PwSaveFormValues, form: FormikHelpers<PwSaveFormValues>
	) => {
		console.group("Save password info");
		console.log("password: " + password);
		console.log("tag: " + values.tag);
		values.description && console.log("descrition: " + values?.description);
		console.groupEnd();
		form.resetForm();
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
			{currentUser && <PwSaveForm
				initialValues={initialSavePwValues}
				onSubmit={onSavePwSubmit}
			/>}
			{!currentUser &&
				<Box sx={styles.blockWrapper}>
					<Typography>
					{intl.formatMessage({
								id: "loginToSave",
								defaultMessage: "Please login to save your new password."
							})}
					</Typography>
				</Box>}
		</Box>
	);
};
