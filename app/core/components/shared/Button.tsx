import MuiButton from "@mui/material/Button"
import PropTypes from "prop-types"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

const Button = (props) => {
  if (props.icon) {
    let Component = <DeleteIcon />
    return <IconButton aria-label="delete">{Component}</IconButton>
  }

  return <MuiButton {...props}>{props.children}</MuiButton>
}

Button.defaultProps = {
  color: "primary",
  icon: "",
  onClick: null,
  variant: "contained",
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  sx: PropTypes.object,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
}

export default Button
