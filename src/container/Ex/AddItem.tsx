import React from 'react';
import { Formik } from 'formik';
import { FormControl, Grid, TextField, FormLabel, FormControlLabel, RadioGroup, Button, Radio } from '@material-ui/core';
import { deleteAll, ItemAdded } from 'redux/toolkit/ExSlice';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import useStyles from './style';
const AddItem: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Formik
            initialValues={{
                name: "",
                age: "",
                gender: ""
            }}
            onSubmit={(values) => {
                dispatch(ItemAdded({ ...values, _id: Math.random().toString() }))
            }} >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <TextField
                                placeholder="Nhap name"
                                name="name"
                                onChange={props.handleChange}
                                className={classes.TextField}
                                value={props.values.name}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                placeholder="Nhap age"
                                className={classes.TextField}
                                onChange={props.handleChange}
                                name="age"
                                value={props.values.age}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" value={props.values.gender} onChange={props.handleChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" startIcon={<AddIcon />} color="primary" className={classes.TextField} type='submit'>
                                Add List
                            </Button>
                            <span> </span>

                            <Button startIcon={<DeleteIcon />} onClick={() => dispatch(deleteAll())} variant="contained" >
                                Delete All
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            )}
        </Formik>
    );
}
export default AddItem;