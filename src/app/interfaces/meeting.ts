import { IBase } from './base';
import { IUser } from './user';

export interface IMeeting {
    _id: string
    date: string,
    time: string,
    avaliblePeople: string,
    place: string,
    imageUrl: string,
    description: string,
    _ownerId: string
    created_at: string;
    updatedAt: string;
    __v: string;
}
