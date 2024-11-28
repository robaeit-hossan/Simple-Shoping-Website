import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import './PostFile.Thank.css';

const SinglePost = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
      queryKey: ["singlePost", id],
      queryFn: async () => {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        return response.data;
      }
    });

    const [message, setMessage] = useState(null); // State to manage the message

  const handleClick = () => {
    setMessage("Thank you for your purchase!"); // Set the message when clicked
  };
  
    if (isLoading) {
      return <h3>Loading...</h3>;
    }
  
    return (
      <div className="container mx-auto gap-3 text-center shadow mt-2 mb-4 pb-5">
        <h3 className="font-semibold mt-2 mb-3">Title: {data.title}</h3>
        <img src={data.pictures} alt={data.title} className="mx-auto w-40 rounded" />
        <p className="pb-4 mt-4 font-bold">About: {data.About}</p>
        <p className="pb-4 mt-2 mb-4 font-bold text-2xl">Price: {data.views}</p>
        <div>
      {/* Buy Button */}
      <Link
        to="#"
        onClick={handleClick}
        className="bg-green-500 font-bold px-4 p-2 rounded"
      >
        Buy Our Product
      </Link>

      {/* Conditionally render the Thank You message */}
      {message && (
        <div className="thank-you-message animated-message mt-4 p-4 flex bg-green-100 text-green-800 rounded shadow-md">
          <h2 className="font-bold">{message}</h2>
        </div>
      )}
     
     <Link to="/posts" className="mx-5 bg-pink-300 p-2 rounded font-bold">
        Back to Posts
      </Link>
   
    </div>
      </div>
     
    );
  };
  
  
  export default SinglePost;
  
  

