import { Ctx } from "blitz"
import db from "db"

export default async function getProject(input: any, ctx: Ctx) {
  ctx.session.$authorize()

  const application = await db.application.findMany()

  return application
}
