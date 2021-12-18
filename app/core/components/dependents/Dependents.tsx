import React, { useState } from "react"
import { useForm, useFormState } from "react-final-form"

import Grid from "app/core/components/shared/Grid"
import Button from "app/core/components/shared/Button"
import Typography from "app/core/components/shared/Typography"
import Table from "app/core/components/shared/Table"
import { Checkbox, DatePicker, Select, TextField } from "app/core/components/form"

const ListOfDependents = ({ dependents }) => (
  <React.Fragment>
    <Typography variant="h6" sx={{ mb: 2 }}>
      <b>Dependents</b>
    </Typography>
    <Table headers={["Name", "D.O.B", "Relationship"]} rows={dependents} />
  </React.Fragment>
)

const Dependents = () => {
  const form = useForm()
  const formState = useFormState()
  const values = formState.values
  const [dependents, addDependent] = useState<any>([])

  if (!values?.anyDependentsCovered) {
    return null
  }
  return (
    <Grid item container spacing={2}>
      {dependents.length > 0 && (
        <Grid item xs={12}>
          <ListOfDependents dependents={dependents} />
        </Grid>
      )}
      <Grid item xs={12}>
        <TextField name="dependent.name" label="Dependent Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          name="dependent.birthDate"
          label="Dependent D.O.B"
          format="MMMM d, yyyy"
          disableFuture
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField name="dependent.relationship" label="Dependent Relationship" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          disabled={
            !values.dependent?.name ||
            !values.dependent?.birthDate ||
            !values.dependent?.relationship
          }
          onClick={() => {
            function clearFields() {
              form.change("dependent.name", "")
              form.change("dependent.birthDate", "")
              form.change("dependent.relationship", "")
            }

            return new Promise((resolve, reject) => {
              resolve(
                addDependent([
                  ...dependents,
                  {
                    name: values.dependent.name,
                    birthDate: values.dependent.birthDate.toDateString(),
                    relationship: values.dependent.relationship,
                  },
                ])
              )
            }).then(clearFields)
          }}
          variant="contained"
        >
          Add Dependent
        </Button>
      </Grid>
    </Grid>
  )
}

export default Dependents
