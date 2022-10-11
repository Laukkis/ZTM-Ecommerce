import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon.js/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './navigation.styles.scss'

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
                    ) : (<Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
