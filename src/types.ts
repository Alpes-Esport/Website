import type { ImageMetadata } from "astro"

export interface GameInterface {
	name: string,
	logo: ImageMetadata,
	banner: ImageMetadata
}

export interface TeamInterface {
	rank: number,
	name: string,
	players: string[]
}

export interface CashprizeInterface {
	game: GameInterface,
	cash: number,
	regulation?: string,
	registration?: string
}

export interface TournamentsInterface {
	title: string,
	links: {
		name: string,
		url: string,
		thumbnail: ImageMetadata
	}[]
}

export interface TwitchLivestream {
	id: string
	user_id: string,
	user_login: string,
	user_name: string,
	game_id: string,
	game_name: string,
	type: string,
	title: string,
	viewer_count: number,
	started_at: string,
	language: string,
	thumbnail_url: string,
	tag_ids: string[],
	is_mature: boolean
}

export function decodeHTMLEntities(text: string): string {
	return text.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
}
