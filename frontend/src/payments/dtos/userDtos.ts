import { Dayjs } from "dayjs";

export class UserDto {
  id: string;
  alias: string;
  name: string;
  surname: string;
  birthdate: Dayjs;


  constructor(id: string, alias: string, name: string, surname: string, birthdate: Dayjs) {
    this.id = id;
    this.alias = alias;
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
  }
}

