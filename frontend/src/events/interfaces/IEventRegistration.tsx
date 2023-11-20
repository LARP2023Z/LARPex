import {EventSignUpDto} from "../types/EventSignUpDto";
import {RegistrationResponse, RegistrationStatus} from "../types/RegistrationResponse";
import {AEvents} from "./AEvents";

export interface IEventRegistration {
    signUp(eventSignUpDto: EventSignUpDto): Promise<RegistrationResponse>
}

export class EventRegistrationProxy implements IEventRegistration {

    aEvents: AEvents

    injectApi(aEvents) {
        this.aEvents = aEvents
    }

    async signUp(eventSignUpDto: EventSignUpDto): Promise<RegistrationResponse> {

        this.aEvents.signUpForEvent(eventSignUpDto.userId, eventSignUpDto.eventId)
            .then(result => {
                return {status: result.status}
            }).catch(
            reason => {
                throw reason
            }
        )

        return {status: RegistrationStatus.Success}
    }

}
