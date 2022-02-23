import React from "react"
import { useForm, useFormState } from "react-final-form"
import { useFieldArray } from "react-final-form-arrays"

import Grid from "app/core/components/shared/Grid"
import Button from "app/core/components/shared/Button"
import Typography from "app/core/components/shared/Typography"
import { DatePicker, TextField } from "app/core/components/form"

const Dependents = () => {
  const formState = useFormState()
  const values = formState.values
  const fields = useFieldArray("dependents").fields

  if (!values?.anyDependentsCovered) {
    return null
  }

  return (
    <Grid item container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          <b>Dependents</b>
        </Typography>
      </Grid>
      {fields.map((name, index) => (
        <Grid sx={{ position: "relative" }} item container spacing={2} key={index}>
          <span
            style={{ position: "absolute", left: 0, cursor: "pointer" }}
            onClick={() => fields.remove(index)}
          >
            X
          </span>
          <TextField name={`${name}.name`} label="Dependent Name" xs={12} />
          <DatePicker
            name={`${name}.birthDate`}
            label="Dependent D.O.B"
            format="MMMM d, yyyy"
            disableFuture
            xs={12}
            md={6}
          />
          <TextField name={`${name}.relationship`} label="Dependent Relationship" xs={12} md={6} />
        </Grid>
      ))}

      <Grid item xs={12} md={6}>
        <Button onClick={() => fields.push(undefined)} variant="contained">
          Add Dependent
        </Button>
      </Grid>
    </Grid>
  )
}

export default Dependents
