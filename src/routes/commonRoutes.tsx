import { lazy } from "react";
import { AppRouteEnum } from "../types/enums/paths";
import { Routes } from "../types/interfaces/routes";

// Common routes with using React code splitting approach

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const commonRoutes: Routes = [
	{
		element: <HomePage />,
		path: AppRouteEnum.HOME,
		exact: true,
		isAuth: false,
		//denyShowLoginPage: true,
	},
	{
		element: <NotFound />,
		isAuth: false,
	},
];
