export async function checkSessionIdExists(request, reply) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send()
  }

  return reply.continue
}
