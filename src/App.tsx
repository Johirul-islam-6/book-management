import { onAuthStateChanged } from "firebase/auth";
import MainLayOut from "./Layout/MainLayOut";
import { setLoding, setUser } from "./Redux/features/user/userSlice";
import { useAppDispatch } from "./Redux/hook";
import { auth } from "./lib/firebase";
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";


const App = () => {


    const dispatch = useAppDispatch()

  useEffect( () =>{
      dispatch(setLoding(true));

      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email))
          dispatch(setLoding(false));

         } else{
          dispatch(setLoding(false));
         }
      });

  } , [dispatch])




  return (
    <>
  <ToastContainer className='mt-20'
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
 />
 
       <MainLayOut />
    </>
  );
};

export default App;