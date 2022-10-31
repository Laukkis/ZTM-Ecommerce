import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInEmail from '../../components/sign-in/sign-in';

import './authentication.styles.scss'

const Authentication = () => {


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div className='authentication-container'>
            <div className='sign-in-container'> <SignInEmail logGoogleUser={logGoogleUser} /></div>
            <SignUpForm />
        </div>
    )
}

export default Authentication