import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import DetailsBook from '../Pages/DetailsBook/DetailsBook';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
     {
        index: true,
        element : <Home/>
     },
     {
       path : 'details/:id',
        element : <DetailsBook/>
     },
      
    
    ],
  },
  
  
]);

export default routes;
