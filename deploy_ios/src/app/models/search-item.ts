import { SignupPageRoutingModule } from "../signup/signup-routing.module";

export class SearchItem {
    items : SearchResults[];
}
export class Id {
    videoId : string;
}
export class S {
    title : string;
}
export class SearchResults {
    snippet : S;
    id : Id;
}
