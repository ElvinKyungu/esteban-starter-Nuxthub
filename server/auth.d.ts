// auth.d.ts
declare module '#auth-utils' {
  interface User {
    githubId: string
    username: string
    avatarUrl: string
  }

  interface UserSession {
  }

  interface SecureSessionData {
  }
}

export {}