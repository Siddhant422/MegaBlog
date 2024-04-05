import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { LogOut } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    authService.logout().then(() => {
      dispatch(LogOut());
    });
  };
  return (
    <div>
      <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={LogoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
