import { auth } from "./firebaseConfig";

const Logout = () => {
    return (
        <div>
        <button
        onClick={() => auth.signOut()}
        className="bg-red-500 px-4 py-2 mt-3 rounded text-white"
      >
        Logout
      </button>
        </div>
    );
};

export default Logout;