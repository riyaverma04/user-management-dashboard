
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById } from "../Api.jsx";

 const UserDetailPage=()=> {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(id).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>← Back</button>
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
