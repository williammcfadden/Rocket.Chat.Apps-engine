import { IHttp, IModify, IPersistence, IRead } from '../accessors';
import { AppMethod } from '../metadata';
import { IBlockitBlockAction } from './IBlockitBlockAction';
import { IBlockitResponse } from './IBlockitResponse';
import { IBlockitViewClose } from './IBlockitViewClose';
import { IBlockitViewSubmit } from './IBlockitViewSubmit';

/** Handler for after a message is sent. */
export interface IBlockitActionHandler {
    /**
     * Method called when a block action is invoked.
     *
     * @param data
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @param persistence An accessor to the App's persistence
     */
    [AppMethod.BLOCKIT_BLOCK_ACTION]?(data: IBlockitBlockAction, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify):
        Promise<IBlockitResponse>;

    /**
     * Method called when a modal is submitted.
     *
     * @param data
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @param persistence An accessor to the App's persistence
     */
    [AppMethod.BLOCKIT_VIEW_SUBMIT]?(data: IBlockitViewSubmit, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify): Promise<IBlockitResponse>;

    /**
     * Method called when a modal is closed.
     *
     * @param data
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @param persistence An accessor to the App's persistence
     */
    [AppMethod.BLOCKIT_VIEW_CLOSE]?(data: IBlockitViewClose, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify): Promise<IBlockitResponse>;
}