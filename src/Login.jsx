import { useForm } from "react-hook-form";
import myImage from "./../src/myImage.png";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import dd from "./Image-1.png"
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Your form submission logic here
    console.log(data.email, data.password);
    reset();
  };
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  // optional.......
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      console.log(user);
      {alert(`You are already logged in: ${user.displayName}`)}
      navigate("/"); // Redirect to the home page after login.
    }
  }, [user, navigate]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <Header/>
      <div className="flex mx-20 justify-between items-center mt-4">
      <div className="w-full md:w-1/2 mt-6 md:mt-0 items-center ">
      <img src={dd} alt="Right Side Image" className="w-full rounded-lg max-w-sm" />
    </div>
      
    
    <div className="flex mb-5 flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-20 mt-3 p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#e5e2e2] rounded-2xl shadow-xl">
      <div className="flex flex-row gap-3 pb-6">
        <div>
          <img src={myImage} alt="Logo" width="43" />
        </div>
        <h1 className="text-2xl font-bold text-[#4B5563] my-auto">
          Rihan Shopping
        </h1>
      </div>
      <div className="text-sm font-bold text-[#f971a3] pb-8">
        Login to Rihan Shopping Website.
      </div>
      {/* Form Start.*/}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                id="email"
                className="pl-12 mb-2 font-bold bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="name@company.com"
                autoComplete="off"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    //sir teach me
                    //
                    message: "Invalid email format",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 font-bold">{errors.email.message}</p>
            )}
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                id="password"
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="new-password"
                {...register("password", {
                  pattern: {
                    value: /^[a-z][a-zA-Z0-9!@#$%^&*]{5,}$/,
                    // ^: Anchors the pattern to the start of the string.
                    //(?=.*[a-z]) Ensures at least one lowercase letter(a-z).
                    //(?=.*[A-Z]) Ensures at least one uppercase letter(A-Z).
                    //(?=.*[0-9]) Ensures at least one number(0-9).
                    //(?=.*[!@#$%^&*])[Ensures at least one special character(!@#$%^&*).
                    //.{6,}$: The string must be at least 6 characters long.
                    message:
                      "Password must start with a lowercase letter and be at least 6 characters long",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 font-bold">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full text-[#FFFFFF] bg-[#000000] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
          >
            Login
          </button>
          <div className="text-sm text-[#6B7280] text-center font-semibold">
            Don&apos;t have an account yet?{" "}
            <a href="#" className="font-medium text-[#000000] hover:underline">
              Sign Up
            </a>
          </div>
        </form>
        
        {/*Sign in Google...*/}
        <div className="flex flex-row justify-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="w-10 rounded-lg mt-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1fbLse3jS4QRu0d7NbheUrcA5ePDvJP3dQ&s"
              alt="Google logo"
            />
          </div>
          <div className="ml-3 mt-4">
            <button
              className="w-full text-[#FFFFFF] bg-[#4285F4] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center"
              onClick={() => signInWithGoogle()}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
