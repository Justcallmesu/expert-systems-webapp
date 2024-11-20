import { Route, Routes, Navigate } from "react-router-dom";
import FullLayout from "../../layout/FullLayout";
import Home from "../../views/Home/Home";
import Diagnose from "../../views/Diagnose/Diagnose";

const MainRouter = (
	<Routes>
		<Route element={<FullLayout />}>
			<Route
				path="/"
				element={<Home />}
			/>

			<Route
				path="/diagnose"
				element={<Diagnose />}></Route>
		</Route>

		<Route
			path="*"
			element={
				<Navigate
					to={"/"}
					replace
				/>
			}
		/>
	</Routes>
);

export default MainRouter;
