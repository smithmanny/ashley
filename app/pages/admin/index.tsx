import { BlitzPage, useQuery } from "blitz"
import Stack from "@mui/material/Stack"
import DeleteIcon from "@mui/icons-material/Delete"

import regularApplicationsQuery from "./queries/fetchRegularApplications"

import Container from "app/core/components/shared/Container"
import Button from "app/core/components/shared/Button"
import Paper from "app/core/components/shared/Paper"
import Grid from "app/core/components/shared/Grid"
import Layout from "app/core/layouts/Layout"
import Typography from "app/core/components/shared/Typography"

const Admin: BlitzPage = (props) => {
  const [regularApplications] = useQuery(regularApplicationsQuery, undefined)
  console.log(regularApplications)
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {regularApplications.map((application, index) => (
          <Grid key={index} item xs={12}>
            <Paper
              sx={{
                alignItems: "center",
                display: "flex",
                padding: 2,
              }}
            >
              {application.name}
              <Stack>
                <Button icon="delete" />
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Admin.authenticate = { redirectTo: "/login" }
Admin.getLayout = (page) => <Layout title="Admin">{page}</Layout>

export default Admin
