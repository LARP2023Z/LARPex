import { EventSignUpDto } from '../types/EventSignUpDto';
import { RegistrationResponse } from '../types/RegistrationResponse';
import { SignUpResponse } from '../types/SignUpResponse';

export interface IEventRegistration {
  signUp(eventSignUpDto: EventSignUpDto): Promise<RegistrationResponse>;
}

export class EventRegistrationProxy implements IEventRegistration {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async signUp(eventSignUpDto: EventSignUpDto): Promise<RegistrationResponse> {
    try {
      const eventId = eventSignUpDto.eventId;
      const userId = eventSignUpDto.userId;

      const response = await fetch(`/api/events/${userId}/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return await response.json().then((resp: SignUpResponse) => {
          return resp.status;
        });
      } else {
        throw new Error(
          `Failed to sign up for event. Status: ${response.status}`
        );
      }
    } catch (error) {
      throw new Error(`Error signing up for event: ${error}`);
    }
  }
}
