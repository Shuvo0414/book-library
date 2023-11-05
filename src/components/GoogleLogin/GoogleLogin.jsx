import { useContext } from "react";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  //   console.log(name);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("User login successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Invailed User");
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around items-center">
        <button
          onClick={handleLogin}
          className="btn btn-sm bg-[#29307d] text-white hover:bg-[#444db5]"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default GoogleLogin;
