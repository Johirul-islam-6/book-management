import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import  { useState } from 'react';

const DetailsBook = () => {
  const [review, setReview] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleReviewChange = () => {
   setIsEditing(true)
  };

  const handleEdit = () => {
//    setIsEditing(true);
  };

  const handleDelete = () => {
    // Handle delete functionality here
  };

  return (
  <div className='w-[100%] h-[auto]  py-[80px] bg-white'>
   <div className=" rounded-lg shadow p-4 ">
      <div className="grid grid-cols-2  justify-between mb-4">
        {/* image section */}
        <div className="flex items-center">
          <img
            src="https://curated-unify.zendy.io/wp-content/uploads/2022/10/planet-orbits.webp"
            alt="Page Image"
            className="w-[100%] h-[70vh] mr-4"
          />
          
        </div>
         {/* edite delet btn */}
        <div className="block items-start justify-center">
           <div className="flex justify-between">
             <div>
            <h2 className="text-xl font-bold text-[#424242]">Planets orbiting other stars</h2>
            <p className="text-gray-500 text-[18px] font-bold">Author : mr rasel khan</p>
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
            onClick={handleDelete}
          >
            Delete
          </button>
          </div>
           </div>

   <div className="contant">
       <p className="text-gray-500 mt-3 text-[16px] font-bold">Category : Love Story</p>
            <p className="text-gray-500 text-[16px] font-bold">Public Date : 10/02/2023</p>
            <p className="text-gray-500 text-[16px] font-bold">Language : English </p>

            <p className=' pt-6'> Details  Story : Lorem ipsum dolor sit amet us quisquam. Incidunt animi unde quaerat necessitatibus explicabo iusto laudantium. Modi, deserunt perspiciatis delectus omnis earum pariatur quasi commodi sint architecto dignissimos illum saepe sapiente, fugit quam ullam, aperiam doloremque alias ut quas quae fuga quia tempora. Reprehenderit rerum nihil magnam tenetur vel voluptatibus modi accusantium velit dolores qui officiis, provident rem quo laborum dolor nobis eaque doloribus obcaecati quia nostrum minima, consequuntur voluptas asperiores consectetur? A similique suscipit quos esse distinctio nihil eaque repudiandae minus at quo facilis ea beatae deserunt aspernatur ipsa sit consequuntur consectetur rerum iure repellendus et sint, officiis eum. Temporibus, nam repudiandae exercitationem molestias assumenda sapiente nesciunt quo consequuntur, ut eveniet accusamus officia! Ea sapiente nam incidunt consequatur, voluptates molestias hic? Consequuntur voluptas recusandae fugit maiores inventtaque officiis distinctio accusantium!</p>
                     <div className="mt-3 text-gray-600 text-sm md:text-base flex justify-between mx-auto pr-2"> 
                                                  <div className="text-[16px] font-semibold text-gray-700 flex"><span className="text-gray-900 font-bold flex gap-1"> <span className="text-[#c01f52] mt-[5px]"> <FaHeart/> </span> 17k </span>   <span className="pl-1"> person Loved it.</span> </div>
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

        <div className="flex items-center justify-between mb-4 border-solid border-2 border-[#d8d8d8] py-3 px-5">
        <div className="flex items-center">
          <img
            src="https://yt3.ggpht.com/iPDLH0Snz7SvU8vPn8zxbZa26PzchalOXKdvF3oPbgDYjS16Nk2jZVYX-jTp1phqKv449H-aow=s88-c-k-c0x00ffffff-no-rj"
            alt="User Image"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="text-[16px] font-bold text-[#1986b1]">Mr.Rasel khan</h4>
            <p className="text-md font-bold">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut?</p>
          </div>
        </div>
      </div>
        <div className="flex items-center justify-between mb-4 border-solid border-2 border-[#d8d8d8] py-3 px-5">
        <div className="flex items-center">
          <img
            src="https://yt3.ggpht.com/iPDLH0Snz7SvU8vPn8zxbZa26PzchalOXKdvF3oPbgDYjS16Nk2jZVYX-jTp1phqKv449H-aow=s88-c-k-c0x00ffffff-no-rj"
            alt="User Image"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="text-[16px] font-bold text-[#1986b1]">Mr.Rasel khan</h4>
            <p className="text-md font-bold">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut?</p>
          </div>
        </div>
      </div>
        <div className="flex items-center justify-between mb-4 border-solid border-2 border-[#d8d8d8] py-3 px-5">
        <div className="flex items-center">
          <img
            src="https://yt3.ggpht.com/iPDLH0Snz7SvU8vPn8zxbZa26PzchalOXKdvF3oPbgDYjS16Nk2jZVYX-jTp1phqKv449H-aow=s88-c-k-c0x00ffffff-no-rj"
            alt="User Image"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="text-[16px] font-bold text-[#1986b1]">Mr.Rasel khan</h4>
            <p className="text-md font-bold">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut?</p>
          </div>
        </div>
      </div>
       
      </div>


    </div>
</div>
   
  );
};

export default DetailsBook;