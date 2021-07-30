import { Container } from '@material-ui/core';
import { useSelector } from "react-redux";
import { ExSelectors } from "redux/toolkit/ExSlice";
import React from 'react';
import AddItem from './AddItem';
import ShowData from './ShowData';
import ModalEdit from './EditItem';

const Ex: React.FC = () => {
    const Total = useSelector(ExSelectors.selectTotal);

    return (
        <Container fixed>
            <ModalEdit />
            <h1>Total List : {Total}</h1>
            <AddItem />
            <ShowData />
        </Container>
    );
}

export default Ex;