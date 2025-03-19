export type TimelineEventType =
	| "education"
	| "work"
	| "achievement"
	| "certification"
	| "internship";

export interface TimelineEvent {
	id: string;
	year: string;
	month: string;
	endYear?: string;
	endMonth?: string;
	title: string;
	icon: string;
	description?: string;
	type: TimelineEventType;
}
