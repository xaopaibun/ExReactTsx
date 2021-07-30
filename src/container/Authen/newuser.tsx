import { TextField, Theme, withStyles,  Button } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { useStyles } from "./style";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const ColorButton = withStyles((theme: Theme) => ({
    root: {
        width: "100%",
        textTransform: 'none',
        padding : '10px',
        textAlign:"center",
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#536DFE",
        '&:hover': {
            backgroundColor: '#072cfe',
        },
    },
}))(Button);

const NewUser: React.FC<TabPanelProps> = (props) => {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.jss8}>Welcome!</h1>
            <h1 className={classes.jss9}>Create your account</h1>
            <TextField
                placeholder="Full name"
                fullWidth
                className={classes.TextField}
            />
            <TextField
                placeholder="Email adress"
                fullWidth
                className={classes.TextField}
            />
            <TextField
                placeholder="Password"
                fullWidth
                className={classes.TextField}
            />
            <div className={classes.submit_account}>
                <ColorButton variant="contained" color="primary" >
                    Create your account
                </ColorButton>
            </div>
            <div className={classes.box_or}>
                <div className={classes.box_netdut}>
                    <div className={classes.netdut} />
                </div>
                <div >
                    <p className={classes.textOr}>or</p>
                </div>
                <div className={classes.box_netdut}>
                    <div className={classes.netdut} />
                </div>
            </div>
            <button className={classes.btn_Google} type="button">
                <span><img className={classes.img_Google} src="https://flatlogic.github.io/react-material-admin/static/media/google.09aea0f5.svg" alt="google" />&nbsp;Sign in with Google</span>
            </button>
        </div>
    );
}
export default NewUser;