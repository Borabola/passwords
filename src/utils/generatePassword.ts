import {
	LOWERCASE_ABC,
	NUMBERS,
	SPECIAL_SYMBOLS,
	UPPERCASE_ABC
} from "./variables";

type GeneratePasswordProps = {
    passwordLength: number,
    hasUppercase: boolean,
    hasLowercase: boolean,
    hasNumbers: boolean,
    hasSymbols: boolean
};

type GeneratePassword = (data: GeneratePasswordProps) => string;

export const generatePassword: GeneratePassword = ({
	passwordLength = 8,
	hasUppercase = true,
	hasLowercase = true,
	hasNumbers = true,
	hasSymbols = true,
}) => {
	let allowedChars = "";
	let password = "";

	allowedChars += hasUppercase ? UPPERCASE_ABC : "";
	allowedChars += hasLowercase ? LOWERCASE_ABC : "";
	allowedChars += hasNumbers ? NUMBERS : "";
	allowedChars += hasSymbols ? SPECIAL_SYMBOLS : "";

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * allowedChars.length);
		password += allowedChars[randomIndex];
	}

	return password;

};
