import {EventListResponse} from "../types/EventListResponse";
import {SignUpResponse} from "../types/SignUpResponse";

export class AEvents {

    url: string
    userId: string

    constructor(url, userId) {
        this.url = url
        this.userId = userId
    }

    async fetchEvents(): Promise<EventListResponse[]> {
        try {
            const response = await fetch(this.url + '/events', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('There was a problem fetching the events:', error);
        }
    }

    async signUpForEvent(uid, eid): Promise<SignUpResponse> {
        try {
            const response = await fetch(this.url + `/events/${uid}/${eid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('There was a problem signing up for the event:', error);
        }
    }
}
