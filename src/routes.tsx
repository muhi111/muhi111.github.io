import { lazy, type ReactNode } from "react";

const Home = lazy(() => import("./components/home/Home"));
const Articles = lazy(() => import("./components/articles/Articles"));
const Works = lazy(() => import("./components/works/Works"));
const Skills = lazy(() => import("./components/skills/Skills"));

type RouteConfig = {
	path: string;
	label: string;
	element: ReactNode;
};

export const routes: RouteConfig[] = [
	{ path: "/", label: "Home", element: <Home /> },
	{ path: "/articles", label: "Articles", element: <Articles /> },
	{ path: "/works", label: "Works", element: <Works /> },
	{ path: "/skills", label: "Skills", element: <Skills /> },
];
