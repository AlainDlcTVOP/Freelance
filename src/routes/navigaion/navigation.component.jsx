import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
const Navagation = () => {
    const { currentUser } = useContext(UserContext);
    console.log("navcomponent",currentUser);
    return (
    <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'></div>
                <Link className='nav-link' to={'/shop'}>
                    SHOP
                </Link>
                <Link className='nav-link' to={'/auth'}>
                    SIGN IN
                </Link>
        </div>
        <Outlet />
    </Fragment>
    )
};
  
export default Navagation;