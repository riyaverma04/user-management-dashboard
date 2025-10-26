import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper,  Box } from "@mui/material";
import "../styles/addUser.scss";

export default function AddUserPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
 const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //validating form 
  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!form.company.trim()) newErrors.company = "Company name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const { name, email, phone, company } = form;
    if (!name || !email || !phone || !company) {
      alert("Please fill all fields");
      return;
    }

    const newUser = { ...form, id: Date.now(), company: { name: form.company } };
    const existing = JSON.parse(localStorage.getItem("addedUsers")) || [];
    localStorage.setItem("addedUsers", JSON.stringify([...existing, newUser]));
    navigate("/");
  };

  return (
    <Box className="add-user-container">
      <Paper elevation={3} className="add-user-paper">
        <p className="add-user-title">
          Add New User
        </p>

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
      </Paper>
    </Box>
  );
}
