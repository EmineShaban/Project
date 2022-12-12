import { IBase } from './base';
import { IUser } from './user';

export interface IMeeting extends IBase {
    _id: string
    date: string,
    time: string,
    place: string,
    imageUrl: string,
    description: string,
    price: string,
    _ownerId: IUser
}
