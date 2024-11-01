import { FormikHelpers } from "formik";

export type PasswordFormValues = {
	passwordLength: number,
	hasUppercase: boolean,
	hasLowercase: boolean,
	hasNumbers: boolean,
	hasSymbols: boolean,
};

export type PasswordFormProps = {
	initialValues: PasswordFormValues;
	onSubmit: (values: PasswordFormValues, form: FormikHelpers<PasswordFormValues>) => void;
	isLoading?: boolean;
};
