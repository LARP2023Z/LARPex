import {EventSignUpDto} from "../types/EventSignUpDto";
import {RegistrationResponse, RegistrationStatus} from "../types/RegistrationResponse";

export interface IEventRegistration {
    signUp(eventSignUpDto: EventSignUpDto): RegistrationResponse
}

export class EventRegistrationProxy implements IEventRegistration {
    signUp(eventSignUpDto: EventSignUpDto): RegistrationResponse {
        return {status: RegistrationStatus.Success}
    }

}
