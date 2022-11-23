/// <reference types="miniprogram-api-typings" />
import { SuperComponent, ComponentsOptionsType } from '../common/src/index';
import { MessageProps } from './message.interface';
export default class Message extends SuperComponent {
    externalClasses: string[];
    options: ComponentsOptionsType;
    properties: MessageProps;
    data: {
        prefix: string;
        classPrefix: string;
        visible: boolean;
        loop: number;
        animation: any[];
        showAnimation: any[];
        iconName: string;
        wrapTop: number;
    };
    observers: {
        marquee(val: any): void;
    };
    closeTimeoutContext: number;
    nextAnimationContext: number;
    resetAnimation: WechatMiniprogram.Animation;
    showAnimation: WechatMiniprogram.AnimationExportResult;
    hideAnimation: WechatMiniprogram.AnimationExportResult;
    ready(): void;
    memoInitalData(): void;
    resetData(cb: () => void): void;
    detached(): void;
    setIcon(icon?: string | boolean): void;
    checkAnimation(): void;
    clearMessageAnimation(): void;
    show(): void;
    hide(): void;
    reset(): void;
    handleClose(): void;
    handleBtnClick(): void;
}
