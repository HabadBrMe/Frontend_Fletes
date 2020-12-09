<template>
  <div class="register row justify-content-md-center" id="register">
    <div class="card col-9">
      <h1>Crea tu cuenta como ...</h1>
        <ul class="nav nav-tabs  row justify-content-md-center">
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#clienteenvia" role="button" aria-expanded="false" aria-controls="collapseExample">
              Cliente que Envia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#transportista" role="button" aria-expanded="false" aria-controls="collapseExample">
              Transportista</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#monitorista" role="button" aria-expanded="false" aria-controls="collapseExample">
              Monitorista</a>
          </li>
        </ul>
    <div class="collapse show" id="clienteenvia" data-parent="#register">
      <div class="card-body" >
        <div class="row justify-content-md-center">
          <div class="m-3">
            <input type="radio" id="personal" name="clien" data-toggle="collapse" href="#personal" role="button" aria-expanded="false" aria-controls="collapseExample" checked>
            <label for="personal">Personal</label>
          </div>
          <div class="m-3">
            <input type="radio" id="negocio" name="clien" data-toggle="collapse" href="#empresa" role="button" aria-expanded="false" aria-controls="collapseExample">
            <label for="negocio">Negocio o Empresa</label>
          </div>
        </div>
        <div class="collapse show" id="personal" data-parent="#clienteenvia">
          <fromcenviapersonal />
        </div>
        <div class="collapse" id="empresa" data-parent="#clienteenvia">
          <fromcenviaempresa />
        </div>
      </div>
    </div>

    <div class="collapse" id="transportista" data-parent="#register">
      <fromtransportista />
    </div>

    <div class="collapse" id="monitorista" data-parent="#register">
      <frommonitorista />
    </div>
    </div>
  </div>
  
</template>

<script>
import fromtransportista from '@/components/Registrofrom/transportista.vue'
import frommonitorista from '@/components/Registrofrom/monitorista.vue'
import fromcenviapersonal from '@/components/Registrofrom/clienteepersonal.vue'
import fromcenviaempresa from '@/components/Registrofrom/clienteeempresa.vue'
export default {
  components: {
    fromtransportista,
    frommonitorista,
    fromcenviapersonal,
    fromcenviaempresa
  }
}
</script>