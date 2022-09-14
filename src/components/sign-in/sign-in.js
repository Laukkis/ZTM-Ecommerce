import { useState } from "react";
import { signInAuthWithEmailAndPaswword } from "../../utils/firebase/firebase.utils";


import Button from '../button/button'
import FormInput from "../form-input/form-input"
import './sign-in.styles.scss'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInEmail = ({ logGoogleUser }) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormfields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthWithEmailAndPaswword(email, password);
            resetFormfields();
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
                    <Button type="submit">SignIn</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser}>SignIn with Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInEmail;