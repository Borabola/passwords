import { FormikHelpers } from "formik";

export type SinUpValues = {
	email: string,
	password: string,
	passwordConfirm: string,
};

export type SinUpFormProps = {
	initialValues: SinUpValues;
	isLoading: boolean;
	onSubmit: (values: SinUpValues, form: FormikHelpers<SinUpValues>) => void;
};
