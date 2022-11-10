import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import userAvatar from '../../Assets/user.png'
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthenticationContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <div className='logo py-4 d-flex align-items-center'>
                        <Link to='/home'><img src={logo} alt="" /></Link>
                        <h3 className='logo-text'> Organic Food Cloud</h3>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto align-items-center justify-content-between" >
                            <div className='nav-container'>
                                <p className='m-0'><Link to='/home'>Home</Link></p>
                                <p className='m-0'><Link to='/services'>Services</Link></p>
                                {
                                    user?.email && user.uid ?
                                        <>
                                            <p className='m-0'><Link to='/review'>MyReviews</Link></p>
                                            <p className='m-0'><Link to='/addservice'>AddService</Link></p>
                                        </>
                                        :
                                        <>
                                            
                                            <p className='m-0'><Link to='/login'>Login</Link></p>
                                            <p className='m-0'><Link to='/register'>Register</Link></p>
                                        </>
                                }
                                <p className='m-0'><Link to='/blog'>Blog</Link></p>
                            </div>
                            {
                                user && user.uid ?
                                    <>
                                        <div className="user mx-4 my-2">
                                            {
                                                user && user.photoURL ? <><img src={user.photoURL} alt="" /></> : <><img src={userAvatar} alt="" /></>
                                            }
                                            <button className='logout-btn mx-2' onClick={logOut}>LogOut <FaSignOutAlt></FaSignOutAlt></button>
                                        </div>
                                    </> :
                                    <>

                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;