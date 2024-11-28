const Error = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{"Something went wrong!"}</span>
        </div>
      </div>
        </div>
    );
};

export default Error;