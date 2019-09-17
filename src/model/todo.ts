import { Type } from './type';
const ColorTypes : Type[] = [new Type({name:'default',color:'skyblue'})]


export class Todo {


  id : {
     value : number,
     isEdit : boolean  
  } 
 type : Type
  priority :{
   value : number,
   isEdit : boolean  
} 
  name : {
   value : string,
   isEdit:boolean  
}  
  date : {
   value : string,
   isEdit : boolean  
} 
  des : {
   value: string,
   isEdit : boolean  
} 
    constructor( params : {id : number, name : string , date : string ,des : string , priority? : number,type? : Type} ){
        this.id = {
           value :params.id,
           isEdit:false
        }
        this.name = {
         value :params.name,
         isEdit:false
      }
        this.date = {
         value :params.date,
         isEdit:false
       }
       this.des = {
         value :params.des,
         isEdit:false
      }
       this.priority = {
         value :params.priority ||0,
         isEdit:false
      }
      this.type = params.type || new Type({name:'test',color:'skyblue'})
      
    }
   toStirng():void{
        console.log(`the times is ${this.date}, the name is ${this.name}, the des is ${this.des}`);  
   }
   update( params : { name? : string  , date? : string , des? : string , priority? : number } ) : void {
      this.name.value = params.name || this.name.value
      this.date.value = params.date || this.date.value 
      this.des.value = params.des || this.des.value
      this.priority.value = params.priority || this.priority.value
   }
}