export const LAYOUT_CONSTANTS = {
	// サイドバー
	SIDEBAR_WIDTH: "256px",
	SIDEBAR_WIDTH_NUMBER: 256,
	NARROW_SCREEN_BREAKPOINT: 1300,
	MAX_CONTENT_WIDTH: "1200px",
} as const;

// 計算用のヘルパー関数
export const getMainContentMargin = (
	isNarrowScreen: boolean,
	isSidebarOpen: boolean,
) => {
	return !isNarrowScreen && isSidebarOpen
		? LAYOUT_CONSTANTS.SIDEBAR_WIDTH
		: "0";
};

export const getMainContentMaxWidth = (
	isNarrowScreen: boolean,
	isSidebarOpen: boolean,
) => {
	return !isNarrowScreen && isSidebarOpen
		? `calc(100% - ${LAYOUT_CONSTANTS.SIDEBAR_WIDTH})`
		: "100%";
};
