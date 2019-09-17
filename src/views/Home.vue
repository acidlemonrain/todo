<template>
  <div class="home columns ">
 
      <div class="    column is-4 is-offset-1 ">  
     
      <todolist :todolistProp = todolist v-for="(todolist,index) in todoLists" :key="index"></todolist> 
        
      </div>
      <div class="column is-4 is-offset-1">
        <div class="field">
      <label class="label">Name</label>
     <div class="control">
        <input class="input is-small  is-expanded" type="text" placeholder="e.g Alex Smith">
    </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input is-small  is-expanded" type="email" placeholder="e.g. alexsmith@gmail.com">
  </div>
</div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';   
import HelloWorld from '@/components/HelloWorld.vue';   
import todo from  '@/components/todo.vue';   
import { Todo } from '../model/todo';   
import { TodoList } from '../model/todoList';  
import todolist from '../components/todolist.vue';

@Component({  
  components: {  
    HelloWorld,todo,todolist
  },  
})  
export default class Home extends Vue {
  todoLists : TodoList[] = [new TodoList(3,'Today'),new TodoList(3,'Tomorrow',),new TodoList(3,'The Day afer Tomorrow')]
  created () {
     
  }
}
</script>
<style scoped>
.card{
  padding: 0px
}
</style>