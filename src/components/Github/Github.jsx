import React from "react";

function Github() {
  const data = {
    avatar_url: "/One.jpg", // One.jpg ko public folder me rakho
    name: "Daim Ali",
    login: "Daimx1214",
    followers: 4,
    following: 0,
    public_repos: 20,
    html_url: "https://github.com/Daimx1214",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <img
          src={data.avatar_url}
          alt="Profile"
          className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-orange-500 shadow-lg"
        />

        <h1 className="text-3xl font-bold mt-5 text-gray-800">
          {data.name}
        </h1>

        <p className="text-gray-500 text-lg">
          @{data.login}
        </p>

        <div className="mt-8 space-y-3 text-lg">
          <p>
            👥 <span className="font-semibold">Followers:</span>{" "}
            {data.followers}
          </p>

          <p>
            ➡️ <span className="font-semibold">Following:</span>{" "}
            {data.following}
          </p>

          <p>
            📦 <span className="font-semibold">Repositories:</span>{" "}
            {data.public_repos}
          </p>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition"
        >
          Visit GitHub
        </a>

      </div>
    </div>
  );
}

export default Github;