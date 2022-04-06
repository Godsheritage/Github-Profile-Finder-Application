export interface contextTypes {
  isLoading: Boolean;
  users: { id: number; login: String, avatar_url : String }[];
  searchUsers : (text : any) => Promise<void>
}

export interface userTypes {
    id: number; 
    login: String;
    avatar_url : String;
    
}