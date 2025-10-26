
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById } from "../Api.jsx";
import '../styles/userDetail.scss';
import { Button } from "@mui/material";
import { getUserFromLocalStorage } from "../utils/userFromLocalStorage.jsx";

 const UserDetailPage=()=> {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUserById(id).then(res => setUser(res.data));
//   }, [id]);

useEffect(() => {
    // Check localStorage first
    const localUser = getUserFromLocalStorage(id);
    if (localUser) {
      setUser(localUser);
    } else {
      // If not found in localStorage, fetch from API
      fetchUserById(id).then((res) => setUser(res.data));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-detail-container">
         <Button
            variant="contained"
            color="success"
           
            size="large"
            className="btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>
      
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>
      <p>Website: {user.website}</p>
      <p>Address: {user.address?.city}</p>
    </div>
  );
    }


    export default UserDetailPage;
