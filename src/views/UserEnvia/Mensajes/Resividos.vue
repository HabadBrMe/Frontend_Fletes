<template>
    <div class="card">
  <div class="card-header">
    <h1>Mensajes Enviados de YOMERO </h1>
  </div>

  <div class="card">
    <div class="card-body">
        <form>
            <div class="row">
                <div>
                    <h3>Buscar en los mensajes</h3>
                </div>
                <div>
                    <input type="email" class="form-control" id="buscar" name="buscar" placeholder="Buscar por correo" requiered>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
            </div>
        </form>
    </div>
  </div>
  
  <div class="card-body">
	<table class="table table-hover table-bordered table-dark table-striped table-resposive">
    <thead >
        <tr>
		<td>Para</td>
		<td>Asunto</td>
		<td>Mensaje</td>
		<td>fecha</td>
	    </tr>
    </thead>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>        
        </tr>
	</table>		
    </div>
</div>
</template>