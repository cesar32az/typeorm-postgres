import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsNumber()
  public age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}
