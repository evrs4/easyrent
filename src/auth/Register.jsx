/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { useState } from "react";
// import getStaticAsset from "../utils/getStaticAsset";

// import { Link, Navigate } from "react-router-dom";
// import { useAuth } from "../utils/useAuth";


// const Register = () => {
//   const [formdata, setformdata] = useState({
//     full_name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });

//   const { register, loading } = useAuth();

//   const handlesubmit = async (e) => {
//     e.preventDefault();

//     if (formdata.password !== formdata.confirmpassword) {
//       alert("Password is not match");
//       return;
//     }

//     try {
//       await register(
//         formdata.full_name,
//         formdata.email,
//         formdata.password
//       ).then(() => {
//         alert("Added!");
//         Navigate("/login");
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="min-h-screen flex">
//       {/* Left Section with Image */}
//       <div
//         className="w-1/2 h-full bg-cover bg-center"
//         style={{
//           backgroundImage: getStaticAsset("logreg.png"),
//         }}
//       ></div>

//       {/* Right Section with Form */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-gray-50">
//         <h1 className="text-4xl font-bold mb-6">
//           <span className="text-yellow-500">Easy</span>Rent
//         </h1>
//         <h2 className="text-2xl font-semibold mb-4">Welcome to EasyRent!</h2>
//         <form className="w-3/4" onSubmit={handlesubmit}>
//           {/* Full Name Field */}
//           <input
//             id="fullname"
//             type="text"
//             placeholder="Full Name"
//             value={formdata.full_name}
//             onChange={(e) =>
//               setformdata({ ...formdata, full_name: e.target.value })
//             }
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />

//           {/* Email Field */}
//           <input
//             id="email"
//             type="email"
//             placeholder="Email"
//             value={formdata.email}
//             onChange={(e) => 
//               setformdata({ ...formdata, email: e.target.value })
//             }
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />

//           {/* Password Field */}
//           <input
//             id="password"
//             type="password"
//             placeholder="Password"
//             value={formdata.password}
//             onChange={(e) =>
//               setformdata({ ...formdata, password: e.target.value })
//             }           
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//           <input
//             id="comfirmpassword"
//             type="password"
//             placeholder="Confirm Password"
//             value={formdata.confirmpassword}
//             onChange={(e) =>
//               setformdata({ ...formdata, confirmpassword: e.target.value })
//             }           
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />

//           {/* Checkbox for Newsletter */}
//           <div className="flex items-center mb-6">
//             <input
//               type="checkbox"
//               id="newsletter"
//               className="w-5 h-5 border-gray-300 rounded mr-2 outline-none focus:outline-none"
//             />
//             <label
//               htmlFor="newsletter"
//               className="text-sm text-gray-600"
//             >
//               I do not wish to receive news and promotions from EasyRent
//               Company by email.
//             </label>
//           </div>

//           {/* Terms of Use */}
//           <p className="text-xs text-gray-500 mb-6">
//             By continuing, you agree to EasyRent Company`s Terms of Use and
//             Privacy Policy.
//           </p>

//           {/* Submit Button */}
//           <Link
//           to={"/"}
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
//           >
//             Register 
//           </Link>

//           {/* Log In Link */}
          // <p className="text-sm text-gray-700 text-center mt-4">
          //   Have an account before?{" "}
          //   <a
          //     href="/login"
          //     className="text-yellow-500 font-semibold hover:underline"
          //   >
          //     Login {""}
          //   </a>
          //   here!
          // </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


// // backgroundImage: `url(${getStaticAsset("logreg.png")})`,
// // backgroundImage: getStaticAsset("logreg.png"),


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password); // Call context function

      if (result.success) {
        navigate("/"); // Navigate to dashboard on success
      } else {
        setError(result.error.message); // Show error message on failure
      }
    } catch (error) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
        <div className="flex flex-col py-4">
          {/* <label htmlFor="Email">Email</label> */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 mt-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col py-4">
          {/* <label htmlFor="Password">Password</label> */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 mt-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" disabled={loading} className="w-full mt-4">
          Sign Up
        </button>
        {error && <p className="text-red-600 text-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Register;