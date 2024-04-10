import React, { useEffect, useState } from "react";
import User from "./user";

const GithubProfileFind = () => {
  const [username, setUsername] = useState("JagannathShingne01");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubData()
  }

  async function fetchGithubData(){
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json();

    if (data) {
        setUserData(data)
        setLoading(false)
    }
    console.log(data, "data")
  }
  useEffect(()=>{
    fetchGithubData()
  },[])

  if (loading) {
    return <h1 className="text-9xl flex justify-center items-center mt-10 font-extrabold">Loading...... Wait!</h1>
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <input
          className="mb-10 p-2 px-4  bg-slate-100"
          type="text"
          name="search-username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Search Github Username"
        />
        <button className="bg-slate-300 mx-4 p-2 rounded-xl text-black font-bold px-6" onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData}/> : null
      }
    </div>
  );
};

export default GithubProfileFind;
