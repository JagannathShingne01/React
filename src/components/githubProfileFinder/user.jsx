import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    html_url,
    created_at,
  } = user;
  const dateCreate = new Date(created_at);
  return (
    <div className="flex flex-col justify-center items-center border-2 w-[1100px] p-10 rounded-2xl bg-slate-200">
      <div>
        <img className="h-48 aspect-square rounded-[50%]" src={avatar_url} alt={name}/>
      </div>
      <div className="flex gap-10 my-10">
        <a className="text-xl text-blue-600 underline" target="_blank" href={html_url}>
          {name || login}
        </a>
        <p className="text-xl font-medium">
          User joined on{" "}
          {`${dateCreate.getDate()} ${dateCreate.toLocaleString("en-us", {
            month: "short",
          })} ${dateCreate.getFullYear()}`}
        </p>
      </div>
      <div className="text-xl ">
        <div className="flex gap-10 font-semibold mt-4">
            <p>Public Repos :</p>
            <p className="text-center ">{public_repos}</p>
        </div>
        <div className="flex gap-10 font-semibold mt-4">
            <p>Followers :</p>
            <p className="text-center ">{followers}</p>
        </div>
        <div className="flex gap-10 font-semibold mt-4">
            <p>Following :</p>
            <p className="text-center ">{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
