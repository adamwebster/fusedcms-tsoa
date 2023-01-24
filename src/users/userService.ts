import { User } from "./user";

export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UserService {
  public get(id: number, name?: string): User {
    console.log("this is the id:" + id);
    return {
      id,
      email: "hello@email.com",
      name: name ?? "John Doe",
      status: "happy",
      phoneNumbers: [],
    };
  }
  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000),
      status: "happy",
      ...userCreationParams,
    };
  }
}
