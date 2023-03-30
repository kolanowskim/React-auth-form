import { useState, useEffect } from "react";

type UserAuth = {
  statusCode: number;
  user: {
    id: number;
    email: string;
  };
};

const useAuthUser = () => {
  const [authUser, setAuthUser] = useState<UserAuth>();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URI}/checkUser`,
        {
          method: "GET",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setAuthUser(json);
    } catch (e) {
      console.log(e);
      setAuthUser({
        statusCode: 500,
        user: {
          id: 0,
          email: "",
        },
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { authUser };
};

export default useAuthUser;
