import { lazy } from "react";
import {
	AppRouteEnum,
	PrivateRoutes
} from "../types";

const PasswordList = lazy(() => import("../pages/PasswordList"));

export const privateRoutes: PrivateRoutes = [
	{
		element: <PasswordList />,
		path: AppRouteEnum.PASSWORD_LIST,
		exact: true,
		isAuth: true
	},
];
