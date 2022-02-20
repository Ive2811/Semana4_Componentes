<template>
    <div class="Body" style="background:lightblue">
        <br>
        <div class="main"> 
        <h1> Diferentes tipo de medidas de tiempo</h1>
          <b-alert show variant="success">Ingrese la cantidad que desea convertir:</b-alert>

        <div class="Main">
            <input type="text" v-model ="valor" >
        <div>
            <span>selecciona la medida que deseas convertir:</span>
        </div>
        <select v-model="conver1">
            <option value="Años">Años</option>
            <option value="Meses">Meses</option>
            <option value="Semanas">Semanas</option>
            <option value="Dias">Dias</option>
            <option value="Horas">Horas</option>
            <option value="Minuto">Minuto</option>
            <option value="Segundos">Segundos</option>
            <option value="Milisegundos">Milisegundos</option>
            <option value="Microsegundos">Microsegundos</option>
            <option value="Nanosegundos">Nanosegundos</option>
        </select>
        <br>
        <div>
            <span>¿Hasta que medidas deseas convertir?</span>
        </div>
        <select v-model="num2">
            <option value="Años">Años</option>
            <option value="Meses">Meses</option>
            <option value="Semanas">Semanas</option>
            <option value="Dias">Dias</option>
            <option value="Horas">Horas</option>
            <option value="Minuto">Minuto</option>
            <option value="Segundos">Segundos</option>
            <option value="Milisegundos">Milisegundos</option>
            <option value="Microsegundos">Microsegundos</option>
            <option value="Nanosegundos">Nanosegundos</option>
        </select>
        <br>
        <button v-on:click="calcular" v-b-modal.modal-1>calcular</button>
        <b-modal id="modal-1" title="Resultado">
        <p class="my-4">El resultado de la conversión es  : </p>
        <p class="my-4">{{valor}} {{conver1}} equivalen a {{resultado1}} {{num2}}</p>
        </b-modal>
        </div>
      

        </div>
    </div>
</template>

<script>
export default({
    name:"tiempo",
    data(){return{
            valor:"",
            conversiones_gramos:{   "Años":0.0000000317,
                                    "Meses":0.00000038,
                                    "Semanas":0.00000165,
                                    "Dias":0.0000116,
                                    "Horas":0.00027799999999999998,
                                    "Minuto":0.016666666666667,
                                    "Segundos":1,
                                    "Milisegundos":1000,
                                    "Microsegundos":1000000,
                                    "Nanosegundos":1000000000},    
            resultado1: "",
            num2: "",
            conver1:""
        }},
    methods:{
            calcular:function(){
                let num2_ = this.conversiones_gramos[this.num2]
                let conver1_ = this.conversiones_gramos[this.conver1]
                var resultado = (((num2_/conver1_))*this.valor).toFixed(3)
                this.resultado1 =resultado
            }
        }
})
</script>

<style>

.main {
    width: 50vw;
    margin: auto;
    padding: 30px;
    border-radius: 10px;
    border-style: solid;
    border-color:rgb(40, 23, 192);
    background-color: rgba(56, 69, 255, 0.472);
    color: rgb(0, 0, 0);
}
</style>