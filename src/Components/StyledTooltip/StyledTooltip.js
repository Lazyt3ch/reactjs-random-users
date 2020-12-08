import { Tooltip, withStyles } from "@material-ui/core";

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: "black",
    color: "white",
    fontSize: ".9rem",
  }
})(Tooltip);

export default StyledTooltip;