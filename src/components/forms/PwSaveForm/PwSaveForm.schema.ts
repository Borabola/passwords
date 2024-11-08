import {
	boolean,
	number,
	object,
} from "yup";

export const validateShema = () => object({
	passwordLength: number().required(),
	hasUppercase: boolean().required(),
	hasLowercase: boolean().required(),
	hasNumbers: boolean().required(),
	hasSymbols: boolean().required(),
});
