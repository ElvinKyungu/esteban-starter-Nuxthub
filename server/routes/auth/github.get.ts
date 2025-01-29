export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event, { user, tokens }) {
    console.log('GitHub OAuth success:', user)
    await setUserSession(event, {
      user: {
        githubId: user.id,
        username: user.login,
        avatarUrl: user.avatar_url,
      }
    })
    return sendRedirect(event, '/')
  },
})