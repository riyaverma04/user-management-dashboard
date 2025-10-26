import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/userCard.scss'

const UserCard = ({ loading, filtered}) => {
  return (
    <div className='user-card-container'>
    {loading ? <p className='loading-user'>Loading users...</p> : 
    <div  className="user-card-heading">
            <h3>Name</h3>
            <p>email</p>
            <p>phone no.</p>
            <p>comapany</p>
            
          </div>
          }
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
  )
}

export default UserCard
