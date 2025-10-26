import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Paper } from "@mui/material";
import "../styles/addUser.scss";
import UserForm from "../components/UserForm";

export default function AddUserPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", 
    email: "", 
    phone: "", 
    company: "" });
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
    <div className="add-user-container">
      <Paper elevation={3} className="add-user-paper">
        <p className="add-user-title">
          Add New User
        </p>

        <UserForm handleSubmit={handleSubmit}  form={form} errors={errors} handleChange={handleChange} />
      </Paper>
    </div>
  );
}
