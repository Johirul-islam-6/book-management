import './AllBook.css'
import BookCard from './BookCard';

const AllBook = () => {
    return (
        <>
        <div className="w-[100%] h-[auto] bg-white px-5 py-16">
             {/* display show all book information */}
            <div className="grid w-[80%] mx-auto py-9 border-solid border-2 border-[#dad7d7] rounded-lg grid-cols-1  md:divide-x-2 md:divide-y-0 divide-y-2 md:grid-cols-4 gap-2 justify-center items-center bg-white card-main-box">
             <div  className="flex justify-center items-center">
             <div className="block">
                <p className="text-[40px]  text-[#F4B223] font-extrabold">31.2m</p>
                <p className='text-[20px] text-center'>Publications</p>
             </div>
             </div>
             <div  className="flex justify-center items-center">
             <div className="block">
                <p className="text-[40px]  text-[#25C3C3] font-extrabold">26.4m</p>
                <p className='text-[20px] text-center'>Academic Articles</p>
             </div>
             </div>
             <div  className="flex justify-center items-center">
             <div className="block">
                <p className="text-[40px]  text-[#0F8ED5] font-extrabold">1.2m</p>
                <p className='text-[20px] text-center'>Books</p>
             </div>
             </div>
             <div  className="flex justify-center items-center">
             <div className="block">
                <p className="text-[40px]  text-[#F0976C] font-extrabold">66+</p>
                <p className='text-[20px] text-center'>Languages</p>
             </div>
             </div>
            </div>

          {/* Display card decortion title */}
                <div className="div py-7 flex justify-center ">
                      <div className="block pt-7">
                        <p className='text-[35px] text-center'> Discover with History</p>
                        <p className='text-[25px] text-center'>Browse our collection of Articles</p>
                      </div>
                </div>

                 <div className="container flex justify-center ">
                       <BookCard/>
                 </div>
  


        </div>

        </>
    );
};

export default AllBook;