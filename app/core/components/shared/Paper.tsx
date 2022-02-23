import MuiPaper from "@mui/material/Paper"
import PropTypes from "prop-types"

const Paper = (props) => (
  <MuiPaper sx={{ padding: 2 }} {...props}>
    {props.children}
  </MuiPaper>
)

Paper.defaultProps = {
  onClick: null,
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  elevation: PropTypes.number,
  onClick: PropTypes.func,
  square: PropTypes.bool,
  sx: PropTypes.object,
}

export default Paper
