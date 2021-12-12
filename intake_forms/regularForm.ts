import { Checkbox, Select, TextField } from "app/core/components/form"

const fields = [
  {
    name: "name",
    label: "Name",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
  },
  {
    name: "birthdate",
    label: "Birth Date",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
  },
  {
    name: "age",
    label: "Age",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
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
    component: Select,
  },
  {
    name: "socialNumber",
    label: "SSN #",
    size: {
      xs: 12,
    },
    component: TextField,
  },
  {
    name: "address",
    label: "Address",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
  },
  {
    name: "city",
    label: "City",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
  },
  {
    name: "state",
    label: "State",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
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
    component: TextField,
  },
  {
    name: "email",
    label: "Email Address",
    required: true,
    size: {
      xs: 12,
    },
    component: TextField,
  },
  {
    name: "homePhone",
    label: "Home Phone",
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
  },
  {
    name: "mobilePhone",
    label: "Mobile Phone",
    required: true,
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
  },
  {
    name: "carrier",
    label: "Phone Carrier",
    size: {
      xs: 12,
      md: 6,
    },
    component: TextField,
  },
  {
    name: "enableTextCommunication",
    label: "Would you like to receive appointment reminders via text messages ",
    items: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
    size: {
      xs: 12,
      md: 6,
    },
    component: Checkbox,
  },
]

export default fields
