import React from "react"
import { useFormState } from "react-final-form"
import { useFieldArray } from "react-final-form-arrays"

import Button from "app/core/components/shared/Button"
import Grid from "app/core/components/shared/Grid"
import Typography from "app/core/components/shared/Typography"
import { Condition, DatePicker, Select, TextField } from "app/core/components/form"

const ReasonForVisit = () => {
  const formState = useFormState()
  const values = formState.values
  const fields = useFieldArray("reasonForVisit").fields
  return (
    <Grid item container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <b>Conditions</b>
        </Typography>
      </Grid>
      {fields.map((name, index) => (
        <Grid item container spacing={2} key={index}>
          <TextField name={`${name}.name`} label="Condition Name" xs={12} />
          <Select
            name={`${name}.painLevel`}
            label="Pain level with 10 being the worse"
            xs={12}
            md={6}
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
          <DatePicker
            name={`${name}.whenProblemStart`}
            label="When did the problem begin?"
            format="MMMM d, yyyy"
            disableFuture
            xs={12}
            md={6}
          />
          <Select
            name={`${name}.whenProblemAtWorst`}
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
            xs={12}
            md={6}
          />
          <Select
            name={`${name}.howLongDoesProblemLast`}
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
            xs={12}
            md={6}
          />

          <TextField
            name={`${name}.howDidInjuryHappen`}
            label="How did the injury happen?"
            xs={12}
          />

          <Select
            name={`${name}.injuryEverBeenTreated`}
            label="Ever been treated by anyone in the past? "
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
            xs={12}
            md={6}
          />

          <Condition when={`${name}.injuryEverBeenTreated`} is={true}>
            <React.Fragment>
              <TextField
                name={`${name}.whereInjuryWasTreated`}
                label="Where were you under care?"
                xs={12}
                md={6}
              />

              <DatePicker
                name={`${name}.whenWasInjuryWasTreated`}
                label="When were you under care?"
                format="MMMM d, yyyy"
                disableFuture
                xs={12}
                md={6}
              />

              <TextField
                name={`${name}.howLongWereYouTreatedFor`}
                label="How long were you under care?"
                type="number"
                xs={12}
                md={6}
              />

              <TextField
                name={`${name}.treatedResults`}
                label="What were the results?"
                xs={12}
                md={6}
              />

              <TextField
                name={`${name}.previousChiropractorName`}
                label="Name of Previous Chiropractor?"
                xs={12}
                md={6}
              />
            </React.Fragment>
          </Condition>

          <TextField name={`${name}.symptoms`} label="Describe your symptoms" xs={12} md={6} />

          <TextField
            name={`${name}.symptomsArea`}
            label="Where is the area of symptoms?"
            xs={12}
            md={6}
          />

          <TextField
            name={`${name}.whatRelievesSymptom`}
            label="What relieves your symptoms?"
            xs={12}
            md={6}
          />

          <TextField
            name={`${name}.whatMakeSymptomWorse`}
            label="What makes your symptoms feel worse?"
            xs={12}
            md={6}
          />
        </Grid>
      ))}

      <Grid item xs={12} md={6}>
        <Button onClick={() => fields.push(undefined)} variant="contained">
          Add Condition
        </Button>
      </Grid>
    </Grid>
  )
}

export default ReasonForVisit
