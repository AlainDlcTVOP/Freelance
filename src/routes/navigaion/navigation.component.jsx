import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebas.utils';
const Navagation = () => {
    const { currentUser,setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        console.log("resert context",signOutHandler);
        setCurrentUser(null);
    };

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
                {
                    currentUser ? (
                        <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>)
                        : (
                            <Link className='nav-link' to={'/auth'}>
                            SIGN IN
                            </Link>
                        )        
                }
        </div>
        <Outlet />
    </Fragment>
    )
};
  
export default Navagation;