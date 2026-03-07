

export default function CreateTicket() {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-4 py-16">

        {/* Heading Row */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">
            Support Portal
          </h1>

          <button className="bg-blue-500 text-white px-5 py-2 rounded-md text-lg hover:bg-gray-700">
            My tickets
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white border rounded-md flex items-center px-4 py-3 shadow-sm">

           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400 mr-3">
             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
           </svg>
          
          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            className="w-full outline-none text-gray-700"
          />
        </div>
      </div>
    </section>
  );
}

