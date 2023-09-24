export interface IGetOneUsers {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  age: number;
  gender: string;
  hair: THair;
  company?: TCompany;
  bank?: TBank;
  address?: TAddress;
}

type TCompany = {
  department: string;
  name: string;
  title: string;
} | undefined

type TBank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
}
type TAddress = {
  address: string;
  city: string;
}
type THair = {
  color: string;
  type: string;
}