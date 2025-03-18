import { useEffect } from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar({
	isOpen,
	setIsOpen,
	isNarrowScreen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isNarrowScreen: boolean;
}) {
	const navigate = useNavigate();

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const newIsNarrowScreen = width <= 1650;
			if (newIsNarrowScreen) setIsOpen(false);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [setIsOpen]);

	const handleNavigation = (path: string): void => {
		navigate(path);
		if (isNarrowScreen) setIsOpen(false);
	};

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
className={`fixed top-4 left-4 z-[30] p-3 rounded-full shadow-md transition-all duration-300
          ${
isOpen
? "bg-slate-700 text-white hover:bg-slate-600"
: "bg-white text-slate-800 hover:bg-slate-100"
}`}
				aria-label="Toggle Sidebar"
			>
				<FaBars className="w-6 h-6" />
			</button>

			<div
				className={`fixed top-0 left-0 z-[25] w-64 h-full bg-slate-800 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
			>
				<nav className="flex flex-col mt-20 p-4 space-y-3">
					<button
						type="button"
						onClick={() => handleNavigation("/")}
						className="w-full text-left px-6 py-4 text-slate-100 text-xl font-bold
              rounded-lg transition-all duration-200
              hover:bg-slate-700 hover:translate-x-1"
					>
						Home
					</button>
					<button
						type="button"
						onClick={() => handleNavigation("/skills")}
className="w-full text-left px-6 py-4 text-slate-100 text-xl font-bold
              rounded-lg transition-all duration-200
              hover:bg-slate-700 hover:translate-x-1"
>
Skills
</button>
<button
type="button"
onClick={() => handleNavigation("/works")}
className="w-full text-left px-6 py-4 text-slate-100 text-xl font-bold
              rounded-lg transition-all duration-200
              hover:bg-slate-700 hover:translate-x-1"
					>
						Works
					</button>
				</nav>

				<div className="absolute bottom-4 left-4 flex items-center space-x-4">
					<a
						href="https://github.com/muhi111"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:opacity-80 transition-colors duration-200"
					>
						<FaGithub className="w-12 h-12" />
					</a>
					<a
						href="https://qiita.com/muhi111"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:opacity-80 transition-opacity duration-200"
					>
						<img
							src="/portfolio/qiita.png"
							alt="Qiita"
							className="w-12 h-12 filter"
						/>
					</a>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
