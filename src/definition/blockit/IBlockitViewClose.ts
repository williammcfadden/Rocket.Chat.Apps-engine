import { IRoom } from '../rooms';
import { IUser } from '../users';

export interface IBlockitViewClose {
    appId: string;
    view: object;
    isCleared: boolean;
    user: IUser;
    room: IRoom;
}