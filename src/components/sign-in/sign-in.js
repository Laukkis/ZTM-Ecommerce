import { useState } from "react";
import { useDispatch } from "react-redux";


import { goolgeSignInStart, emailSignInStart } from "../../store/user/user.action";

import { useNavigate } from "react-router-dom";

import { setFavorites } from "../../store/favorites/favorites.action";

import Button from '../button/button'
import FormInput from "../form-input/form-input"
import './sign-in.styles.scss'


const defaultFormFields = {
    email: '',
    password: '',
}


const SignInEmail = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const dispatch = useDispatch()

    const resetFormfields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        dispatch(goolgeSignInStart())
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(emailSignInStart(email, password));
            dispatch(setFavorites());
            resetFormfields();
            //navigate('/')
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error)
            }
        }
    };


    return (
        <div>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="signin-button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInEmail;