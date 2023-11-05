import { Link, Navigate } from "react-router-dom";
import loginImage from "../../assets/login.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Login = () => {
  const [showPassword, setPassword] = useState(false);
  const { singIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    singIn(email, password)
      .then(() => {
        toast.success("User login successfully");
        Navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Passwords do not match");
      });
  };
  return (
    <div>
      <div className=" min-h-screen">
        <h1 className="text-2xl md:text-5xl font-semibold text-center mt-10 md:mt-24">
          Please Login Your Account
        </h1>
        <div className="hero-content flex-col md:flex-row mx-auto">
          <div className="hidden md:block w-full md:w-[520px]">
            <img src={loginImage} alt="Login" className="w-full" />
          </div>

          <div className="card w-full max-w-md shadow-md bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered focus:outline-none focus:border-[#0B99FF]"
                />
                <span
                  className=" absolute top-[50px] left-[290px] lg:top-[50px] lg:left-[360px] text-xl"
                  onClick={() => setPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye></AiOutlineEye>
                  )}
                </span>
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn text-white bg-[#29307d] hover:bg-[#444db5] w-full">
                  Login
                </button>
              </div>
              <label className="label mt-4">
                New here?
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
            </form>
            <div className="mb-5">
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
