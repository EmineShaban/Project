import { IBase } from './base';


export interface IUser{
    _id: string
    username: string,
    email: string,
    hashedPassword: string,
    createdMeeting: string[],
    joinedMeeting: string[],
    created_at: string;
    updatedAt: string;
    __v: string;

}


  