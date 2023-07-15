import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import DetailsBook from '../Pages/DetailsBook/DetailsBook';
import Login from '../Pages/Registration/Login';
import Registration from '../Pages/Registration/Registration';
import AddBook from '../Pages/AddBook/AddBook';
import EditeBook from '../Pages/EditeBook/EditeBook';



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
     {
       path : '/add-book',
        element : <AddBook/>
     },
     {
       path : '/edite/1',
        element : <EditeBook/>
     },
     {
       path : '/login',
        element : <Login/>
     },
     {
       path : '/registration',
        element : <Registration/>
     },
      
    
    ],
  },
  
  
]);

export default routes;
