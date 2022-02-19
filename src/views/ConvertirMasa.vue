<template>
<div class="Body"> 
        <font face="Comic Sans MS,arial,verdana"><h1>Convertidor de Masa</h1></font>
    <div class="Main">
        <div class="form-group">
				 <font face="Comic Sans MS,arial,verdana"><h6> Ingrese la cantidad que desea converir:  <input type="number" v-model ="valor" ></h6></font>
          <br>
				
			</div>
        <div>
            <font face="Comic Sans MS,arial,verdana"><span>De:</span></font>
        </div>
        <select v-model="fromRate">
            <option value="g">Gramos</option>
            <option value="kg">Kilogramo</option>
            <option value="onz">Onzas</option>
            <option value="lb">libras</option>
            <option value="T">Tonelada</option>
        </select>
        <div>
            <font face="Comic Sans MS,arial,verdana"><span>Hacia:</span></font>
        </div>
        <select v-model="toRate">
            <option value="g">Gramos</option>
            <option value="kg">Kilogramo</option>
            <option value="onz">Onzas</option>
            <option value="lb">libras</option>
            <option value="T">Tonelada</option>
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
    data(){
        return{
            entrada_numero:"",
            conversiones_gramos:{ "g":1,"kg":0.001,"onz":0.03528,"lb":0.002205,"T":0.000001102},    
            salida: "",
            toRate: "g",
            fromRate:"kg"
        }},
        methods:{
            calcular:function(){
                let toRate_ = this.conversiones_gramos[this.toRate]
                let fromRate_ = this.conversiones_gramos[this.fromRate]
                var resultado = ((toRate_/fromRate_))*this.entrada_numero
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
	background-color: rgba(205, 112, 209, 0.83);
	color: rgb(0, 0, 0);
}
#Resultado h2 {
	font-size: 45px;
}
</style>