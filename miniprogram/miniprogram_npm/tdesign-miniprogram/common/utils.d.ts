/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
declare type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
export declare const debounce: (func: any, wait?: number) => (...rest: any[]) => void;
export declare const classNames: (...args: any[]) => string;
export declare const styles: (styleObj: any) => string;
export declare const getAnimationFrame: (cb: Function) => WechatMiniprogram.NodesRef;
export declare const getRect: (context: any, selector: string) => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>;
export declare const isNumber: (value: any) => boolean;
export declare const addUnit: (value?: string | number) => string | undefined;
export declare const getCharacterLength: (type: string, str: string, max?: number) => {
    length: number;
    characters: string;
};
export declare const chunk: (arr: any[], size: number) => any[][];
export declare const equal: (v1: any, v2: any) => any;
export declare const clone: (val: any) => any;
export declare const getInstance: (context?: Context, selector?: string) => WechatMiniprogram.Component.TrivialInstance;
export {};
