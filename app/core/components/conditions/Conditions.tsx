import React, { useState } from "react"
import { useForm, useFormState } from "react-final-form"

import Grid from "app/core/components/shared/Grid"
import Button from "app/core/components/shared/Button"
import Typography from "app/core/components/shared/Typography"
import Table from "app/core/components/shared/Table"
import { Checkbox, DatePicker, Select, TextField } from "app/core/components/form"

const Conditions = () => {
  const form = useForm()
  const formState = useFormState()
  const [dependents, addDependent] = useState<any>([])
  return (
    <Grid item container spacing={2}>
      <Grid item xs={12} md={6}>
        <Select
          name="condition.type"
          label="Condition Type"
          items={[
            {
              key: "Injuries",
              value: "injuries",
            },
            {
              key: "Surgeries",
              value: "surgeries",
            },
            {
              key: "Childhood Diseases",
              value: "childhood_diseases",
            },
            {
              key: "Adult Diseases",
              value: "adult_diseases",
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField name="condition.name" label="Condition Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField name="condition.howLongAgo" label="How Long Ago" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField name="condition.typeOfCareReceived" label="Type of Care Received" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField name="condition.byWhom" label="By Whom" />
      </Grid>
    </Grid>
  )
}

export default Conditions
