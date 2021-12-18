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

const ReasonForVisit = () => {
  const form = useForm()
  const formState = useFormState()
  const values = formState.values
  const [dependents, addDependent] = useState<any>([])

  return (
    <Grid item container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <b>Conditions</b>
        </Typography>
      </Grid>
      {dependents.length > 0 && (
        <Grid item xs={12}>
          <ListOfDependents dependents={dependents} />
        </Grid>
      )}
      <Grid item xs={12}>
        <TextField name="condition.name" label="Condition Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          name="condition.painLevel"
          label="On a scale of 1 to 10 with 10 being the worst pain and zero being no pain, rate your pain"
          items={[
            {
              key: 1,
              value: 1,
            },
            {
              key: 2,
              value: 2,
            },
            {
              key: 3,
              value: 3,
            },
            {
              key: 4,
              value: 4,
            },
            {
              key: 5,
              value: 5,
            },
            {
              key: 6,
              value: 6,
            },
            {
              key: 7,
              value: 7,
            },
            {
              key: 8,
              value: 8,
            },
            {
              key: 9,
              value: 9,
            },
            {
              key: 10,
              value: 10,
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          name="condition.whenProblemStart"
          label="When did the problem begin?"
          format="MMMM d, yyyy"
          disableFuture
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          name="condition.whenProblemAtWorst"
          label="When is the problem at its worst?"
          items={[
            {
              key: "AM",
              value: "am",
            },
            {
              key: "PM",
              value: "pm",
            },
            {
              key: "Mid-day",
              value: "mid-day",
            },
            {
              key: "Late PM",
              value: "late-pm",
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          name="condition.howLongDoesProblemLast"
          label="How long does the pain last?"
          items={[
            {
              key: "Constant",
              value: "constant",
            },
            {
              key: "On-and-off during the day",
              value: "during-the-day",
            },
            {
              key: "It comes and goes throughout the week",
              value: "throughout-the-week",
            },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField name="condition.howDidInjuryHappen" label="How did the injury happen?" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          name="condition.injuryEverBeenTreated"
          label="Condition ever been treated by anyone in the past? "
          items={[
            {
              key: "Yes",
              value: true,
            },
            {
              key: "No",
              value: false,
            },
          ]}
        />
      </Grid>
      {values?.condition?.injuryEverBeenTreated && (
        <React.Fragment>
          <Grid item xs={12} md={6}>
            <TextField name="condition.whereInjuryWasTreated" label="Where were you under care?" />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              name="condition.whenWasInjuryWasTreated"
              label="When were you under care?"
              format="MMMM d, yyyy"
              disableFuture
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="condition.howLongWereYouTreatedFor"
              label="How long were you under care?"
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="condition.treatedResults" label="What were the results?" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="condition.previousChiropractorName"
              label="Name of Previous Chiropractor?"
            />
          </Grid>
        </React.Fragment>
      )}
      <Grid item xs={12} md={6}>
        <TextField name="condition.symptoms" label="Describe your symptoms" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField name="condition.symptomsArea" label="Where is the area of symptoms?" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField name="condition.whatRelievesSymptom" label="What relieves your symptoms?" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          name="condition.whatMakeSymptomWorse"
          label="What makes your symptoms feel worse? "
        />
      </Grid>
      <Grid item xs={12}>
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

export default ReasonForVisit
