// app/types/user.ts

// User type
export interface User {
  id: number;
  UserName: string;
  email: string;
  Password: string;
}

// UserInput type for creating or updating users
export interface UserInput {
  UserName: string;
  email: string;
  Password: string;
  // Add more fields for user input as needed
}

// UserProfile type for displaying user profiles
export interface UserProfile {
  user: User;
  bio?: string;
  avatarUrl?: string;

  // Add more profile-related fields as needed
}

// Define a UserApiResponse type for responses from the user API
export interface UserApiResponse {
  data: User | null;
  error: string | null;
  isLoading: boolean;
  StatusMessage?: string;
  StatusCode?: number;
  AccessToken?: string;
  PasswordChanged: boolean;
}
