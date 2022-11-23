import { SuperComponent } from '../common/src/index';
import { UploadMpConfig, UploadFile } from './type';
export default class Upload extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    data: {
        classPrefix: string;
        prefix: string;
        current: boolean;
        proofs: any[];
        customFiles: UploadFile[];
        customLimit: number;
        config: UploadMpConfig;
        files: UploadFile[];
        max: number;
        sizeLimit: number;
        requestMethod: any;
        gridItemStyle: string;
        column: number;
    };
    properties: import("./type").TdUploadProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        files(files: UploadFile): void;
        max(max: any): void;
        gridConfig(): void;
    };
    onProofTap(e: any): void;
    ready(): void;
    handleLimit(customFiles: UploadFile[], max: number): void;
    uploadFiles(files: UploadFile[]): Promise<unknown>;
    startUpload(files: UploadFile[]): Promise<void>;
    triggerSuccessEvent(files: any): void;
    triggerFailEvent(err: any): void;
    onFileClick(e: any): void;
    getFileType(mediaType: string[], tempFilePath: string, fileType?: string): string;
    getRandFileName(filePath: any): string;
    onDelete(e: any): void;
    deleteHandle(index: number): void;
    updateGrid(): void;
    methods: {
        onAddTap(): void;
        chooseMedia(mediaType: any): void;
        chooseMessageFile(mediaType: any): void;
        afterSelect(files: any): void;
    };
}
