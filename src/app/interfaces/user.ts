import { IBase } from './base';


export interface IUser{
    _id: string
    firstName: string,
    secondName: string,
    email: string,
    hashedPassword: string,
    createdMeeting: string[],
    joinedMeeting: string[],
    created_at: string;
    updatedAt: string;
    __v: string;

}


  