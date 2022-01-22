const fields = [
  {
    name: "name",
    label: "Name",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "birthdate",
    label: "Birth Date",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "age",
    label: "Age",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "sex",
    label: "Sex",
    required: true,
    items: [
      { key: "Male", value: "Male" },
      { key: "Female", value: "Female" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "socialNumber",
    label: "SSN #",
    required: true,
    size: {
      xs: 12,
    },
    component: "TextField",
  },
  {
    name: "address",
    label: "Address",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "city",
    label: "City",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "state",
    label: "State",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "zipcode",
    label: "Zipcode",
    type: "number",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "email",
    label: "Email Address",
    required: true,
    size: {
      xs: 12,
    },
    component: "TextField",
  },
  {
    name: "homePhone",
    label: "Home Phone",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "mobilePhone",
    label: "Mobile Phone",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "carrier",
    label: "Phone Carrier",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "workPhone",
    label: "Work Phone",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "enableTextCommunication",
    label:
      "Would you like the convenience of text messages with appointment reminders and health information?",
    required: true,
    items: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
    size: {
      xs: 12,
    },
    component: "Checkbox",
  },
  {
    name: "maritalStatus",
    label: "Marital Status",
    required: true,
    items: [
      { key: "Single", value: "single" },
      { key: "Married", value: "married" },
    ],
    size: {
      xs: 12,
    },
    component: "Select",
  },
  {
    name: "occupation",
    label: "Your Occupation",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "employer",
    label: "Your Employer",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "spouseName",
    label: "Spouse's Name",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "spouseOccupation",
    label: "Spouse's Occupation",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "spouseEmployer",
    label: "Spouse's Employer",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    label: "Emergency Contact Information",
  },
  {
    name: "emergencyContactName",
    label: "Emergency Contact Name",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "emergencyContactNumber",
    label: "Emergency Contact #",
    required: true,
    type: "number",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "emergencyContactRelationship",
    label: "Relationship to emergency contact",
    required: true,
    size: {
      xs: 12,
    },
    component: "TextField",
  },
  {
    label: "Insurance Information",
  },
  {
    name: "doYouHaveInsurance",
    label: "Do you have insurance?",
    required: true,
    items: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    size: {
      xs: 12,
    },
    component: "Select",
  },
  {
    name: "insurancePolicyHolder",
    label: "Insurance Policy Holder",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "policyHolderBirthdate",
    label: "Policy Holder D.O.B.",
    size: {
      xs: 12,
      md: 6,
    },
    component: "DatePicker",
  },
  {
    name: "relationshipToPolicyHolder",
    label: "Relationship to Policy Holder",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "anyDependentsCovered",
    label: "Are there any spouse/dependents covered?",
    items: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "dependent",
    customComponent: "DependentsComponent",
  },
  {
    name: "reasonForVisit",
    customComponent: "ReasonForVisitComponent",
  },
  {
    name: "divider",
    customComponent: "DividerComponent",
  },
  {
    name: "restrictedActivity",
    label: "List Restrcited Activity",
    size: {
      xs: 12,
    },
    multiline: true,
    minRows: 2,
    component: "TextField",
  },
  {
    name: "currentActivityLevel",
    label: "Current Activity Level",
    size: {
      xs: 12,
    },
    multiline: true,
    minRows: 2,
    component: "TextField",
  },
  {
    name: "usualActivityLevel",
    label: "Usual Activity Level",
    size: {
      xs: 12,
    },
    multiline: true,
    minRows: 2,
    component: "TextField",
  },
  {
    name: "injuryToSpine",
    label: "Identify any other injury(s)",
    helperText:
      "Identify any other injury(s) to your spine, minor or major, that the doctor should know about",
    size: {
      xs: 12,
    },
    multiline: true,
    minRows: 2,
    component: "TextField",
  },
  {
    label: "Past History",
  },
  // Past History
  {
    name: "haveSufferedInPast",
    label: "Any problems in the past?",
    helperText: "Have you suffered with any of this or a similar problem in the past?",
    required: true,
    items: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "sufferedInPastCount",
    label: "If yes, how many times?",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "howDidInjuryHappen",
    label: "How did the injury happen?",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "otherFormOfTreatment",
    label: "Other forms of treatmenet tried?",
    required: true,
    items: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "whatTypeOfTreatment",
    label: "If yes, please state what type of treatment",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "whoProvidedTreatment",
    label: "Who provided it?",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "whenWasTreatment",
    label: "Who provided it?",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
  {
    name: "resultsOfTreatmenet",
    label: "What were the results?",
    items: [
      { key: "Favorable", value: "favorable" },
      { key: "Unfavorable", value: "unfavorable" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "unfavorableReason",
    label: "If results were unfavorable please explain",
    size: {
      xs: 12,
    },
    multiline: true,
    minRows: 2,
    component: "TextField",
  },
  {
    name: "stressfulJobs",
    label: "Identify any stressful jobs",
    helperText:
      "Please identify any and all types of jobs you have had in the past that have imposed any physical stress on you or your body",
    size: {
      xs: 12,
    },
    multiline: true,
    minRows: 2,
    component: "TextField",
  },
  // Conditions/Injuries
  {
    label: "Have you been diagnosed with any of the following conditions",
  },
  {
    name: "conditionBrokenBone",
    label: "Broken Bone",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionDislocation",
    label: "Dislocations",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionTumors",
    label: "Tumors",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionRheumatoidArthritis",
    label: "Rheumatoid Arthritis",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionFracture",
    label: "Fracture",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionDisability",
    label: "Disability",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionCancer",
    label: "Cancer",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionHeartAttack",
    label: "Heart Attack",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionOsteoArthritis",
    label: "Osteo Arthritis",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionDiabetes",
    label: "Diabetes",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionCerebralVascular",
    label: "Cerebral Vascular",
    items: [
      { key: "Past", value: "past" },
      { key: "Currently", value: "currently" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "conditionOtherSeriousConditions",
    label: "Other serious conditions",
    size: {
      xs: 12,
      md: 6,
    },
    multiline: true,
    component: "TextField",
  },
  {
    label:
      "Please identify ALL PAST and any CURRENT conditions you feel may be contributing to your present problems",
  },
  {
    name: "condition",
    customComponent: "ConditionComponent",
  },
  {
    label: "Social History",
  },
  {
    name: "smoking.type",
    label: "Smoking",
    items: [
      { key: "Cigars", value: "cigars" },
      { key: "Pipe", value: "pipe" },
      { key: "Cigarettes", value: "cigarettes" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "smoking.howOften",
    label: "Smoke how often?",
    items: [
      { key: "Daily", value: "daily" },
      { key: "Weekends", value: "weekends" },
      { key: "Occasionaly", value: "occasionaly" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "alcoholicBeverage.consumption",
    label: "Alcoholic Consumption",
    items: [
      { key: "Daily", value: "daily" },
      { key: "Weekends", value: "weekends" },
      { key: "Occasionaly", value: "occasionaly" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "recreationalDrugs.consumption",
    label: "Recreational Drugs Consumption",
    items: [
      { key: "Daily", value: "daily" },
      { key: "Weekends", value: "weekends" },
      { key: "Occasionaly", value: "occasionaly" },
      { key: "Never", value: "never" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    label: "Famiily History",
  },
  {
    name: "familyHistory.familyMemberSufferWithSameCondition",
    label: "Anybody in your family with same conditions?",
    helperText: "Does anyone in your family suffer with the same condition(s)?",
    items: [
      { key: "Yes", value: true },
      { key: "No", value: false },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "familyHistory.familyMemberWithSameCondition",
    label: "If yes whom?",
    items: [
      { key: "Grandmother", value: "grandmother" },
      { key: "Grandfather", value: "grandfather" },
      { key: "Mother", value: "mother" },
      { key: "Father", value: "father" },
      { key: "Sister", value: "sister" },
      { key: "Brother", value: "brother" },
      { key: "Son", value: "son" },
      { key: "Dauther", value: "dauther" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "familyHistory.familyMemberEverBeenTreated",
    label: "Have they ever been treated for their condition?",
    items: [
      { key: "No", value: false },
      { key: "Yes", value: true },
      { key: "IDK", value: "idk" },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: "Select",
  },
  {
    name: "familyHistory.hereditaryConditions",
    label: "Any other hereditary conditions?",
    helperText: "Any other hereditary conditions the doctor should be aware of?",
    size: {
      xs: 12,
      md: 6,
    },
    component: "TextField",
  },
]

export default fields
