import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const DeletePost = () => {
  const { id } = useParams(); // Get the id from the route
  const navigate = useNavigate(); // For redirecting after deletion

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      alert('Post deleted successfully!');
      navigate('/'); // Redirect to the homepage or posts list
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete the post.');
    }
  };

  return (
    <div className='text-center'>
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-12 px-6 mt-5 rounded text-center">
    <h1 className="text-4xl font-bold mb-4">Please Check Our Product to Delete.</h1>
    </div>
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white font-semibold py-4 mt-6 px-4 rounded"
      >
        Confirm Delete
      </button>
      <Link
              to={`/posts`}
              className="bg-gray-700 mx-4 text-white font-semibold py-4 mt-6 px-4 rounded"
            >
              Back
            </Link>
    </div>
  );
};

export default DeletePost;
