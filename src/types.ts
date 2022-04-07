export interface userTypes {
  name: String;
  id: Number;
  type: String;
  avatar_url: string;
  location: String;
  bio: String;
  blog: String;
  twitter_username: String;
  login: String;
  html_url: string;
  followers: Number;
  following: Number;
  public_repos: Number;
  public_gists: Number;
  hireable: null;
}

export interface contextTypes {
  isLoading: Boolean;
  users: userTypes[];
  user: userTypes;
  searchUsers: (text: any) => Promise<void>;
  clearUsers: () => void;
  getUser: (login: any) => void;
  repos : repoTypes[] | undefined
  getRepos : any
}

export interface AlertContextTypes {
  alert: null;
}

export interface repoTypes {
  name: String;
  description: String;
  html_url: String;
  forks: Number;
  open_issues: Number;
  watchers_count: Number;
  stargazers_count: Number;
}
