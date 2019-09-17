export class Type {
    name:string
    color:string
    isEdit:boolean = false
    constructor(params : { name : string, color:string }){
        this.name =  params.name
        this.color = params.color
    }
}