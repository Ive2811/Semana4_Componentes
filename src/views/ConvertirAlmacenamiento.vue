<template>
    <div class="body">
         <b-alert show variant="primary"><h1>Convertidor de almacenamiento.</h1></b-alert>
      <div class="main"> 
          <h6>Ingrese el número a convertir:  <input type="number" v-model ="valor" ></h6> 
          <br><br>
        
           <h6>Seleccione la medida desde donde desea convertir:  <select v-model="pasarDe">
         
            <option value="b">byte</option>
            <option value="KB">KiloByte</option>
            <option value="MB">MegaByte</option>
            <option value="GB">GigaByte</option>
            <option value="TB">TeraByte</option>
            <option value="PB">PetaByte</option>
            <option value="EB">ExaByte</option>
        </select></h6> 
        <br><br>
       
    
            <h6>Seleccione la medida a la que desea convertir:   <select v-model="pasarA">
          <option value="b">byte</option>
            <option value="KB">KiloByte</option>
            <option value="MB">MegaByte</option>
            <option value="GB">GigaByte</option>
            <option value="TB">TeraByte</option>
            <option value="PB">PetaByte</option>
            <option value="EB">ExaByte</option>

        </select></h6> 
        <br><br>
        <div>
        <b-button v-b-modal.modal-1 variant="outline-primary" v-on:click="conversion">Convertir</b-button>
  <b-modal id="modal-1" title="Resultado">
    <p class="my-4">El resultado de la conversión es: {{res}}</p>
  </b-modal>
</div>
     </div>
      </div>
</template>

<script>
export default({
    name:"almacenamiento",
    data(){return{
            valor:"",
            valores_conversiones:{
                "b":1073741824,
                "kb":1048576,
                "MB":1024,
                "GB":1,
                "TB":0.000977,
                "PB":0.000000954,
                "EB":0.000000000931,
                },    
            res: "",
            pasarDe: "b",
            pasarA:"GB"
        }},
    methods:{
            conversion:function(){
                let pasarA = this.valores_conversiones[this.pasarDe]
                let pasarDe = this.valores_conversiones[this.pasarA]
                var resultado = ((pasarDe/pasarA))*this.valor
                this.res =resultado
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