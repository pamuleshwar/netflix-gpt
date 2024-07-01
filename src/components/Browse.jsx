import { useNavigate } from "react-router-dom"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Browse = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  //sign-out function
  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  }


  return (
    <div className="">
      <div className="flex justify-between">
        <div className="">
        <Header />
        </div>

        <div className="flex z-50 my-2 py-1 pr-3">
          {user?.photoURL ? <img src={user?.photoURL} alt="profile-image" className="w-9 h-9 mx-2 my-auto rounded-full" /> : <img src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp" alt="profile-image" className="w-9 h-9 mx-2 my-auto rounded-full" />}
          <button onClick={handleSignOut} className="p-2 rounded-2xl bg-red-400">Sign-out</button>
        </div>
      </div>
    </div>
  )
}

export default Browse