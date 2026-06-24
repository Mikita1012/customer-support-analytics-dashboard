// #region constants

import { useEffect, useState } from "react";

// #endregion

// #region functions

// #endregion

/**
 *
 */
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Not able to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return {
    users,
    isLoading, 
    error
  }
};

export default useUsers;
