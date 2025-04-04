import { Clip } from '../models/clip';
import { User } from '../models/user';
export class Playclip {
 id : string;
 title: string = "";
 clips: Clip[];
 login: string = "";
 description: string = "";
 application: string = "";
 startDate: string = "";
 endDate: string = "";
 createdBy: string = "";
 createDate: string = "";
 thumbnail: string = "";
 likes: number = 0;
 archive: number = 0;
 price: number = 0.0;
 bought: number = 0;
 jwt: string;
 users: User[];
}
