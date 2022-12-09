import { IBase } from './base';

export interface IMeeting extends IBase {
    _id: string
    date: string,
    time: string,
    place: string,
    imageUrl: string,
    description: string
}
