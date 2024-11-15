
import "./button2.css";
import React, { useState } from "react";

const useUserForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        callback(formData);
    };

    return {
        formData,
        handleInputChange,
        handleSubmit,
    };
};


export const UserForm = () => {
    const { formData, handleInputChange, handleSubmit } = useUserForm({
        username: "",
        password: "",
    });

    const saveNewUserData = (data) => {
        console.log("Yangi foydalanuvchi maʼlumotlari:", data);
    };

    return (
        <form onSubmit={handleSubmit(saveNewUserData)}>
            <input
                type="text"
                name="username"
                placeholder="Foydalanuvchi nomi"
                value={formData.username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Parol"
                value={formData.password}
                onChange={handleInputChange}
            />
            <button className="blue" type="submit">
                Yuborish
            </button>
        </form>
    );
};

export default UserForm;
