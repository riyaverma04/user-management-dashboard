import React from 'react'
import { useState,useEffect } from 'react'
import { fetchUsers } from '../Api.jsx'
import { Link } from "react-router-dom";
import '../styles/home.scss'

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchUsers().then(res=>{
        //getting the user from local storage if any added
        const localUsers = JSON.parse(localStorage.getItem("addedUsers")) || [];
        setUsers([...res.data , ...localUsers]);
        setLoading(false);

    })
    // fetchUsers().then(res => {
    //   
    //   setUsers([...res.data, ...localUsers]);
    //   setFiltered([...res.data, ...localUsers]);
    // });
  }, []);

  useEffect(() => {
    const result = users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, users]);
  return (
   
      

  
    <div className="container">
      {/* <h2>User Management Dashboard</h2> */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Link to="/add-user">+ Add User</Link>

      <div className="user-list">
        {loading ? <p className='loading-user'>Loading users...</p> : null}
        {filtered.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company?.name}</p>
            <Link to={`/user/${user.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default HomePage
