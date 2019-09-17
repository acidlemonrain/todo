<template>
  <Drag class="has-text-left  todo" :style="{backgroundColor : todo.type.color}" :transfer-data="todo">
    
      <div class=""> {{todo.name.value}}   {{todo.type.value}} {{todo.type.color}} </div>
      
  </Drag>
</template>

<script lang="ts">
 	import { Drag, Drop } from 'vue-drag-drop';
 import { Component, Vue } from 'vue-property-decorator';
import { Todo } from '../model/todo';
import todo from '@/components/todo.vue';
import { VueConstructor } from 'vue';
 
 
 @Component({
  components: {  
   Drag
  }, 
  props: {
    todoProp: Todo
  }
})
export default class Home extends Vue {
  todo : Todo   =  new Todo({id:Math.random(),name:'this.name', date:'this..date', des:'this..des'})
  isEdit : boolean = false
  Edit(key:'name'|'des'|'date' |'priority') : void {
       this.isEdit = !this.isEdit    
  }

  created () {
   this.todo = (this.$props.todoProp)   
  }
  
}
</script>

 <style scoped>
 .todo{
   padding: 5px 3px;
   border-bottom: 1px solid #ccc;
   margin:3px;
   border-radius:5px;
   color:black;
   font-size:12px
 }
 </style>
 