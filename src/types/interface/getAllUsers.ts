export interface IGetAllUsers {
  id: number;
  firstName: string;
  lastName: string;
  image: string,
  maidenName?: string;
}

export type TGetAllUsersResponse = {
  users: IGetAllUsers[];
};
