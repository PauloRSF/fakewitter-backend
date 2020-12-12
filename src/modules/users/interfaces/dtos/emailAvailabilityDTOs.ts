export type EmailAvailabilityRequest = {
  email: string
}

export type EmailAvailabilityResponse = {
  valid: boolean,
  taken: boolean,
}
