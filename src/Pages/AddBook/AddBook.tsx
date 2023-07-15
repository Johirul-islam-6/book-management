

const AddBook = () => {
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
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">Book Title Name</label>
              <input type="text" className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" placeholder="Book Name"/>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Genre</label>
              <input type="text" className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" placeholder="Genre"/>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Author Name</label>
              <input type="text" className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" placeholder="Author Name"/>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Language</label>
              <input type="text" className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" placeholder="Language"/>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Publish Date</label>
              <input  type="date"  className="px-4 py-3 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-white bg-slate-700 text-[18px]" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Description</label>
             <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
          
            
    


          </div>
          <div className="pt-4 flex items-center space-x-4">
              <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default AddBook;