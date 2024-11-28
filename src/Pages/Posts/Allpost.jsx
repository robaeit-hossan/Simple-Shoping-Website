import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
import Error from "../../Component/Loading/Error";

const Allpost = () => {
  const { data, isLoading, isFetched, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/posts");
      return response.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (isFetched) {
    return (
      <div className="container mb-5 mt-3 mx-auto grid md:grid-cols-3 gap-3 ">
        {data.map((post) => (
          <div key={post.id} className="border rounded p-2 shadow">
            <h3 className="text-xl">Product Name: {post.title}</h3>
            <img
              src={post.pictures}
              alt={data.title}
              className="mx-auto w-40 rounded mt-3"
            />
            <p className="font-bold text-center mt-3 mb-5">
              Price: {post.views}
            </p>
            <Link
              to={`${post.id}`}
              className="text-white font-semibold shadow mx-2 p-1 mt-8 mb-5 bg-green-600 rounded-sm"
            >
              Read More
            </Link>
            <Link
              to={`/delete-post/${post.id}`}
              className="text-white font-semibold shadow mx-2 p-1 mt-8 mb-5 bg-red-600 rounded-sm"
            >
              Delete
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default Allpost;

/*
import axios from "axios";
import { useQuery } from "react-query";

const AllPost = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/posts");
      return response.data;
    },
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.views}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPost;
*/
// You can use this code ...
