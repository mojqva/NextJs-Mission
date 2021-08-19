import {Formik, Form} from 'formik';
import TextField from '../components/TextField';
import Button from '@material-ui/core/Button';
import {useState, useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
import ParseDateString from '../components/ParseDateString';
import {parse, isDate} from 'date-fns';
import * as yup from 'yup';

export default function Signup () {
    const {user, setUser} = useContext(UserContext);
    const [info, setInfo] = useState({});

    return (
        <Formik
            initialValues={{
                checkIn: '',
                checkOut: ''
            }}
        >
            {formik => (
                <div>
                    <h4>Select checkin checkout date</h4>
                    <h4>Current Checkin Datetime is {user ? user.checkIn: null}</h4>
                    <h4>Current Checkout Datetime is {user ? user.checkOut : null}</h4>
                    <Form>
                        <TextField label='Checkin Date' name='checkIn' type='text'/>
                        <TextField label='Checkout Date' name='checkOut' type='text'/>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            type='submit'
                            onClick={() => {
                                    setInfo({...user, checkIn: formik.values.checkIn, checkOut: formik.values.checkOut});
                                    setUser({...user, ...info});
                                }
                            }
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}