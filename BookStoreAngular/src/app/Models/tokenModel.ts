export class ITokenModel {
  public accessToken: string = "";
  public refreshToken: string = "";
}
export class TokenModel implements ITokenModel {
  public accessToken: string ;
  public refreshToken: string;
}
