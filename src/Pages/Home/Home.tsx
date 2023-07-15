import AllBook from '../../Components/AllBookLisht/AllBook';
import BookCard from '../../Components/AllBookLisht/BookCard';
import './Home.css'

const Home = () => {
    return (
        <>
     <div className="div w-[100%] h-[90vh] flex home_banner justify-center">
      <div className="center-div w-[100%] justify-center flex items-center">
    
    <div className="max-w-xl w-[100%] mx-3 md:mx-0">
      <div className="flex space-x-1 items-center justify-center mb-2">
       
        <p className="text-white text-[30px] md:text-[55px] font-bold pb-3 text-center">Your Online Library</p>
      </div>
      <div className="flex ">

          <input placeholder='| Serching...' type="text" className="w-[100%] bg-white rounded-md rounded-r-none px-6 text-black" />
          <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>

      
      </div>
    </div>
  
      </div>
     </div>

     <AllBook/>

        </>
    );
};

export default Home;