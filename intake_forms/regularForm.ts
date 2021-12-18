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
]

export default fields
