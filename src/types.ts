export interface userTypes {
  id: Number;
  login: String;
  avatar_url: String;
}

export interface contextTypes {
  isLoading: Boolean;
  users: any;
  user: any;
  searchUsers: (text: any) => Promise<void>;
  clearUsers: () => void;
  getUser : (login : any) => void
}


export interface AlertContextTypes {
  alert: null;
}
