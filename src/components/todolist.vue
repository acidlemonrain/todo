 
<template>
  <drop class="card" style="margin-top:30px"   @drop="handleDrop">

  
   

    <div class="card-header">
      <p class="card-header-title">
        <span>{{ todoList.name}}</span>  
      </p>
      </div>
      <div class="card-content">

    <addtodo @btn=addTodo></addtodo> 
 
        <div v-for="(todo,ind) in todoList.collections" :key="ind">
        <todo  :todoProp=todo></todo>
      </div>
      </div>
  </drop>
</template>

<script lang="ts">
import addtodo from '../components/addtodo.vue';
  
import { Component, Vue } from 'vue-property-decorator';  
import { Todo } from '../model/todo';   
import { TodoList } from '../model/todoList';   
import todo from "../components/todo.vue";
import { Type } from '../model/type';
import { Drag, Drop } from 'vue-drag-drop';
@Component({  
  components: {  
    todo,addtodo,Drag,Drop
  },  
 props: {
    todolistProp: TodoList
  }
})  
export default class Home extends Vue {
  date:string ='20190'
   
  todoList : TodoList = new TodoList(4,'defaut');
  created () {
      this.todoList = this.$props.todolistProp || this.todoList
  }
  addTodo (event:{id : number, name : string , date : string ,des : string , priority? : number,type? : Type}) {
    console.log(event);
    
      this.todoList.collections.push(new Todo(event))
  }
  	handleDrop(data:Todo) :void {
			this.todoList.collections.push(data)
    
   }
}
</script>

<style>

</style>