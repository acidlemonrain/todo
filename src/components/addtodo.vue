<template>
  <div>
    
<div class="field">
  <div class="control">
    <input class="input is-small  is-expanded" v-model=data.name>
  </div>
</div>

<div class="field">
  <div class="control">
    <input class="input is-small  is-expanded"  v-model=data.des>
  </div>
  </div>



<div class="field">
  <div class="control">
     <input class="input is-small is-expanded" type="time"  v-model=data.date>
  </div>
  </div>
 


 <div class="field">
  <div class="control">
       <div class="select is-small ">
       <select v-model="data.type">
        <option v-for="type in types"  :value = type >
            {{ type.name }}
      </option>
    </select>
    
      </div>
          
  <button class='button is-small'   @click=btn>button</button>
  </div>

  </div>

 
 


  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';  
import { Type } from '../model/type';
@Component({  
 
})  
export default class Home extends Vue {
  data = {
        name:'name' ,
      date:'date'  ,
      des:'des'  ,
      type: new Type({name:'impotant',color:'rgba(255, 166, 0, 0.424)'})
    } 
 
 
    
   types: Type[] = [new Type({name:'impotant',color:'rgba(255, 166, 0, 0.424)'}),new Type({name:'normal',color:'rgba(135, 207, 235, 0.493)'})] 

   btn():void {
     this.$emit('btn',this.data)
   }
}











  
</script>

<style scoped>

</style>

<style>

</style>