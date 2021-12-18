import MuiButton from "@mui/material/Button"
import PropTypes from "prop-types"

const Button = (props) => <MuiButton {...props}>{props.children}</MuiButton>

Button.defaultProps = {
  color: "primary",
  onClick: null,
  variant: "contained",
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
}

export default Button
