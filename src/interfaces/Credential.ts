export interface Credential {
  email: string
  password: string
}

export interface NewCredential extends Credential {
  name: string
}
