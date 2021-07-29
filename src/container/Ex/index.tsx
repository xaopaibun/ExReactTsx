import { Button, Container, createStyles, Grid, makeStyles, Paper, FormLabel, Table, Radio, FormControlLabel, RadioGroup, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles, TextField, FormControl } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { deleteAll, ExSelectors } from "redux/toolkit/ExSlice";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import { ItemAdded, ItemUpdate, deleteItem } from 'redux/toolkit/ExSlice';
import { Formik } from 'formik';
const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    TextField: {
        marginTop: '20px',
        marginBottom: '20px'
    },
});
const Ex: React.FC = () => {
    const Total = useSelector(ExSelectors.selectTotal);
    const Exdata = useSelector(ExSelectors.selectAll);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <div>
            <Container fixed>
                <h1>Total List : {Total}</h1>
                <Formik
                    initialValues={{
                        name: "",
                        age: "",
                        gender: ""
                    }}
                    onSubmit={(values) => {
                        dispatch(ItemAdded({ ...values, _id: Math.random().toString() }))
                       
                    }}
                >
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

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">STT</StyledTableCell>
                                <StyledTableCell align="center">name</StyledTableCell>
                                <StyledTableCell align="center">age</StyledTableCell>
                                <StyledTableCell align="center">gender</StyledTableCell>
                                <StyledTableCell align="center">Thao Tac</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Exdata && Exdata.map((val, index) => (
                                    <StyledTableRow>
                                        <StyledTableCell align="center" component="th" scope="row">
                                            {index + 1}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{val.name}</StyledTableCell>
                                        <StyledTableCell align="center">{val.age}</StyledTableCell>
                                        <StyledTableCell align="center">{val.gender}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button startIcon={<DeleteIcon />} onClick={() => dispatch(deleteItem(val._id))} variant="contained" color="primary" >
                                                Delete
                                            </Button>
                                            <span> </span>
                                            <Button startIcon={<CreateIcon />} variant="contained" color="secondary" >
                                                Edit
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </div>
    );
}
export default Ex;