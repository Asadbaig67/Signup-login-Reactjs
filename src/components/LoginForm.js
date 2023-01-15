import React, { useState } from 'react'
import img4 from './img4.jpg'
export default function LoginForm() {
   const [instate, setinstate] = useState('password');
   const [pass, setpass] = useState('');
   let HandleHide = () => {
      if (instate === 'password') {
         setinstate('text');
      }
      else {
         setinstate('password');
      }
   }
   let HandleChange = (event) => {

      setpass(event.target.value);
   }
   return (
      <div>
         <img src={img4} className="img-fluid" alt="Responsive image" style={{ height: '100vh', width: '100vw', filter: 'blur(2px)', WebkitFilter: 'blur(3px)' }} />
         <div className="container-fluid position-absolute" style={{ top: '30%' }}>
            <div className="container d-flex flex-column justify-content-center align-items-center ">
               <h3 className='fw-lighter fs-3 mb-3' >Have An Account? </h3>
               <input className='rounded-5 text-light py-2 ps-3 pe-5 my-1' type="username" placeholder="Username" style={{ backgroundColor: '#233b49', border: '1px solid #233b49' }} />
               <input className='rounded-5 text-light py-2 ps-3 pe-5 my-1' value={pass} onChange={HandleChange} type={instate} placeholder="Password" style={{ backgroundColor: '#233b49', border: '1px solid #233b49' }} />
               <i className={pass !== '' ? "bi bi-eye-fill" : ''} onClick={HandleHide} style={{ position: 'absolute', top: '112px', left: '860px' }}></i>
               <button type="button" class="btn text-light mt-4  rounded-5" style={{ backgroundColor: '#021929', border: '1px solid #233b49', padding: '5px 70px 5px 70px' }}>SIGN IN</button>
               <a href='/' className='text-light mt-1 text-decoration-none fw-lighter '>Forget Password?</a>
            </div>
         </div>
      </div>
   )
}



