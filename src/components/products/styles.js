import { makeStyles } from '@material-ui/core/styles'
import background from "../../assets/background.jpg";


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        backgroundImage: `url(${background})`,
        flexGlow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
}))
