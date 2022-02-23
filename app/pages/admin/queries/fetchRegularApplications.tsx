import { Ctx } from "blitz"
import db from "db"

export default async function getProject(input: any, ctx: Ctx) {
  // Require user to be logged in
  // ctx.session.$authorize()

  const application = await db.application.findMany()

  return application
}
