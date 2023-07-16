/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import { createUser } from '../../Redux/features/user/userSlice';
import { useAppDispatch } from '../../Redux/hook';


interface SignupFormInputs {
  // name ?: string;
  email: string;
  password: string;
}

const Registration = ()  => {
 
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch()


   const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
    void dispatch(createUser({email : data.email, password: data.password}))
    navigate('/')
  };



    return (
        <>
     <div className="loginBody z-50">
       <section> 
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
      <div className="signin"> 

    <div className="content"> 

     <h2>Registration In</h2> 

     <form className="form" onSubmit={handleSubmit(onSubmit)}> 

      {/* <div className="inputBox"> 

      
           <input
              id="name"
              placeholder="your name"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              {...register('name', { required: 'Name is required' })}
            /><i>Username</i> 
            {errors.name && <p>{errors.name.message}</p>}
      </div>  */}

      <div className="inputBox"> 

     
       <input
              id="email"
              placeholder="name@example.com"
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

export default Registration;