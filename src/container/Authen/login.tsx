import { TextField, Theme, withStyles , Button} from "@material-ui/core";
import { useStyles } from "./style";

import { purple } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const ColorButton = withStyles((theme: Theme) => ({
    root: {
       
        textTransform: 'none',
        textAlign:"center",
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#536DFE",
        '&:hover': {
            backgroundColor: '#072cfe',
        },
    },
}))(Button);

 const Login: React.FC<TabPanelProps> = (props) => {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    const history = useHistory();
    const submit = () =>{
        history.push('/Home');
    }
    return (
        <div>
            <h1 className={classes.jss8}>Good Morning, User</h1>

            <button className={classes.btn_Google} type="button">
                <span><img className={classes.img_Google} src="https://flatlogic.github.io/react-material-admin/static/media/google.09aea0f5.svg" alt="google" />&nbsp;Sign in with Google</span>
            </button>
            <div className={classes.box_or}>
                <div className={classes.box_netdut}>
                    <div className={classes.netdut} />
                </div>
                <div >
                    <p className={classes.textOr}>or </p>
                </div>
                <div className={classes.box_netdut}>
                    <div className={classes.netdut} />
                </div>
            </div>
            <TextField
                placeholder="Email adress"
                fullWidth
                className={classes.TextField}
                value ="vanquy33338888@gmail.com"
            />
            <TextField
                placeholder="Password"
                fullWidth
                className={classes.TextField}
                value="vanquy"
                type ='password'
            />
            <div className={classes.box_btn}>
                <ColorButton variant="contained" color="primary" onClick={() => submit()}>
                    LOGIN
                </ColorButton>
                
                <Button>Forget Password</Button>
            </div>

        </div>
    );

}
export default Login;