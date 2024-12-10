import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/auth/forgot-password", { email });
            setMessage("If this email is registered, you will receive a password reset link.");
            setError("");
        } catch (err) {
            console.error("Error during Forgot Password request:", err.response ? err.response.data : err);
            setError(err.response ? err.response.data : "An unexpected error occurred.");
            setMessage("");
        }
    };

    return (
        <div className="forgotPassword">
            <div className="forgotContainer">
                <div className="forgotHeader">
                    <h2>Forgot Password</h2>
                    <p>Please enter your email to receive a password reset link.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="forgotInput"
                    />
                    <button type="submit" className="forgotButton">Send Reset Link</button>
                </form>
                {message && <span className="message">{message}</span>}
                {error && <span className="error">{error}</span>}
            </div>
        </div>
    );
};

export default ForgotPassword;