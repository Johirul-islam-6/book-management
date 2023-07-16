/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import {  loginUser } from '../../Redux/features/user/userSlice';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


interface loginFormInputs {
  // name ?: string;
  email: string;
  password: string;
}

const Login = () => {


    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormInputs>();

  const dispatch = useAppDispatch()

  const {user, isLoading} = useAppSelector((state) => state.user);

  const navigate = useNavigate()

   const onSubmit = (data: loginFormInputs) => {
    
     void dispatch(loginUser({email : data.email, password: data.password}))
     toast.success('user successfully login')
  };

  useEffect(() =>{
    if(user.email){
        navigate('/')
    }
  } ,[user.email, isLoading])


    return (
        <>
    <div className="loginBody">
    <section> 
    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
   <div className="signin"> 

    <div className="content"> 

     <h2>Sign In</h2> 

     <form className="form" onSubmit={handleSubmit(onSubmit)}> 

   

      <div className="inputBox"> 

     
       <input
              id="email"
              placeholder=""
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            /><i>UserEmail</i> 
            {errors.email && <p>{errors.email.message}</p>}
      </div> 

      <div className="inputBox"> 

  
       <input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })}
            /> <i>Password</i>
            {errors.password && <p>{errors.password.message}</p>}

      </div> 

      <div className="links"> <a href="#">Forgot Password</a> <Link to={'/login'} >login</Link> 

      </div> 

      <div className="inputBox"> 

       <input type="submit" value="Submit"/> 

      </div> 

     </form> 

    </div> 

    </div> 

     </section> 
    </div>

        </>
    );
};

export default Login;