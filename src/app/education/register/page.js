"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../../styles/education.css";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");

// validation functions
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    // Indian 10-digit mobile number validation
    /^[6-9]\d{9}$/.test(phone);  

  const handleRegister = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      alert("⚠️ Please enter your full name");
      return;
    }

    if (!trimmedEmail) {
      alert("⚠️ Please enter your email address");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      alert("❌ Please enter a valid email address");
      return;
    }

    if (!trimmedPhone) {
      alert("⚠️ Please enter your phone number");
      return;
    }

    if (!isValidPhone(trimmedPhone)) {
      alert("❌ Please enter a valid 10-digit phone number");
      return;
    }

    const userData = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      organization: organization.trim(),
      role: role.trim(),
      gender,
    };

    localStorage.setItem("edu_user", JSON.stringify(userData));
    alert("✅ Registration successful!");
    router.push("/education");
  };

  return (
    <section className="edu-container">
      <div className="register-box">
        <h2>🎓 Register to Start Learning</h2>

        <input
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Phone Number *"
          type="tel"
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder="Organization / Company"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />

        <input
          placeholder="Role / Designation"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button onClick={handleRegister}>
          Start Module
        </button>
      </div>
    </section>
  );
}