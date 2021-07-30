import { Container, useMediaQuery } from '@material-ui/core';
import React from 'react';
import AddItem from './AddItem';
import ShowData from './ShowData';
import ModalEdit from './EditItem';
import Ex2 from './Ex2';

const Ex: React.FC = () => {
    return (
        <Container fixed>
            <ModalEdit />
            <Ex2 />
            <AddItem />
            <ShowData />
        </Container>
    );
}

export default Ex;