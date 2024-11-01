import {
	object,
	string,
	ref,
} from "yup";
import { IntlShape } from "react-intl";

export const getValidationSchema = (intl: IntlShape) => {
	const msgLowercase = intl.formatMessage({
		id: "yup.lowercase",
		defaultMessage: "One lowercase character",
	});
	const msgUppercase = intl.formatMessage({
		id: "yup.uppercase",
		defaultMessage: "At least one uppercase character",
	});
	const msgSpecialCharacter = intl.formatMessage({
		id: "yup.specialCharacter",
		defaultMessage: "At least one special character",
	});
	const msgOneNumber = intl.formatMessage({
		id: "yup.oneNumber",
		defaultMessage: "At least one number",
	});

	const msgMatchPasswords = intl.formatMessage({
		id: "muchPasswords",
		defaultMessage: "Your passwords do not match.",
	});

	return object({
		email: string()
			.email()
			.max(255)
			.required(),
		password: string()
			.required()
			.min(8)
			.matches(
				/[a-z]+/,
				msgLowercase
			)
			.matches(
				/[A-Z]+/,
				msgUppercase
			)
			.matches(
				/[@$!%*#?&]+/,
				msgSpecialCharacter
			)
			.matches(
				/\d+/,
				msgOneNumber
			),
		passwordConfirm: string()
			.required()
			.oneOf(
				[ref("password")],
				msgMatchPasswords
			)
	});
};
