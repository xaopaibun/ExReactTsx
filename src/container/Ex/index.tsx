import { Button, Container, createStyles, Grid, makeStyles, Modal, Paper, FormLabel, Table, Radio, FormControlLabel, RadioGroup, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles, TextField, FormControl } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { deleteAll, ExSelectors, deleteItem, ItemAdded, itemEdit, ItemUpdate } from "redux/toolkit/ExSlice";

import SaveIcon from '@material-ui/icons/Save';
import { Formik } from 'formik';
import React, { useRef } from 'react';
import useStyles from './style';
import AddItem from './AddItem';
import ShowData from './ShowData';





const Ex: React.FC = () => {
    const Total = useSelector(ExSelectors.selectTotal);
   
    const classes = useStyles();
    const dispatch = useDispatch();
    const item = useSelector((state: any) => state.ExReducer.itemEdit);
    const rootRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const EditItem = (val: any) => {
        handleOpen();
        dispatch(itemEdit(val))
    }

    const ModalEdit = () => {
        return (
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open={open}
                onClose={handleClose}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
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
    return (
        <div ref={rootRef}>
            <Container fixed>
                <ModalEdit />
                <h1>Total List : {Total}</h1>
                <AddItem />
               <ShowData />
            </Container>

        </div>
    );
}
export default Ex;