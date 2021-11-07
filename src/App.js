import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import Menu from "./components/Menu";

const axios = require("axios");

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAPIResponse() {
    setIsLoading(true);
    const response = await axios.get(
      "https://api.npoint.io/144c46739f80c9eeb6b7"
    );
    setPosts(response.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getAPIResponse();
  }, []);

  return (
    <>
      <div className="App">
        <header>
          <nav>
            <Menu></Menu>
          </nav>
        </header>

        {isLoading ? (
          <div>Carregando</div>
        ) : (
          <div className="text-post">
            {posts.map((post) => {
              return <Post post={post}></Post>;
            })}
          </div>
        )}

        <div>
          <footer>© 2021 FOODGRAM</footer>
        </div>
      </div>
    </>
  );
}

export default App;
