import { FormikHelpers } from "formik";

export type PwSaveFormValues = {
	password: string,
	tag: string,
	description?: string,
};

export type PwSaveFormProps = {
	initialValues: PwSaveFormValues;
	onSubmit: (values: PwSaveFormValues, form: FormikHelpers<PwSaveFormValues>) => void;
	isLoading?: boolean;
};
