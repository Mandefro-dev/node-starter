export class UserService {
  static async getAllUsers() {
    // Logic to fetch from DB would go here
    return [{ id: 1, name: "John Doe" }];
  }

  static async createUser(userData: any) {
    // Logic to save to DB
    return { id: 2, ...userData };
  }
}
