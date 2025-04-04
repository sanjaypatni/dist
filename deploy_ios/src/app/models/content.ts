

export class Content {
    id: string;
    title: string;
    description: string;
    type: string = "";
    login: string;
    link: string;
    startDate: string;
    endDate: string;
    likeCnt : number = 0;
    unlikeCnt : number = 0;
    thumbnail : string = "assets/img/logo.png";
    showAudio : boolean;
    showVideo : boolean;
    showImage : boolean;
    showText : boolean;
    showYTube : boolean;
    showPdf : boolean;
    showLink : boolean;
    showAppt : boolean;
    showRecord : boolean;
    like : boolean = false;
    object : number = 0;
    unlike : boolean = false;
    archive : number = 0;
    taskStatus : string = "";
    email : string = "";
    phone : string = "";
    base64Bytes : any = "";
    fileType : string = "";
    base64String : any = "data:" + this.type + "/" + this.fileType + ";base64," + this.base64Bytes;
}
