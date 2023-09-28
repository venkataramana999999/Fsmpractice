/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Link, useNavigate } from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import axios from './../../Lib/apiCall'

import './login.css'
import {
    Col,
    CardTitle,
    CardText,
    Form,
    Label,
    Input,
    Alert,
    UncontrolledTooltip,
    Card,
    CardHeader,
    CardBody,
    Nav, NavItem, NavLink, CardFooter,
    InputGroup, InputGroupText,
    Spinner,
    ModalHeader,
    ModalBody
} from "reactstrap"

import Header from '../../Common/Header/header';
import img4 from './../../../Assets/Images/Logo/sanitation_chain_-_blog_laura_png.png';
import emp from './../../../Assets/Images/Logo/employee_new.png';
import citizen_logo from './../../../Assets/Images/Logo/citizen_new.png';
import "swiper/css";
import { Controller, useForm } from 'react-hook-form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
};

const LoginPage: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const [Error, SetError] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [citizenModal, setCitizenModal] = useState(false)
    const [PhoneNumberEnter, setPhoneNumberEnter] = useState("")
    const navigate = useNavigate()
    const defaultValues = {
        email: "",
        password: ""
    }
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues })



    const onSubmit = (data: { email: string; password: string }) => {
        if (Object.values(data).every((field) => field.length > 0)) {
            axios
                .post('auth/login', { email: data.email, password: data.password })
                .then((res: { data: { data: any; }; }) => {
                    const responseData = { ...res.data.data };
                    console.log(responseData);
                    localStorage.setItem('token', responseData.token);
                    // dispatch(handleLogin(data))
                    // navigate(getHomeRouteForLoggedInUser(data.roleName))
                    navigate("/state-dashboard")
                })
                .catch((err: { response: { data: { success: React.SetStateAction<string>; error: { message: React.SetStateAction<string>; }[]; }; }; }) => {
                    // Assuming SetError and setErrorMsg are defined elsewhere with appropriate types
                    SetError(err.response.data.success);
                    setErrorMsg(err.response.data.error[0].message);
                });
        } else {
            console.log('err');
        }
    };

 

    return (
        <div>
            <Header />
            <Col className='d-flex align-items-center px-1' lg='5' sm='12' md='12'>
                <div
                    style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', display: 'flex', justifyContent: 'space-between' ,width:'100%'}}
                    className='w-100 container swpier-text mt-3 mx-2'
                >
                    <Grid item xs={12} md={5} style={{ margin: '20px' }}>
                        <Swiper style={{ textAlign: 'justify', marginLeft: '40px', width: '80%' }}>
                            <SwiperSlide>
                                <h4 className='w-70 brand-text ms-1' style={{ margin: '28% 0 0 0', fontSize: '25px', fontWeight: 700, color: '#3b6796', fontFamily: 'sans-serif' }}>
                                    Digital Transformation for FSM
                                </h4>
                                <p className='w-70  ms-1 fw-bolder' style={{ marginTop: '20px', color: '#6e6b7b', fontFamily: 'sans-serif' }}>
                                    Digital platform for smart faecal sludge management system <br /> providing end-to-end monitoring
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h4 className='w-70 brand-text ms-1' style={{ margin: '28% 0 0 0', fontSize: '25px', fontWeight: 700, color: '#3b6796', fontFamily: 'sans-serif' }}>
                                    Citizen-centric Service Delivery
                                </h4>
                                <p className='w-70  ms-1 fw-bolder' style={{ marginTop: '20px', color: '#6e6b7b', fontFamily: 'sans-serif' }}>
                                    Smart digital platform for citizens to ensure ease of access to service providers and to log desludging requests
                                </p>
                            </SwiperSlide>
                            {/* Other SwiperSlides */}
                        </Swiper>
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            {/* Employee Button */}
                            <div style={{ textAlign: 'justify', marginLeft: '100px', width: '50%', display: 'flex', flexDirection: 'column' }}>
                                <img src={emp} alt='employee' width={60} style={{ marginLeft: '40px' }} />
                                <button
                                    className='fw-bolder mt-1 px-1 text-citizen text-center'
                                    style={{ color: '#3b6796', borderRadius: '25px', border: '2px solid #3b6796', width: '60%', height: '50px', marginTop: '15px' }}
                                    onClick={handleOpen}
                                >
                                    Employee
                                </button>
                            </div>
                            {/* Citizen Button */}
                            <div style={{ textAlign: 'justify', marginLeft: '-30px', width: '50%', display: 'flex', flexDirection: 'column' }}>
                                <img src={citizen_logo} alt='citizen' width={60} style={{ marginLeft: '40px' }} />
                                <button
                                    className='fw-bolder mt-1 px-1 text-citizen text-center'
                                    style={{ color: '#3b6796', borderRadius: '25px', border: '2px solid #3b6796', width: '60%', height: '50px', marginTop: '15px' }}
                                    onClick={() => setCitizenModal(!citizenModal)}
                                >
                                    Citizen Request Form
                                </button>
                            </div>
                        </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <ModalHeader style={{ marginTop: "-40px" }}>{(`${"Login"}`)}</ModalHeader>
                                <ModalBody>
                                    <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-1' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Label className='form-label' htmlFor='login-email'>
                                                {(`${"User Name"}`)}
                                            </Label>
                                            <Controller
                                                name='email'
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        style={{ height: '30px', border: '1px solid #d8d6de', borderRadius: '0.357rem', padding: '0.2rem' }}
                                                        autoFocus
                                                        type='text'
                                                        placeholder='Enter user Id'
                                                        // invalid={errors.loginEmail && true}
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className='mb-1' style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                                            <Label className='form-label' htmlFor='login-email' style={{ marginBottom: '0.2857rem' }}>
                                                {(`${"Password"}`)}
                                            </Label>
                                            {/* <Input
                                                style={{ height: '30px', border: '1px solid #d8d6de', borderRadius: '0.357rem', padding: '0.2rem' }}
                                                autoFocus
                                                type='password'
                                                placeholder='Enter user Id'

                                            // invalid={errors.loginEmail && true}
                                            // {...field}
                                            /> */}
                                            <Controller

                                                name='password'
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        style={{ height: '30px', border: '1px solid #d8d6de', borderRadius: '0.357rem', padding: '0.2rem' }}
                                                        className='input-group-merge' invalid={errors.password && true} {...field} />
                                                )}
                                            />
                                        </div>
                                        {/* <button className="btn-style" color="success" style={{ marginBottom: '10px' }} >
                                            {(`${"login"}`)}
                                        </button> */}
                                        <Button type='submit' className="btn-style btn btn-success d-block w-100" style={{ marginTop: '10px', width: '100%', backgroundColor: '#28c76f', height: '35px', border: 'none', borderRadius: '5px', color: '#fff' }} >
                                            {(`${"Login"}`)}
                                        </Button>
                                    </Form>
                                </ModalBody>
                            </Box>
                        </Modal>
                      

                    </Grid>
                   
                    <Grid item xs={12} md={7}>
                        <div style={{ margin: '20% 0 0 0' }}>
                            <img src={img4} style={{ width: '100%', height: '60%', bottom: '0' }} alt='Image' />
                        </div>
                    </Grid>
                </div>
            </Col>
        </div>
    );
};

export default LoginPage;
