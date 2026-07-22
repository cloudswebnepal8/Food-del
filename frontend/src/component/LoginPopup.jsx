import { useState } from "react";
import { X } from "lucide-react";

const LoginPopup = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      // Signup Validation
      if (
        formData.name.trim() === "" ||
        formData.email.trim() === "" ||
        formData.password.trim() === ""
      ) {
        alert("Please fill all fields.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert("Please enter a valid email.");
        return;
      }

      if (formData.password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }

      alert("✅ Account created successfully! Please login.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Switch to Login form
      setIsLogin(true);
      return;
    }

    // Login Validation
    if (
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      alert("Please enter your email and password.");
      return;
    }

    alert("✅ Login Successful!");

    // Close popup after successful login
    setShowLogin(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-8 shadow-lg">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <X
            className="cursor-pointer hover:text-red-500"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded outline-none focus:border-orange-500"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded outline-none focus:border-orange-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded outline-none focus:border-orange-500"
          />

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the Terms & Privacy Policy.
            </p>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          {isLogin ? (
            <p className="text-sm text-center">
              Create a new account?
              <span
                onClick={() => {
                  setIsLogin(false);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                  });
                }}
                className="text-orange-500 cursor-pointer ml-1 font-medium"
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="text-sm text-center">
              Already have an account?
              <span
                onClick={() => {
                  setIsLogin(true);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                  });
                }}
                className="text-orange-500 cursor-pointer ml-1 font-medium"
              >
                Login here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;