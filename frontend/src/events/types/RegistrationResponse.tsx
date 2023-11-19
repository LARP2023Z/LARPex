
export type RegistrationResponse = {
    status: string
}

export const RegistrationStatus = {
    Success: "Success",
    TooLate: "TooLate",
    TooManyPlayers: "TooManyPlayers",
    SystemError: "SystemError"
}
