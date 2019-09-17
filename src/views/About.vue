<template>
	<div style="margin-left:10px">
		<drag class="table-card"  :transfer-data="cardData">
				  name: {{card.name}}
		 <p>  attack : {{card.attack}}</p>
         <br>
             <p>arm : {{card.arm}}</p>
             <br>
		   health : {{card.health}}
         
		</drag>

	</div>
</template>

 
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';   
import HelloWorld from '@/components/HelloWorld.vue';   
import todo from  '@/components/todo.vue';   
import { Todo } from '../model/todo';   
import { TodoList } from '../model/todoList';  
import todolist from '../components/todolist.vue';
	import { Drag, Drop } from 'vue-drag-drop';
@Component({  
  components: {  
    HelloWorld,todo,todolist,Drag
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