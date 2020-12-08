import { Tooltip, withStyles } from "@material-ui/core"; // v 4.x
// import { Tooltip, makeStyles } from "@material-ui/core"; // v 5 alpha

const StyledTooltip = withStyles({
// const StyledTooltip = makeStyles({
    tooltip: {
    backgroundColor: "black",
    color: "white",
    fontSize: ".9rem",
  }
})(Tooltip);

export default StyledTooltip;