import React, { useRef } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import classes from './Auth.module.css';
const AuthPage = () => {
    const refEmailEl = useRef()
    const refPasswordEl = useRef()
    // const refEmailEl = useRef(null)
    const onSubmitHandler = (event) => {
        event.preventDefault()
        // console.log("onSubmitHandler -> refEmailEl.current", refEmailEl.current.value)
        const email = refEmailEl.current.value
        console.log("onSubmitHandler -> email", email)
        const password = refPasswordEl.current.value
        console.log("onSubmitHandler -> password", password)
    }
    return (
            <Form className={classes.authForm} onSubmit={onSubmitHandler}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" innerRef={refEmailEl} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={refPasswordEl} />
                </FormGroup>
                <FormGroup className='form-row'>
                    <div className='form-group col-12'>
                        <Button color='primary' type='submit'>Submit</Button>
                    </div>
                    <div className='form-group col-12'>
                        <Button onClick={e => e.preventDefault()}>Switch To Sign Up</Button>
                    </div>
                </FormGroup>
            </Form>
    );
}

export default AuthPage;