import React, { useState, useRef } from 'react';
import { Card, Button, Modal, FormControl, InputGroup } from 'react-bootstrap';
import { Url_Image } from '../../untils/until';
// import { ProductActiveLove } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { ProductActiveLove, CommentsProduct } from 'redux/thunk';
import { useFormik } from 'formik';
import Skeleton from 'react-loading-skeleton';

interface PropsProductItem {
    value: any,
}

interface PropsComment {
    id: string
}
const ProductItem: React.FC<PropsProductItem> = ({ value }) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    const ModalComment: React.FC<PropsComment> = ({ id }) => {
        const formik = useFormik({
            initialValues: {
                _id: Math.random(),
                name: '',
                time: Date.now(),
                content: '',
            },
            onSubmit: values => {
                handleClose();
                dispatch(CommentsProduct({ id, values }))
            },
        });
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comment</Modal.Title>
                </Modal.Header>
                <form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nhap Ho Ten "
                                aria-describedby="basic-addon1"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                name='name'
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nhap content"
                                aria-describedby="basic-addon1"
                                name='content'
                                onChange={formik.handleChange}
                                value={formik.values.content}
                            />
                        </InputGroup>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'  >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
    return (
        <Card style={{ width: '30%' }}>
            <Card.Img variant="top" width={'100%'} height='auto' src={Url_Image + value.images} />
            <Card.Body>
                <Card.Title><h1>{value.TenCoffee }</h1></Card.Title>
                {
                    value.comments.length > 0 ?
                        value.comments.map((val: any) => (<p key={val._id}><b>{val.name}</b> : {val.content}</p>)) : <div />
                }
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div onClick={() => dispatch(ProductActiveLove(value._id))} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                        {
                            value.love ?
                                <i className="fas fa-heart" style={{ color: 'red', fontSize: '30px' }}></i> :
                                <i className="far fa-heart" style={{ fontSize: '30px' }}></i>
                        }
                    </div>
                    <Button variant="primary" onClick={handleShow}>
                        Comment
                    </Button>
                </div>
            </Card.Body>
            <ModalComment id={value._id} />
        </Card>
    );
}
export default ProductItem;