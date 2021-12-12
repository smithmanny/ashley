import MuiButton from "@mui/material/Button"
import PropTypes from "prop-types"

const Button = (props) => <MuiButton {...props}>{props.children}</MuiButton>

Button.defaultProps = {
  variant: "cotained",
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
}

export default Button
