import { Center, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

function Content() {
	return (
		<Suspense
			fallback={
				<Center w="full" h="calc(100dvh - 100px)">
					<Spinner color="blue.500" size="xl" />
				</Center>
			}
		>
			<Routes>
				{routes.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</Suspense>
	);
}

export default Content;
