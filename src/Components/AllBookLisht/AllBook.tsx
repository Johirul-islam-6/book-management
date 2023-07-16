import { useGetAllBooksQuery } from '../../Redux/features/allBook/AllBookApi';
import { IBookList } from '../../types/globalTypes';
import './AllBook.css'
import BookCard from './BookCard';

const AllBook = () => {


    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {data, isLoading, error } = useGetAllBooksQuery(undefined);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const allBookList  = data?.data

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
                  <div className="grid gap-3  grid-cols-1 md:grid-cols-2 items-center justify-center ">
                     {
                       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                       allBookList?.map((item : IBookList) => {
                       return <BookCard key={item.id} book={item} />;
                      })
                     }
                      
                    
                 </div>
                 </div>
  


        </div>

        </>
    );
};

export default AllBook;