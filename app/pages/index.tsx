import React from "react"
import { BlitzPage, useMutation } from "blitz"

import fields from "intake_forms/regularForm"
import submitRegularFormMutation from "app/mutations/submitRegularForm"

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
  const [submitRegularForm] = useMutation(submitRegularFormMutation)
  return (
    <Container maxWidth="md">
      <Form
        submitText="Submit"
        onSubmit={async (vals) => {
          const removeFalsy = (obj) => {
            let newObj = {}
            Object.keys(obj).forEach((prop) => {
              if (obj[prop] !== undefined || null) {
                newObj[prop] = obj[prop]
              }
            })
            return newObj
          }

          let input = {
            ...vals,
            age: Number(vals.age),
            emergencyContactNumber: Number(vals.emergencyContactNumber),
            homePhone: Number(vals.homePhone),
            mobilePhone: Number(vals.mobilePhone),
            socialNumber: Number(vals.socialNumber),
            sufferedInPastCount: Number(vals.sufferedInPastCount),
            injuryBecauseOfAccident: false,
            reasonForVisit: vals?.reasonForVisit?.map((rfv) => ({
              ...rfv,
              painLevel: Number(rfv.painLevel),
            })),
          }

          if (!vals.sufferedInPastCount) {
            delete input["sufferedInPastCount"]
          }

          input = removeFalsy(input)

          await submitRegularForm(input)
        }}
      >
        {fields.map((field) => {
          const fieldProps = Object.fromEntries(
            Object.entries(field)
              .filter(([key]) => !key.includes("component"))
              .filter(([key]) => !key.includes("customComponent"))
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
              <Grid item xs={12} key={field.name}>
                <Component {...fieldProps} />
              </Grid>
            )
          }

          if (!Object.keys(field).includes("component")) {
            return (
              <Grid key={field.name} item xs={12} sx={{ mt: 2 }}>
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
