import { Todo } from './todo';
export class TodoList{
    name:string = 'today'
    priority:number = 0
    collections : Todo[]  = []
    constructor(number : number =7 ,name : string = 'name'){
        this.name = name
        this.makeRandomTodo(number)
    }
    makeRandomTodo(number : number = 7 ) : void{   
            for (let index = 0; index < number; index++) {
                this.collections.push(new Todo({id:1+index, name:'name'+index.toString(), date:'date'+index, des:index.toString()}))  
            }
    }
    getIdSet() : number[]{
        return this.collections.map(todo => todo.id.value)
    }
    update(id:number , state: { name? : string  , date? : string , des? : string , priority? : number }) {
         const index = this.getIdSet().indexOf(id)
         this.collections[index].update(state)
    }
    deleteCard(params:{id?:number , todo?:Todo}){
        let id :number =  0 ;
         if(params.id){
            id = params.id
         }
         if(params.todo){
             id = params.todo.id.value
         }
         let index = this.collections.map(todo=>{todo.id.value}) 

    }
}