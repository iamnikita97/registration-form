import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleTabs from './Tab';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10, 7),
        maxWidth: '900px',
        top: '61px !important',
        margin: '0px 0px 0px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    root: {
        maxWidth: '900px',
        position: 'relative',
        margin: '60px auto 0 auto',
        marginBottom: '5px',
        borderColor: 'black',
        border: '6px outset black'
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'black',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        border: '2px outset blue'
    },

}));

export default function InformationForm() {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        qualification: '',
        mobileNumber: '',
        submit: [],
        allRecords: [],
        counterId: 0,
        mode: 'add',
        editedRecordId: 0
    }
    )

    function handleRemover(fromId) {
        var form = state.allRecords;
        form = form.filter(function (el) {
            return el.counterId !== fromId;
        });
        setState({
            ...state,
            allRecords: form,
            //    firstName: '',
            //     lastName: '',
            //     email: '',
            //     qualification: '',
            //     mobileNumber: '',
                mode: 'add',
                editedRecordId: 0
        });
        return;
    }

    function handleEdit(editedRecordId) {


        const { allRecords } = state;
       for (var i in allRecords) {

            if (allRecords[i].counterId === editedRecordId) {
                setState({
                    ...state,
                    firstName: allRecords[i].firstName,
                    lastName: allRecords[i].lastName,
                    email: allRecords[i].email,
                    mobileNumber: allRecords[i].mobileNumber,
                    qualification: allRecords[i].qualification,
                    mode: 'edit',
                    editedRecordId: editedRecordId
                });
                break;
            }
        }
        return;
    }
    function myChangeHandler(event) {
        setState({
            ...state,
            [event.target.id]: event.target.value,
        });
        console.log(state);
    }

    function handleChangeData(fromId) {
        var form = state.allRecords;
        for (var i in form) {
            if (form[i].counterId === fromId) {
                console.log(form[i].firstName, "clicked");
            }
        }
    }

    function submitForm(event) {
        event.preventDefault();

        let counter = state.counterId + 1;


        if (state.mode === 'add') {
            setState((state) => ({
                ...state,
                counterId: counter,
                allRecords: [...state.allRecords,
                {
                    counterId: counter,
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    qualification: state.qualification,
                    mobileNumber: state.mobileNumber,
                    Status: ''
                },
                ],
                firstName: '',
                lastName: '',
                email: '',
                qualification: '',
                mobileNumber: ''
            }));

        } else {

            //Edit mode

            const { allRecords } = state;

            for (var i in allRecords) {

                if (allRecords[i].counterId === state.editedRecordId) {
                    allRecords[i].firstName = state.firstName;
                    allRecords[i].lastName = state.lastName;
                    allRecords[i].email = state.email;
                    allRecords[i].mobileNumber = state.mobileNumber;
                    allRecords[i].qualification = state.qualification;

                    break;
                }
            }
            setState((state) => ({
                ...state,
                allRecords: allRecords,
                firstName: '',
                lastName: '',
                email: '',
                qualification: '',
                mobileNumber: '',
                mode: 'add',
                editedRecordId: 0
            }));

        }
        console.log(state);
    }

    return (
        <>
            <Grid container component="main"
                justify="center">
            </Grid>

            <Grid container component="main" className={classes.root}
                justify="center">
                <CssBaseline />
                <Grid item xs={false} sm={12} md={12} ></Grid>
                <Grid item xs={false} sm={4} md={7}>
                    <div className={classes.SimpleTabscontainers}>
                        <SimpleTabs state={state} handleRemover={handleRemover} handleChangeData={handleChangeData} handleEdit={handleEdit} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <EventNoteIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {state.mode === 'edit' ? state.mode.charAt(0).toUpperCase() + state.mode.slice(1) : ''} Registration Form
                                           </Typography>
                            <form className={classes.form} onSubmit={submitForm}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstname"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            id="firstName"
                                            label="First Name"
                                            value={state.firstName}
                                            onChange={myChangeHandler}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            required
                                            id="lastName"
                                            label="Last Name"
                                            name="lastname"
                                            autoComplete="lname"
                                            value={state.lastName}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            required
                                            id="email"
                                            name="email"
                                            label="Email"
                                            type="text"
                                            required
                                            autoComplete="email"
                                            value={state.email}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            required
                                            id="qualification"
                                            name="qualification"
                                            label="Qualification "
                                            autoComplete="qualification"
                                            value={state.qualification}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            required
                                            id="mobileNumber"
                                            name="mobilenumber"
                                            label="Mobile Number"
                                            autoComplete="mobilenumber"
                                            value={state.mobileNumber}
                                            onChange={myChangeHandler}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit} >Submit</Button>
                            </form>
                        </div>
                    </Container >
                </Grid>
            </Grid>
        </>
    );
}