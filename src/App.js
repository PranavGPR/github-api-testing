import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/pranavgpr");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <p>{data.login}</p>
      <a href={data.html_url} target="_blank" rel="noreferrer">
        <img src={data.avatar_url} alt="img" />
      </a>
    </div>
  );
}

// login: "PranavGPR"
// id: 51258030
// node_id: "MDQ6VXNlcjUxMjU4MDMw"
// avatar_url: "https://avatars.githubusercontent.com/u/51258030?v=4"
// gravatar_id: ""
// url: "https://api.github.com/users/PranavGPR"
// html_url: "https://github.com/PranavGPR"
// followers_url: "https://api.github.com/users/PranavGPR/followers"
// following_url: "https://api.github.com/users/PranavGPR/following{/other_user}"
// gists_url: "https://api.github.com/users/PranavGPR/gists{/gist_id}"
// starred_url: "https://api.github.com/users/PranavGPR/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/PranavGPR/subscriptions"
// organizations_url: "https://api.github.com/users/PranavGPR/orgs"
// repos_url: "https://api.github.com/users/PranavGPR/repos"
// events_url: "https://api.github.com/users/PranavGPR/events{/privacy}"
// received_events_url: "https://api.github.com/users/PranavGPR/received_events"
// type: "User"
// site_admin: false
// name: "Pranav"
// company: "Member in @ZOSIME, @aubit-web-team, @bit-devs-18"
// blog: "https://realgpr.tech"
// location: "Madurai"
// email: null
// hireable: true
// bio: "Currently learning Mobile Apps Development, MERN Stack Developer.  Diving deep into the ocean of programming!

// "
// twitter_username: "pranavgpr"
// public_repos: 48
// public_gists: 1
// followers: 41
// following: 51
// created_at: "2019-06-01T07:17:25Z"
// updated_at: "2021-05-20T08:28:17Z"
