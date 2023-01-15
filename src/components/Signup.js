import React, { useState } from 'react'
import img4 from './img4.jpg'
import {
    Link
} from "react-router-dom";
export default function Signup() {

    const [instate, setinstate] = useState('password');
    const [incstate, setincstate] = useState('password');
    const [passtext, setpasstext] = useState('');
    const [Cpasstext, setCpasstext] = useState('');
    let HandlePHide = () => {
        if (instate === 'password') {
            setinstate('text');
        }
        else {
            setinstate('password');
        }
    }
    let HandleCHide = () => {
        if (incstate === 'password') {
            setincstate('text');
        }
        else {
            setincstate('password');
        }
    }
    if(passtext===''){

    }
    let HandlePass = (p) => {
        setpasstext(p.target.value);
    }
    let HandleCPass = (p) => {
        setCpasstext(p.target.value);

    }
    return (
        <div>
            <img src={img4} className="img-fluid" alt="Responsive image" style={{ height: '100vh', width: '100vw', filter: 'blur(2px)', WebkitFilter: 'blur(3px)' }} />
            <div className="container-fluid position-absolute" style={{ top: '20%' }}>
                <div className="container d-flex flex-column justify-content-center align-items-center ">
                    <h3 className='fw-lighter fs-3 mb-3' >Sign Up -Its Free!</h3>
                    <input className='rounded-5 text-light  my-1' type="firstname" placeholder="First Name" style={{ backgroundColor: '#233b49', border: '1px solid #233b49', padding: '10px 200px 10px 15px' }} />
                    <input className='rounded-5 text-light  my-1' type="lastname" placeholder="Last Name" style={{ backgroundColor: '#233b49', border: '1px solid #233b49', padding: '10px 200px 10px 15px' }} />
                    <input className='rounded-5 text-light  my-1' type="email" placeholder="Email" style={{ backgroundColor: '#233b49', border: '1px solid #233b49', padding: '10px 200px 10px 15px' }} />
                    <input className='rounded-5 text-light  my-1' type={instate} value={passtext} onChange={HandlePass} placeholder="Password" style={{ backgroundColor: '#233b49', border: '1px solid #233b49', padding: '10px 200px 10px 15px' }} />
                    <i className={passtext!==''?'bi bi-eye-fill':''} onClick={HandlePHide} style={{ position: 'absolute', top: '225px', left: '930px' }}></i>
                    <input className='rounded-5 text-light  my-1' type={incstate} value={Cpasstext} onChange={HandleCPass} placeholder="Confirm Password" style={{ backgroundColor: '#233b49', border: '1px solid #233b49', padding: '10px 200px 10px 15px' }} />
                    <i className={Cpasstext!==''?'bi bi-eye-fill':''} onClick={HandleCHide} style={{ position: 'absolute', top: '280px', left: '930px' }}></i>
                    <button type="button" class="btn text-light mt-4  rounded-5" style={{ backgroundColor: '#021929', border: '1px solid #233b49', padding: '5px 70px 5px 70px' }}>SIGN UP</button>
                    <p className='fw-light text-light fs-6 mt-3'>Already have an account? <Link className="text-light fw-bold text-uppercase text-decoration-none" to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}
