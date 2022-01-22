import { BlitzPage } from "blitz"

import fields from "intake_forms/regularForm"

import Container from "app/core/components/shared/Container"
import Divider from "app/core/components/shared/Divider"
import Grid from "app/core/components/shared/Grid"
import Layout from "app/core/layouts/Layout"
import Typography from "app/core/components/shared/Typography"
import Form, { Checkbox, DatePicker, Select, TextField } from "app/core/components/form"
import DependentsComponent from "app/core/components/dependents"
import ReasonForVisitComponent from "app/core/components/reasonForVisit"
import ConditionsComponent from "app/core/components/conditions"

const Home: BlitzPage = (props) => {
  return (
    <Container maxWidth="md">
      <Form submitText="Submit" onSubmit={() => {}}>
        {fields.map((field) => {
          const fieldProps = Object.fromEntries(
            Object.entries(field)
              .filter(([key]) => !key.includes("component"))
              .filter(([key]) => !key.includes("size"))
          )

          if (Object.keys(field).includes("customComponent")) {
            let Component
            switch (field.customComponent) {
              case "ConditionComponent":
                Component = ConditionsComponent
                break
              case "DependentsComponent":
                Component = DependentsComponent
                break
              case "ReasonForVisitComponent":
                Component = ReasonForVisitComponent
                break
              case "DividerComponent":
                Component = Divider
                break
              default:
                break
            }
            return (
              <Grid item xs={12}>
                <Component key={field.name} {...fieldProps} />
              </Grid>
            )
          }

          if (!Object.keys(field).includes("component")) {
            return (
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h6">
                  <b>{field.label}</b>
                </Typography>
              </Grid>
            )
          }

          let Component
          switch (field.component) {
            case "Checkbox":
              Component = Checkbox
              break
            case "DatePicker":
              Component = DatePicker
              break
            case "Select":
              Component = Select
              break
            case "TextField":
              Component = TextField
              break
            default:
              break
          }

          return <Component key={field.name} {...fieldProps} {...field.size} />
        })}
      </Form>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
