import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await axios.post("/api/auth/register", credentials);
            console.log("Registration successful:", res.data);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="register">
            <div className="rContainer">
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    className="rInput"
                />
                <button onClick={handleClick} className="rButton">
                    Register
                </button>
                {error && <span className="rError">{error.message}</span>}
            </div>
        </div>
    );
};

export default Register;
