import { FunctionComponent } from "react"
import { Checkboxes as MuiCheckboxes } from "mui-rff"
import PropTypes from "prop-types"

import Grid from "../shared/Grid"

const Checkbox: FunctionComponent<any> = (props) => (
  <Grid item xs={props.xs} md={props.md}>
    <MuiCheckboxes data={props.items} {...props} />
  </Grid>
)

Checkbox.defaultProps = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  xs: 12,
}

export default Checkbox
