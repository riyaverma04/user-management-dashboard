import React from 'react'
import { useState,useEffect } from 'react'
import { fetchUsers } from '../Api.jsx'
import { Link } from "react-router-dom";
import '../styles/home.scss'
import SearchBar from '../components/SearchBar.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UserCard from '../components/UserCard.jsx';

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
      <div className="home-search-adduser-container">
        
        <SearchBar search={search} setSearch={setSearch}/>
         <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" component={Link}       
        to="/add-user"  >
          Add User
      </Button>

         </Stack>
      
     

      </div>
      

      <div className="user-list">
        <UserCard loading={loading} filtered={filtered}/>
        
      </div>
    </div>
    
  )
}

export default HomePage
