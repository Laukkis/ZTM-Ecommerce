import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';


import Button from '../../components/button/button'
import FavoritesPreview from '../../components/favorites-preview/favorites-preview';

import './profile.styles.scss'

const Profile = () => {
    const currentUser = useSelector(selectCurrentUser);

    const navigate = useNavigate();

    const signOutHandler = () => {
        signOutUser()
        navigate('/')
    }


    return (
        <>
            <div className='profile-page-container'>
                <div className='column'>
                    <form>
                        <h2>My account</h2>
                        <p>{currentUser.displayName}</p>
                        <p>{currentUser.email}</p>
                        <span>Edit your account</span>
                    </form>
                </div>
                <div className='column'>
                    <h2>My orders</h2>
                    <p>No orders</p>
                </div>
                <div className='column'>
                    <FavoritesPreview />
                </div>
            </div>
            <div className='button-container-profile'>
                <Button type="button" buttonType='' onClick={signOutHandler}> SIGN OUT</Button>
            </div>
        </>
    )
}

export default Profile;