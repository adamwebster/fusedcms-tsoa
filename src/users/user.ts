export interface User {
  id: number;
  email: string;
  name: string;
  status?: "happy" | "sad";
  phoneNumbers: string[];
}
