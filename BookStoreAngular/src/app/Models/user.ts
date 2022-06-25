export class User {
  public userId: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
  public userName: string = "";

  constructor(id: string, firstName: string,lastName: string, email: string, userName: string) {
    this.userId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userName = userName;
  }
}
