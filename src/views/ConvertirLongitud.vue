<template>
    <div class="nuevoB">
        <font face="Comic Sans MS,arial,verdana"><b-alert show variant="warning"><h1>Convertidor de Longitudes</h1></b-alert></font>
        <br>
        <div class="main"> 
         <h5>Ingrese el número a convertir:  <input type="number" v-model ="valor" ></h5> 
          <br>
        <div >
            <h5>Ingrese la longitud que desea convertir:</h5>
        </div>
        <select v-model="convertirDe" class= nuevo2>
            <option value="Mm">Milítmetros</option>
            <option value="Cm">Centímetros</option>
            <option value="Dm">Decímetros</option>
            <option value="M">Metros</option>
            <option value="Dam">Decámetro</option>
            <option value="hm">Hectámetro</option>
            <option value="km">Kilómetro</option>
            <option value="ft">Pie</option>
            <option value="in">Pulgada</option>
            <option value="yd">Yarda</option>
            <option value="mi">Milla</option>
        </select>


        <br>
        <div>
            <h5>Selecione la longitud que desea convertir:</h5>
            <br>
        </div>
        <select v-model="convertirA" class = nuevo3>
            <option value="Mm">Milítmetros</option>
            <option value="Cm">Centímetros</option>
            <option value="Dm">Decímetros</option>
            <option value="M">Metros</option>
            <option value="Dam">Decámetro</option>
            <option value="hm">Hectámetro</option>
            <option value="km">Kilómetro</option>
            <option value="ft">Pie</option>
            <option value="in">Pulgada</option>
            <option value="yd">Yarda</option>
            <option value="mi">Milla</option>
        </select>
        <br>
        <br>
        <b-button v-b-modal.modal-1 variant="btn btn-warning" v-on:click="convertir" class = .p>Convertir</b-button>
        
        <div>
        <b-modal id="modal-1" title="Resultado">
        <p class="my-4">El resultado de la conversión es: {{resul}}</p>
     </b-modal>
     </div>
      </div>
    </div>
</template>
<script>
export default({
    name:"longitud",
     data(){return{
            valor:"",
            medidas:{   "Mm":1000,
                        "Cm":100,
                        "Dm":10,
                        "M":1,
                        "Dam":0.1,
                        "hm":0.01,
                        "km":0.001,
                        "ft":3.37,
                        "in":39.37,
                        "yd":1.094,
                        "mi":0.000621},    
            resul: "",
            convertirDe: "Mm",
            convertirA:"M"
        }},
        methods:{
            convertir:function(){
                let ConvertirA = this.medidas[this.convertirDe]
                let convertirDe = this.medidas[this.convertirA]
                var resultado = ((convertirDe/ConvertirA))*this.valor
                this.resul =resultado         
            }
        }
})
</script>

<style>
.nuevoB {
	background-color: rgb(249, 250, 250);
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
    
}

.nuevo2 {
	width: 25vw;
	margin: auto;
	padding: 5px;
	border-radius: 5px;
	background-color: rgba(243, 233, 83, 0.994);
	color: rgb(0, 0, 0);
}
.nuevo3 {
	width: 25vw;
	margin: auto;
	padding: 5px;
	border-radius: 5px;
	background-color: rgba(244, 247, 80, 0.987);
	color: rgb(0, 0, 0);
}
.p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}

.main {
    width: 50vw;
    margin: auto;
    padding: 30px;
    border-radius: 10px;
    border-style: solid;
    border-color:rgb(228, 253, 2);
    background-color: rgba(200, 218, 45, 0.472)
   
}

</style>