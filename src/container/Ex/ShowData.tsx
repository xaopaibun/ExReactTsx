import { createStyles, TableCell, TableContainer, TableHead, Table, TableBody, TableRow, Theme, withStyles, Paper } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, ExSelectors, itemEdit, showModal } from "redux/toolkit/ExSlice";
import React from "react";
const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 16,
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


const ShowData: React.FC = () => {
    const EditItem = (val: any) => {
        dispatch(showModal())
        dispatch(itemEdit(val))
    }
    const dispatch = useDispatch();
    const classes = useStyles();
  
    const Exdata = useSelector(ExSelectors.selectAll);

    console.log('re-render component Show Data')
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">STT</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Age</StyledTableCell>
                        <StyledTableCell align="center">Gender</StyledTableCell>
                        <StyledTableCell align="center">Thao Tac</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Exdata && Exdata.map((val, index) => (
                            <StyledTableRow key={val._id}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">{val.name}</StyledTableCell>
                                <StyledTableCell align="center">{val.age}</StyledTableCell>
                                <StyledTableCell align="center">{val.gender}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Fab color="primary" aria-label="delete" onClick={() => dispatch(deleteItem(val._id))}>
                                        <DeleteIcon />
                                    </Fab>
                                    <span> </span>
                                    <Fab color="secondary" aria-label="edit" onClick={() => EditItem(val)}>
                                        <EditIcon />
                                    </Fab>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ShowData;