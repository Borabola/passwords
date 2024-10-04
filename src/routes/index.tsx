import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import PrivateRoute from "../hocs/PrivateRoute/PrivateRoute";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privatRoutes";

const AppRoutes: FC = () => {
	return (
		<Suspense
			fallback={
				<Box
					component="div"
					display="flex"
					justifyContent="center"
					alignItems="center"
					height={"100vh"}
				>
					{/* <Loader /> */}
					<>Loading ... </>
				</Box>
			}
		>
			<Routes>
				{[
					...privateRoutes,
					...commonRoutes,
				].map((
					route, index
				) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={route.isAuth ?
							(<PrivateRoute>
								{route.element}
							</PrivateRoute>) :
							<>{route.element}</>}
					/>))}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
