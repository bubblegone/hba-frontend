export enum habitStatus {
	DONE = 'done',
	NONE = 'none'
}

export enum habitType {
	POSITIVE = 'positive',
	NEGATIVE = 'negative'
}

export interface habitData {
	name: String;
	motivation: String;
	status: habitStatus;
	stats: {
		score: number;
		streak: number;
		bestStreak: number;
	};
	type: habitType;
}
