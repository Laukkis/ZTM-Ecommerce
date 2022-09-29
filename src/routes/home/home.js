import { Outlet } from 'react-router-dom'

import Directory from '../../components/directory/directory';

import './home.styles.scss'

const Home = () => {


    return (
        <div className='front-page-container'>
            <div className='front-page'>
                <h1>Summer Get Away Holiday Sales</h1>
                <span>lorem ipsum dolores lorem ipsum</span>
            </div>
            <div className='directory-container-front'>
                <Directory />
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
