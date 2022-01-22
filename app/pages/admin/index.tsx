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

const Admin: BlitzPage = (props) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Form 1
        </Grid>
        <Grid item xs={12}>
          Form 2
        </Grid>
      </Grid>
    </Container>
  )
}

Admin.suppressFirstRenderFlicker = true
Admin.getLayout = (page) => <Layout title="Admin">{page}</Layout>

export default Admin
