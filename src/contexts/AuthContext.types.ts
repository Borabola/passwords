import { ReactElement } from "react";
//import { stateType } from "../types"; !!

export type AuthProviderProps = {
	children: ReactElement
};

export type Props = {
	children?: React.ReactNode;
};

export type SProps = {
	email: string,
	password: string,
};

export type FirebaseError = {
	code: string,
	message: string,
	name: string,
};

export type CurrentUser = {
	email: string | null,
	userId: string
};

export interface AuthValues {
	currentUser: CurrentUser | null;
	login: ({ email, password }: SProps) => Promise<void> | void;
	signup: ({
		email, password
	}: SProps) => Promise<void> | void;
	logout: () => Promise<void> | void;
	googlePopupSignIn: () => Promise<void> | void;
}
