import { Link } from "react-router-dom";

const ReadMore1 = () => {
  return (
    <div className="container mx-auto gap-3 text-center shadow p-3 mt-3">
      <h1 className="font-semibold mt-3 mb-3 ">
        Hello This is Read More File.. Welcome To our Website.
      </h1>
      <Link to={`/posts`} className="bg-pink-500 p-1 rounded mb-3 ">
        Back You
      </Link>
    </div>
  );
};

export default ReadMore1;
