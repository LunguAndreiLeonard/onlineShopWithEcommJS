import { makeStyles } from "@material-ui/styles";
import background from "../../../assets/background.jpg";

export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    backgrround: {
        backgroundImage: `url(${background})`,
    }
}));