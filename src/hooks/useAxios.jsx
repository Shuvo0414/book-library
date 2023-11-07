import axios from "axios";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const instance = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error track in the interceptors", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logOut, navigate]);

  return instance;
};

export default useAxios;
