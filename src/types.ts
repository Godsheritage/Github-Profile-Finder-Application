export interface contextTypes {
  isLoading: Boolean;
  users: { id: number; login: String, avatar_url : String }[];
  fetchUsers : () => Promise<void>
}

export interface userTypes {
    id: number; 
    login: String;
    avatar_url : String;
    
}