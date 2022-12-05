import { IBase } from './base';

export interface IMeeting extends IBase {
    
    date: string,
    time: string,
    place: string,
    imageUrl: string,
    description: string
}
