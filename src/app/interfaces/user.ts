import { IBase } from './base';


export interface IUser{
    _id: string
    username: string,
    email: string,
    hashedPassword: string,
    created_at: string;
    updatedAt: string;
    __v: string;
    // _ownerId: string;
    // tel: string,
    // gender: string;
    // additionalInfo: string[]
    // wonMeetings: string[];
    // __v: number;
}


  