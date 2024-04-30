export default function Nav() {
  return (
    <header className="w-full h-16 flex border-solid border-gray-500 shadow-md">
      <nav className=" w-5/6 mx-auto flex gap-x-8 justify-between items-center text-white  ">
        <img className="w-14 h-14" src="/images/logo.png " alt="Logo" />

        <form
          className="flex-grow sm:max-w-96 max-w-56 flex items-center text-xs md:text-base lg:text-lg"
          style={{
            background:
              "transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") no-repeat 10px center",
          }}
        >
          <input
            className="h-10 flex-grow w-0 md:h-12 border border-r-0 rounded-l-md block pl-10 bg-transparent text-black"
            type="search"
            placeholder="Enter keyword..."
            name="keyword"
          />
          <button
            type="submit"
            className="bg-gray-700 text-white  border-gray-500  h-10 md:h-12 border-l-0 border-r rounded-r-md px-1 hover:bg-gray-900"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}
