import { X } from "lucide-react";

const LoginPopup = ({ setShowLogin }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white w-[90%] max-w-md rounded-xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Login</h2>

          <X
            className="cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded"
          />

          <button className="bg-orange-500 text-white py-3 rounded">
            Login
          </button>

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" />
            <p>
              By continuing, I agree to terms & privacy policy.
            </p>
          </div>

          <p className="text-sm">
            Create a new account?
            <span className="text-orange-500 cursor-pointer ml-1">
              Click here
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default LoginPopup;