import { TextField, Theme, withStyles , Button} from "@material-ui/core";
import { useStyles } from "./style";

import { purple } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';
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
            <Formik
                initialValues = {{
                    email: "vanquy33338888@gmail.com",
                    password: "vanquy",
                  }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        history.push('/Home');
                        actions.setSubmitting(false);
                    }, 1500);
                }}
                >
                     {props => (
            <form onSubmit={props.handleSubmit}>
            <TextField
                placeholder="Email adress"
                fullWidth
                name="email"
                type ='email'
                className={classes.TextField}
                value={props.values.email}
            />
            <TextField
                placeholder="Password"
                fullWidth
                className={classes.TextField}
                type ='password'
                name="password"
                value={props.values.password}
            />
            <div className={classes.box_btn}>
                <ColorButton variant="contained" type ="submit" color="primary" >
                    { props.isSubmitting ? 
                    "Loading..."
                    : "LOGIN"}
                  
                </ColorButton>
                <Button>Forget Password</Button>
            </div>
            </form>
             )}
            </Formik>

        </div>
    );

}
export default Login;