export type RegistrationResponse = {
  status: 'Success' | string;
};

export const RegistrationStatus = {
  Success: 'Success',
  TooLate: 'TooLate',
  TooManyPlayers: 'TooManyPlayers',
  SystemError: 'SystemError',
};
