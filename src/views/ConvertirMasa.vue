<template>
<div class="Body"> 
        <font face="Comic Sans MS,arial,verdana"><b-alert show variant="danger"><h1>Convertidor de Masa</h1></b-alert></font>
    <div class="Main">
        <div class="form-group">
				 <font face="Comic Sans MS,arial,verdana"><h6> Ingrese la cantidad que desea convertir:  <input type="number" v-model ="entrada_numero" ></h6></font>
          <br>
				
			</div>
        <div>
            <font face="Comic Sans MS,arial,verdana"><span>De:</span></font>
        </div>
        <select v-model="convertFrom">
            <option value="g">Gramos</option>
            <option value="kg">Kilogramos</option>
            <option value="onz">Onzas</option>
            <option value="lb">Libras</option>
            <option value="T">Toneladas</option>
        </select>
        <div>
            <font face="Comic Sans MS,arial,verdana"><span>Hacia:</span></font>
        </div>
        <select v-model="convertTo">
            <option value="g">Gramos</option>
            <option value="kg">Kilogramos</option>
            <option value="onz">Onzas</option>
            <option value="lb">Libras</option>
            <option value="T">Toneladas</option>
        </select>
        <br>
        <br>
         <font face="Comic Sans MS,arial,verdana"><b-button v-b-modal.modal-1 variant="btn btn-info" v-on:click="calcular">Convertir</b-button></font>
    </div>
   <div>
  <b-modal id="modal-1" title="Resultado">
    <p class="my-4">El resultado de la conversión es: {{salida}}</p>
  </b-modal>
</div>
</div>
</template>
<script>
export default ({
    name:"Masa",
    data(){return{
            entrada_numero:"",
            conversiones_gramos:{ "g":1,
                                  "kg":0.001,
                                  "onz":0.03528,
                                  "lb":0.002205,
                                  "T":0.000001102},    
            salida: "",
            convertTo: "g",
            convertFrom:"kg"
        }},
        methods:{
            calcular:function(){
                let convertTo = this.conversiones_gramos[this.convertTo]
                let convertFrom = this.conversiones_gramos[this.convertFrom]
                var resultado = ((convertTo/convertFrom))*this.entrada_numero
                this.salida =resultado         
            }
        }
})
</script>
<style>
.Body {
	background-color: rgb(241, 246, 250);
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
}
.Main {
	width: 50vw;
	margin: auto;
	padding: 50px;
	border-radius: 30px;
    border-color:rgb(5, 5, 5);
	background-color: rgba(208, 131, 211, 0.83);
	color: rgb(0, 0, 0);
}
#Resultado h2 {
	font-size: 45px;
}
</style>
