import User from './User';
export default interface Company {
  id: string;
  user: User;
  typeCompany: string;
  document: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  city: string;
  state: string;
}
