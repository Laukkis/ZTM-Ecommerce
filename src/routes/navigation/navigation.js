import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
                    ) : (<Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    )}

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
