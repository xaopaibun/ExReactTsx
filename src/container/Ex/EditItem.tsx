import { FormControl, FormControlLabel, Grid, Modal, Radio, RadioGroup,FormLabel, TextField , Button} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./style";
import { Formik } from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import { showModal } from "redux/toolkit/ExSlice";


const ModalEdit:React.FC = () => {
    const isModal = useSelector((state: any) => state.ExReducer.isShowModal );
    const item = useSelector((state: any) => state.ExReducer.itemEdit);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(showModal())
    };
    
    return (
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open={isModal}
            onClose={handleClose}
            className={classes.modal}
        >
            <div className={classes.paper}>
                <h2>Edit item</h2>
                <Formik
                    initialValues={{
                        _id: item._id,
                        name: item.name,
                        age: item.age,
                        gender: item.gender
                    }}
                    onSubmit={(dulieu) => {
                        console.log(dulieu)
                    }} >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        placeholder="Nhap name"
                                        name="name"
                                        onChange={props.handleChange}
                                        className={classes.TextField}
                                        value={props.values.name}
                                    />

                                    <TextField
                                        placeholder="Nhap age"
                                        className={classes.TextField}
                                        onChange={props.handleChange}
                                        name="age"
                                        value={props.values.age}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender" value={props.values.gender} onChange={props.handleChange} >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Button startIcon={<SaveIcon />} type="submit" variant="contained" color="primary" className={classes.TextField} >
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
}
export default ModalEdit;