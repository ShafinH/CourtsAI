<template>
     <div id="app" style="margin-bottom: 100px">
         <center>

            <h2>
            Predicting Jail Sentencing
            </h2>
            <p style="color: gray" class="subtext">The unbiased jail sentencer can be used by government officials on defendants found guilty. It is powered by a Regression Linear Model.</p>
            <hr />


            <input type="file"  style="margin-top: 15px;" id="input">

            <br/>
            <br/>   

            <button class="btn btn-primary text-white" @click="predict">Sentence</button>

            <br/>
            <br/>
            <br/>

            <p v-if="running">Predicting...</p>

            {{ prediction }}

         </center>
     </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';



export default {

    data(){
        return{
            prediction: "",
            running: false
        }
    },
    methods: {
        predict(){
            this.prediction = "";
            this.running = true;
         
         
            const model = await tf.loadLayersModel('../models/sentence-linear/model.json');


            const input = document.getElementById(input);
            const result = model.predict(input);

            
            this.running = false;
            this.prediction = result + " years"
        }
    }    
}
</script>

<style scoped>
.subtext{
  width: 350px;
}
.btn {
  background-color: #3273D3;
  margin-top: 25px;
}
.btn:hover{
  background-color: #165094;
}
</style>
