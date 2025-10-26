import React from 'react'
import { TextField, Button, Paper,  Box } from "@mui/material";

const UserForm = ({handleSubmit,form,errors,handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className="add-user-form">
          <TextField
            name="name"
            label="Full Name"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <TextField
            name="phone"
            label="Phone Number"
            type="tel"
            variant="outlined"
            value={form.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
          />
          <TextField
            name="company"
            label="Company Name"
            variant="outlined"
            value={form.company}
            onChange={handleChange}
            error={!!errors.company}
            helperText={errors.company}
            fullWidth
          />

          <Button
            variant="contained"
            color="success"
            type="submit"
            size="large"
            className="submit-btn"
          >
            Add User
          </Button>
        </form>
  )
}

export default UserForm
