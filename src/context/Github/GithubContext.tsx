import axios from "axios";
import React, { createContext, ReactNode, useState } from "react";
import { contextTypes,  userTypes } from "../../types";

const GithubContext = createContext<contextTypes | null>(null);

const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider: React.FC<ReactNode> = ({ children }) => {
  const [isLoading, setisLoading] = useState<Boolean>(false);
  const [users, setUsers] = useState<userTypes[]>([]);
  const [repos, setRepos] = useState<any>([
    {
      "id": 463691384,
      "node_id": "R_kgDOG6NeeA",
      "name": "e-commerce-store-app",
      "full_name": "Godsheritage/e-commerce-store-app",
      "private": false,
      "owner": {
        "login": "Godsheritage",
        "id": 56279264,
        "node_id": "MDQ6VXNlcjU2Mjc5MjY0",
        "avatar_url": "https://avatars.githubusercontent.com/u/56279264?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Godsheritage",
        "html_url": "https://github.com/Godsheritage",
        "followers_url": "https://api.github.com/users/Godsheritage/followers",
        "following_url": "https://api.github.com/users/Godsheritage/following{/other_user}",
        "gists_url": "https://api.github.com/users/Godsheritage/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Godsheritage/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Godsheritage/subscriptions",
        "organizations_url": "https://api.github.com/users/Godsheritage/orgs",
        "repos_url": "https://api.github.com/users/Godsheritage/repos",
        "events_url": "https://api.github.com/users/Godsheritage/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Godsheritage/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/Godsheritage/e-commerce-store-app",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app",
      "forks_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/forks",
      "keys_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/teams",
      "hooks_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/hooks",
      "issue_events_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/issues/events{/number}",
      "events_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/events",
      "assignees_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/assignees{/user}",
      "branches_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/branches{/branch}",
      "tags_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/tags",
      "blobs_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/languages",
      "stargazers_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/stargazers",
      "contributors_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/contributors",
      "subscribers_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/subscribers",
      "subscription_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/subscription",
      "commits_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/contents/{+path}",
      "compare_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/merges",
      "archive_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/downloads",
      "issues_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/issues{/number}",
      "pulls_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/labels{/name}",
      "releases_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/releases{/id}",
      "deployments_url": "https://api.github.com/repos/Godsheritage/e-commerce-store-app/deployments",
      "created_at": "2022-02-25T22:22:55Z",
      "updated_at": "2022-03-26T19:24:41Z",
      "pushed_at": "2022-04-05T15:03:16Z",
      "git_url": "git://github.com/Godsheritage/e-commerce-store-app.git",
      "ssh_url": "git@github.com:Godsheritage/e-commerce-store-app.git",
      "clone_url": "https://github.com/Godsheritage/e-commerce-store-app.git",
      "svn_url": "https://github.com/Godsheritage/e-commerce-store-app",
      "homepage": "shoe-store-one.vercel.app",
      "size": 19569,
      "stargazers_count": 1,
      "watchers_count": 1,
      "language": "TypeScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "topics": [
  
      ],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 1,
      "default_branch": "master"
    }
  ]);
  const [user, setUser] = useState<userTypes>({
    login: "Godsheritage",
    id: 56279264,
    avatar_url: "https://avatars.githubusercontent.com/u/56279264?v=4",
    html_url: "https://github.com/Godsheritage",
  
    type: "User",
    name: "Godsheritage D Adeoye",
    blog: "https://react-portfolio-ruddy.vercel.app/",
    location: "Nigeria",
    hireable: null,
    bio: "Front End Developer || React Developer|| UI/UX Designer ||Tech Enthusiast\r\n",
    twitter_username: "kyng_Herit",
    public_repos: 26,
    public_gists: 1,
    followers: 3,
    following: 5,
  });

  // to search for users
  const searchUsers = async (text: any) => {
    setisLoading(true);
    const params = new URLSearchParams({
      q: text,
    });
    const response: any = await axios.get(
      `${GITHUB_URL}/search/users?${params}`
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    );
    setUsers(response.data.items);
    setisLoading(false);
  };

  // to get a single user
  const getUser = async (login: String) => {
    setisLoading(true);

    const response: any = await axios.get(
      `${GITHUB_URL}/users/${login}`
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    );

    if (response.status === 404) {
      window.location.href = "/notfound";
    } else {
      setUser(response.data);
      // console.log(response.data)
      setisLoading(false);
    }
  };



  const getRepos = async (login: string) => {
    // setisLoading(true);

    const response: any = await axios.get(
      `${GITHUB_URL}/users/${login}/repos`
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    );

    if (response.status === 404) {
      window.location.href = "/notfound";
    } else {
      setRepos(response.data);
      // console.log(response.data)
      // setisLoading(false);
    }
  };

  // to clear users from state
  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <GithubContext.Provider
      value={{ isLoading, user, users, repos, searchUsers, clearUsers, getUser, getRepos }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
