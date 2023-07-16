/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import  { useState } from 'react';
import { useSingleBookQuery } from "../../Redux/features/allBook/AllBookApi";
import { reviewType } from "../../types/globalTypes";
import { useAppSelector } from "../../Redux/hook";
import {toast} from 'react-toastify'
const DetailsBook = () => {

  const {id} = useParams()

  const [review, setReview] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  // user stage
   const {user} = useAppSelector((state) => state.user);
 const { data, isLoading, error } = useSingleBookQuery(id)
 // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
   const singelBook = data?.data;


  const handleReviewChange = () => {
   setIsEditing(true)
  };

  const handleEdit = () => {
//    setIsEditing(true);
  };

  const handleDelete = (id) => {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if(user?.email !== singelBook?.userEmail){
      return toast.error('you are not the Autho !')
    }
    console.log(id)
    
   
  };

 



  return (
  <div className='w-[100%] h-[auto]  py-[80px] bg-white'>
   <div className=" rounded-lg shadow p-4 ">
      <div className="grid grid-cols-2  justify-between mb-4">
        {/* image section */}
        <div className="flex items-center justify-center">
          <img
            src={singelBook?.bookPhoto}
            alt="Page Image"
            className="w-[80%] h-[70vh] mr-4 "
          />
          
        </div>
         {/* edite delet btn */}
        <div className="block items-start justify-center">
           <div className="flex justify-between">
             <div>
            <h2 className="text-xl font-bold text-[#424242]">{singelBook?.title}</h2>
            <p className="text-gray-500 text-[18px] font-bold">Author : {singelBook?.author}</p>
          </div>
          <div className="vid">
           <Link to={'/edite/1'}>
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleEdit}
          >
            Edit
          </button>
           </Link>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(`${singelBook.id}`)}
          >
            Delete
          </button>
          </div>
           </div>

   <div className="contant">
       <p className="text-gray-500 mt-3 text-[16px] font-bold">Category : {singelBook?.category}</p>
            <p className="text-gray-500 text-[16px] font-bold">Public Date : {singelBook?.publicationDate.slice(0,10)}</p>
            <p className="text-gray-500 text-[16px] font-bold">Language : {singelBook?.language} </p>

            <p className=' pt-2'>Details : {singelBook?.paragrap} </p>
                     <div className="mt-3 text-gray-600 text-sm md:text-base flex justify-between mx-auto pr-2"> 
                                                  <div className="text-[16px] font-semibold text-gray-700 flex"><span className="text-gray-900 font-bold flex gap-1"> <span className="text-[#c01f52] mt-[5px]"> <FaHeart/> </span> {singelBook?.like}k </span>   <span className="pl-1"> person Loved it.</span> </div>
                          <span className="flex text-[#db224aaf] font-bold border-solid border-2 border-sky-500 px-2 py-[2px] cursor-pointer rounded-md"> 
                          <FaHeart className='mt-[5px] mr-1 text-[18px] text-[#db224a9a]'></FaHeart> love </span></div>
          </div>

        </div>
        


      </div>
      {isEditing ? (
        <textarea placeholder=" Write your Reading Experience "
          className="border border-gray-700 rounded w-full mt-10 p-2 mb-4 bg-white text-black"
          value={review}
          onChange={handleReviewChange}
          rows={4}
        />
      ) : (
        <p>{review}</p>
      )}
      <button onClick={handleEdit}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit Review
      </button>


         {/*----------- Review part -----------------*/}
      <div className="review mt-8 w-[70%] p-2">
   
 {
   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
   singelBook?.review?.map((reviw :reviewType ) =>{
    return <div className="flex items-center justify-between mb-4 border-solid border-2 border-[#d8d8d8] py-3 px-5">
        <div className="flex items-center">
          <img
            src="https://yt3.ggpht.com/iPDLH0Snz7SvU8vPn8zxbZa26PzchalOXKdvF3oPbgDYjS16Nk2jZVYX-jTp1phqKv449H-aow=s88-c-k-c0x00ffffff-no-rj"
            alt="User Image"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="text-[16px] font-bold text-[#1986b1]">Mr.Rasel khan</h4>
            <p className="text-md font-bold text-[#1b1b1b]">{reviw?.message}</p>
          </div>
        </div>
      </div>
   })
 }
      
       
       
      </div>


    </div>
</div>
   
  );
};

export default DetailsBook;