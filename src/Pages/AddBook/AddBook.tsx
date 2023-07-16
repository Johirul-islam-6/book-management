import { useForm } from "react-hook-form";
import { IBookList } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";
import { usePostBookMutation } from "../../Redux/features/allBook/AllBookApi";
import { toast } from 'react-toastify';

const AddBook = () => {
  
  const userPhoto = 'https://lh3.googleusercontent.com/ogw/AGvuzYbBTttvoE_lAgzudoREGT6mqnkWhWz8qJFZlm09eg=s32-c-mo'
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBookList>();


 const {user} = useAppSelector((state) => state.user)
 const [postComment, {isLoading, isError}] = usePostBookMutation()

   console.log(isError, isLoading)

   const onSubmit = async (datas :IBookList) => {
    
  const data = {
  genre:   datas?.genre,
  category: datas?.genre,
  paragrap: datas?.paragrap,
  title: datas?.title,
  bookPhoto : datas?.bookPhoto,
  language : datas?.language,
  author: datas?.author,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  year: datas?.publicationDate?.slice(0,4),
  userEmail: user?.email,
  userPhoto:  userPhoto,
  like : "10"
  }
  console.log(data)
   await postComment(data)

    toast.success('A Book create successfully')

  };


    return (
        <>
 <div className="w-[100%] bg-gray-100 py-6 flex flex-col justify-center sm:py-12 mt-8 ">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[100%] mx-auto">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center space-x-5">
          <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Create A Book</h2>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">rasel@gmail.com</p>
          </div>
        </div>
     
        <div 
        className="divide-y divide-gray-200">


  <form  onSubmit={handleSubmit(onSubmit)} className="form py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"> 

   <div className="flex flex-col">
              <label className="leading-loose">Book Title Name</label>
    
             <input
              id="title" 
              placeholder="Book Name"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" 
              {...register('title', { required: 'Book Name is required' })}
            />
            {errors.title && <p>{errors.title.message}</p>}
            
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Book Cover Photo</label>
    
             <input
              id="bookPhoto" 
              placeholder="cover Photo Url"
              type="name"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" 
              {...register('bookPhoto', { required: 'Photo Url is required' })}
            />
            {errors.bookPhoto && <p>{errors.bookPhoto.message}</p>}
            
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Genre</label>
              <input
              id="genre" 
              placeholder="Gener"
              type="name"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" 
              {...register('genre', { required: 'genre  is required' })}
            />
            {errors.genre && <p>{errors.genre.message}</p>}
            
            </div>

            <div className="flex flex-col">
              <label className="leading-loose">Author Name</label>
             
              <input
              id="author" 
              placeholder="author"
              type="name"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" 
              {...register('author', { required: 'author  is required' })}
            />
            {errors.author && <p>{errors.author.message}</p>}
            
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Language</label>
            
            <input
              id="language" 
              placeholder="Language"
              type="name"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" 
              {...register('language', { required: 'Language  is required' })}
            />
            {errors.language && <p>{errors.language.message}</p>}
            
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Publish Date</label>
            
          <input
              id="publicationDate" 
              placeholder="date"
              type="date"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" 
              {...register('publicationDate', { required: 'Date  is required' })}
            />
            {errors.publicationDate && <p>{errors.publicationDate.message}</p>}
          
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Description</label>
             <textarea id="paragrap"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
              {...register('paragrap', { required: 'paragrap  is required' })}
             >
             </textarea>
               {errors.language && <p>{errors.language.message}</p>}
            </div>


         <div className="pt-4 flex items-center space-x-4">
              <Link to={'/'} className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </Link>
                <input  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" type="submit" value="Create"/> 
          </div>

            {/* <div className="inputBox"> 

      

      </div>  */}

     </form> 


         
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default AddBook;