import { useState } from "react";
import { useAuth } from "../utils/useAuth";
import { Link, Navigate } from "react-router-dom";
import getStaticAsset from "../utils/getStaticAsset";

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const { register } = useAuth();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (formdata.password !== formdata.confirmpassword) {
      alert("Password is not match");
      return;
    }

    try {
      await register(
        formdata.full_name,
        formdata.email,
        formdata.password
      ).then(() => {
        alert("Added!");
        Navigate("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex">
      {/* Left Section with Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: getStaticAsset("logreg.png"),
        }}
      ></div>

      {/* Right Section with Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-yellow-500">Easy</span>Rent
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Welcome to EasyRent!</h2>
        <form className="w-3/4" onSubmit={handlesubmit}>
          {/* Full Name Field */}
          <input
            id="fullname"
            type="text"
            placeholder="Full Name"
            value={formdata.full_name}
            onChange={(e) =>
              setformdata({ ...formdata, full_name: e.target.value })
            }
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Email Field */}
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formdata.email}
            onChange={(e) => 
              setformdata({ ...formdata, email: e.target.value })
            }
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Password Field */}
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={formdata.password}
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }           
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            id="comfirmpassword"
            type="password"
            placeholder="Confirm Password"
            value={formdata.confirmpassword}
            onChange={(e) =>
              setformdata({ ...formdata, confirmpassword: e.target.value })
            }           
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Checkbox for Newsletter */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="newsletter"
              className="w-5 h-5 border-gray-300 rounded mr-2 outline-none focus:outline-none"
            />
            <label
              htmlFor="newsletter"
              className="text-sm text-gray-600"
            >
              I do not wish to receive news and promotions from EasyRent
              Company by email.
            </label>
          </div>

          {/* Terms of Use */}
          <p className="text-xs text-gray-500 mb-6">
            By continuing, you agree to EasyRent Company`s Terms of Use and
            Privacy Policy.
          </p>

          {/* Submit Button */}
          <Link
          to={"/"}
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Register 
          </Link>

          {/* Log In Link */}
          <p className="text-sm text-gray-700 text-center mt-4">
            Dont have An Account?{" "}
            <a
              href="/register"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Register {""}
            </a>
            here!
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login