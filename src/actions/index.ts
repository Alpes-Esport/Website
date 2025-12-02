import type { TwitchLivestream } from "@types"
import { defineAction } from "astro:actions"

export const server = {
    getTwitchLivestream: defineAction({
        handler: async (_, { locals }) => {
            return await locals.runtime.env.STORE.get("TWITCH_LIVESTREAM", "json") as TwitchLivestream | null
        }
    })
}
