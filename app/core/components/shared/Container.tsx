import MuiContainer from "@mui/material/Container"
import PropTypes from "prop-types"

const Container = (props) => <MuiContainer {...props}>{props.children}</MuiContainer>

Container.defaultProps = {
  maxWidth: "lg",
}

Container.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),
}

export default Container
