<template>
  <div class="about">
    <h1>This is an Soy Cliente Envia page</h1>
    
<h2>Star Rating</h2>
<span class="start fa fa-star " id="1"></span>
<span class="start fa fa-star " id="2"></span>
<span class="start fa fa-star " id="3"></span>
<span class="start fa fa-star"  id="4"></span>
<span class="start fa fa-star"  id="5"></span>
<h2 id="showRating" ></h2>

  </div>
</template>

<style>
.checked {
  color: orange;
}
</style>

<script>
import $ from 'jquery'

export default {
  mounted() {
      $('.start').on('click', (e) => {

        //OBTENER la clase y buscar si tiene cheked
       //si no tiene cheked marcar checked 
       //si tiene checked, borrar checked
       //crear una variable contadora de checked o un checked
       var idData=  e.target.id;
       let count=idData;
       let countMore=idData;
      
       do{
          console.log(count)
          $("#"+countMore).removeClass("checked");
          countMore++;
        }
        while(countMore<=5);
      
      do{
          console.log(count)
          $("#"+count).addClass("checked");
          count--;
        }
        while(count>0);
        
      $("#showRating").html(idData)
      
      });
   },
   methods: {
      logData(id) {
         console.log(id);
      },
   }
}
</script>

