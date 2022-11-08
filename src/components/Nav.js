import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
const Nav= ()=>{
    const auth= localStorage.getItem("user");
    const navigate=useNavigate();
    const logout = ()=>{
        localStorage.removeItem('user');
        navigate("/login");
    }
    useEffect(() => {
        if(!auth){
            navigate('/login')
        }
    }, [])
    return (
        <div>
            {
             auth ? <ul className='Nav-ul'>
                <li><Link to="/">Products</Link> </li>
                <li><Link to="/add">Add Product</Link> </li>
                {/* <li><Link to="/update">Update Product</Link> </li> */}
                {/* <li><Link to="/delete">Delete Product</Link> </li> */}
                <li><Link to="/profile">Profile</Link> </li>
                <li><Link onClick={logout} to="/signup">Logout</Link></li>
                
                {/* <li>{auth ? <Link onClick={logout} to="/logout">Logout</Link>  : <Link to="/signup">Register</Link>}</li> */}
                {/* {
                   
                    : <>
                    <li><Link to="/signup">Register</Link></li>
                    <li><Link to="/login">Login</Link> </li>
                    </>
                } */}

            </ul>
             :
             <ul className='Nav-ul'>
                 <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link> </li>
             </ul>

            }
        </div>
    )
}
export default Nav;