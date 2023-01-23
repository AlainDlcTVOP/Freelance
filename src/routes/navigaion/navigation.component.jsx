import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Fragment } from 'react';
const Navagation = () => {
    return (
    <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-link-container'></div>
                <Link className='nav-link' to={'/shop'}>
                    SHOP
                </Link>
                <Link className='nav-link' to={'/signin'}>
                    SIGN IN
                </Link>
        </div>
        <Outlet />
    </Fragment>
    )
};
  
export default Navagation;