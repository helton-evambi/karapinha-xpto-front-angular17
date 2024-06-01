export interface User {
  UserId: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Photo: string;
  PhoneNumber: number;
  IdCard: string;
  Username: string;
  Role: 'admin' | 'administrative' | 'professional';
}
