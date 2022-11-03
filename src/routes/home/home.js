import { Outlet } from 'react-router-dom';

import Button from '../../components/button/button';

import Directory from '../../components/directory/directory';
import mainImage from '../../assets/image_frontpage.png';
import shippingIcon from '../../assets/1.png';
import supportIcon from '../../assets/2.png';
import returnIcon from '../../assets/3.png'

import './home.styles.scss'

const Home = () => {

    return (
        <div className='front-page-container'>
            <div className='front-container'>
                <div className='front-page'>
                    <div className='front-page-text'>
                        <h1>Every Purchase <br /> Will Be Made <br /><span style={{ color: "#FC195A" }}>With Pleasure</span></h1>
                        <span>Start shopping in the world's best online store</span>
                        <div className='front-page-button'>
                            <Button>Shop now</Button>
                        </div>
                    </div>
                    <div className='front-page-img'>
                        <img src={mainImage} alt="lady holding bags" />
                    </div>
                </div>

            </div>

            <div className='front-page-info'>
                <div className='icon-container'>
                    <h2>Free shipping</h2>
                    <img className='front-page-icon' src={shippingIcon} alt='shipping icon' />
                </div>
                <div className='icon-container'>
                    <h2>24/7 support</h2>
                    <img className='front-page-icon' src={supportIcon} alt='support icon' />
                </div>
                <div className='icon-container'>
                    <h2>Easy return</h2>
                    <img className='front-page-icon' src={returnIcon} alt='return icon' />
                </div>
            </div>
            <div className='directory-container-front'>
                <Directory />
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
