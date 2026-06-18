import { useEffect, useState } from "react";
import {useNavigate} from 'react-router'

function UsersList() {
  let [users, setUsers] = useState([]);
  let navigate=useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("https://user-management-0vxc.onrender.com/user-api/users", {
          method: "GET",
        });

        if (res.status === 200) {
          //extract json data
          let resObj = await res.json();
          //update the state
          setUsers(resObj.payload);
        } else {
        }
      } catch (err) {
        //set error
      }
    }

    getUsers();
  }, []);


  //go to user
  const gotoUser=(userObj)=>{
    navigate("/user",{state:{user:userObj}})
  }

  return (
      <div>
          <h1 className="text-5xl text-gray-600 mb-6">List of Users</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {users?.map((userObj) => (
              <div
                key={userObj.email}
                className="p-6 shadow-2xl rounded-lg cursor-pointer break-words overflow-hidden"
                onClick={() => gotoUser(userObj)}
              >
                <p className="text-xl font-semibold">{userObj.name}</p>
                <p className="text-lg text-gray-600 break-all">{userObj.email}</p>
              </div>
            ))}
          </div>
        </div>
  );
}

export default UsersList;