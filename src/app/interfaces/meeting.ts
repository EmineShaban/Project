import { IBase } from './base';
import { IUser } from './user';

export interface IMeeting {
    _id: string
    date: string,
    time: string,
    place: string,
    imageUrl: string,
    description: string,
    price: string,
    _ownerId: string
    created_at: string;
    updatedAt: string;
    __v: string;
}
