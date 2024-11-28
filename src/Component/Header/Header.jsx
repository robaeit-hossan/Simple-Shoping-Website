import { auth } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colo from "./Header.module.css";
import myImage from "./myImage1.png"

const Header = () => {
  const [user, setUser] = useState(null); // State to store user info
  const navigate = useNavigate();

  useEffect(() => {
    // You can listen for auth state changes to know when the user logs in or out
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update the user state when authentication changes
    });

    // Cleanup the listener when component is unmounted
    return () => unsubscribe();
  }, []);

  // Handle the logout process
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login"); // Redirect to login after logging out
  };

  return (
    <div className="sticky top-0">
      <header className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className={`${colo.dd} ${colo.ddbold}`}>Rihan Shopping</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>

              {/* Conditionally render Login/Logout button */}
              {user ? (
                <>
                <div className="flex items-center">
                  <img
                    src={myImage} // User's image URL
                    alt="User Avatar"
                    className="w-10 h-9 rounded-full"
                  />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 px-2 py-1 font-bold rounded text-white"
                  >
                    Logout
                  </button>
                  </>
              ) : (
                <li>
                  <a
                    href="/login"
                    className="hover:text-gray-200 flex items-center"
                  >
                    LogIn
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
