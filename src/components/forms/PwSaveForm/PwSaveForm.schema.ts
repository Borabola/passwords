import {
	object,
	string,
} from "yup";

export const validateShema = () => object({
	tag: string().required(),
});
