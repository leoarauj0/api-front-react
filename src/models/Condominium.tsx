export default interface Condominium {
  id: string;
  name: string;
  typeCondo?: string | '';
  document?: string;
  email?: string;
  class?: string;
  phone?: string;
  price?: number;
  units?: number;
  address?: string;
  addressNumber?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}
