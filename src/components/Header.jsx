const Header = () => {
  return (
    <div className="w-[100%] h-24 bg-gradient-to-b from-black flex justify-between bg-transparent absolute z-10">
      <div>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" className="h-12 ml-3 my-auto"/>
      </div>

      {/* <div className="h-12 flex mr-4 my-auto">
        <div className="border rounded-md text-2xl mr-3 px-3 py-2 font-bold text-white bg-gray-500">English</div>
        <div className="text-2xl font-bold px-3 py-2 rounded-md bg-red-500 text-white">
          Sign In
        </div>
      </div> */}
    </div>
  )
}

export default Header;