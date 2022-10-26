export interface User {
  _id: Object;
  id: string;
  username: string;
  password: string;
  email: string;
  picture: {
    data: {
      url: string
    }
  };
  displayName: string;
  createAt: Date;
  ip: string;
  location: Array<Object>;
  currentDevice: Array<Object>;
  name: {
    familyName: string;
    givenName: string;
    middleName: string
  };
  gender: string;
  quotes: string;
  birthday: string
}
