export interface Result {
    id : string;
    pac_id : string;
    pac_name : string;
    wrong : number;
    good : number;
    when : any;
    comment? : string;
    comment_date? : any;
    comment_who? : string;
}