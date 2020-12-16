<template>



<div class="row p-5">
  <div class="col-12 d-flex justify-content-center">
        <div class="card  border-dark" style="max-width:600px; max-height: 1000px;">
 
  <div class="card-header badge-dark">

    
   <h4> Califica al Transportista</h4>
  </div>
  <div class="card-body">


    <h5 class="card-title">

      <div class="row-md-12 p-1" style="display: inline-block">
      <label for="CalificarTransportista">
Transportista
      </label>
      </div>
  
<input type="Nombre del transportista">

    </h5>


    <div class="about">
  
<h2>Calificacion</h2>
<span class="start fa fa-star " id="1"></span>
<span class="start fa fa-star " id="2"></span>
<span class="start fa fa-star " id="3"></span>
<span class="start fa fa-star"  id="4"></span>
<span class="start fa fa-star"  id="5"></span>
<h2 id="showRating" ></h2>

  </div>
    <a href="#" class="btn btn-dark">Finalizar</a>
  </div>

 <div class="card-footer badge-dark padding-top:20px">



 </div>

</div>
  </div>
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

