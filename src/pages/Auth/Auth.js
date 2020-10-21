import { useMutation } from '@apollo/client';
import React, { useRef } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { CREATE_USER } from '../../Apollo/Mutations/Auth/AuthMutation';
import classes from './Auth.module.css';

const AuthPage = () => {
    const refEmailEl = useRef()
    const refPasswordEl = useRef()
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER)
    console.log("AuthPage -> data", data)
    console.log("AuthPage -> error", error)
    console.log("AuthPage -> loading", loading)
    if (loading) {
        return <div>loading.......</div>
    }
    if (error) {
        alert(error)
        return <div></div>
    }
    // const refEmailEl = useRef(null)
    const onSubmitHandler = (event) => {
        event.preventDefault()
        const email = refEmailEl.current.value
        const password = refPasswordEl.current.value
        createUser({ variables: { input: { email, password } } })
    }
    return (
        <Form className={classes.authForm} onSubmit={onSubmitHandler}>
            {error ? 
                    <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
                        <span key={i}>{message}</span>
                    ))}
                    </pre> : null    
        }

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