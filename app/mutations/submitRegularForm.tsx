import db from "db"

export default async function submitRegularForm(data, ctx) {
  const application = await db.application.create({ data })

  return application
}
