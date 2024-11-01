import { lazy } from "react";
import { AppRouteEnum } from "../types";
import { Routes } from "../types/interfaces/routes";

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));

export const commonRoutes: Routes = [
	{
		element: <HomePage />,
		path: AppRouteEnum.HOME,
		exact: true,
		isAuth: false,
		//denyShowLoginPage: true,
	},
	{
		element: <Login/>,
		path: AppRouteEnum.LOGIN,
		exact: true,
		isAuth: false,
		//denyShowLoginPage: true,
	},
	{
		element: <SignUp/>,
		path: AppRouteEnum.SIGNUP,
		exact: true,
		isAuth: false,
		//denyShowLoginPage: true,
	},
	{
		element: <NotFound />,
		isAuth: false,
	},
];
