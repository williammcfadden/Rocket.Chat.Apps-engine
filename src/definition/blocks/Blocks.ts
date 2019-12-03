import { IBlockElement } from './Elements';
import { ITextObject } from './Objects';

export enum BlockType {
    SECTION = 'section',
    DIVIDER = 'divider',
    IMAGE = 'image',
    ACTIONS = 'actions',
}

export interface IBlock {
    type: BlockType;
    appId?: string;
    blockId?: string;
}

export interface ISectionBlock extends IBlock {
    type: BlockType.SECTION;
    text: ITextObject;
    accessory?: IBlockElement;
}

export interface IImageBlock extends IBlock {
    type: BlockType.IMAGE;
    imageUrl: string;
    altText: string;
    title?: ITextObject;
    blockId?: string;
}

export interface IDividerBlock extends IBlock {
    type: BlockType.DIVIDER;
}

export interface IActionsBlock extends IBlock {
    type: BlockType.ACTIONS;
    elements: Array<IBlockElement>;
}