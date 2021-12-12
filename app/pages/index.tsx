import { BlitzPage } from "blitz"

import Container from "app/core/components/shared/Container"
import Grid from "app/core/components/shared/Grid"
import Layout from "app/core/layouts/Layout"
import Typography from "app/core/components/shared/Typography"
import Form from "app/core/components/form"

import fields from "intake_forms/regularForm"

const Home: BlitzPage = (props) => {
  return (
    <Container maxWidth="md">
      <Form submitText="Submit" onSubmit={() => {}}>
        <Grid container spacing={2}>
          {fields.map((field) => {
            const fieldProps = Object.fromEntries(
              Object.entries(field)
                .filter(([key]) => !key.includes("component"))
                .filter(([key]) => !key.includes("size"))
            )

            if (field?.name === null) {
              return <Typography>{field.label}</Typography>
            }
            return <field.component key={field.name} {...fieldProps} {...field.size} />
          })}
        </Grid>
      </Form>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
