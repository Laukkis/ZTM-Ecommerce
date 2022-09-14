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

    /* useEffect(
        () => async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        },
        []
    ); */

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div className='authentication-container'>
            <SignInEmail logGoogleUser={logGoogleUser} />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button> */}
        </div>
    )
}

export default Authentication