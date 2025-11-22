import { useMediaQuery } from "@chakra-ui/react";
import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { LAYOUT_CONSTANTS } from "../constants/layout";

interface LayoutContextType {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (isOpen: boolean) => void;
	isNarrowScreen: boolean;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
	const [isNarrowScreen] = useMediaQuery([
		`(max-width: ${LAYOUT_CONSTANTS.NARROW_SCREEN_BREAKPOINT}px)`,
	]);

	const [isSidebarOpen, setIsSidebarOpen] = useState(!isNarrowScreen);

	// 画面サイズが変わったときにサイドバーの状態を同期する
	// 元のLayout.tsxの挙動を再現:
	// 狭い画面 -> 閉じる
	// 広い画面 -> 開く
	useEffect(() => {
		setIsSidebarOpen(!isNarrowScreen);
	}, [isNarrowScreen]);

	return (
		<LayoutContext.Provider
			value={{ isSidebarOpen, setIsSidebarOpen, isNarrowScreen }}
		>
			{children}
		</LayoutContext.Provider>
	);
}

export function useLayout() {
	const context = useContext(LayoutContext);
	if (context === undefined) {
		throw new Error("useLayout must be used within a LayoutProvider");
	}
	return context;
}
