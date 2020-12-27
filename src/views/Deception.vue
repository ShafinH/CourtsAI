<template>
  <div id="app" style="margin-bottom: 100px">
    <center> 
      <h2>
        Detect Deception in Text or an Image
      </h2>
      <p style="color: gray" class="subtext">Our deception detecter is powered by a Tensorflow RNN text classification model and our image upload is powered by Google Cloud's Vision API.</p>
      <hr />

    <form v-on:submit.prevent="detect"> 
      <label>Enter Text:</label>
      <textarea class="form-control" v-model="text" rows="5">Enter the text here</textarea> 


        <br/>

      <p>or...</p>


    <label>Choose Image:</label>
    <input type="file"  style="margin-left: 5px;" @change="previewImage">

    <br/>

    <img class="preview" :src="imageData" v-if="imageData.length > 0" id="image">

    <br/>

    <button type="button" v-if="imageData.length > 0" class="btn text-white" @click="ocr">Upload</button>


    <br/>

    <p v-if="runningOCR" style="margin-top: 35px;">Running OCR...</p>
    <p v-if="OCRdone && !runningOCR" style="margin-top: 35px;">OCR Complete</p>

    <button class="btn text-white" type="submit">Detect</button>


    <p v-if="runningModel" style="margin-top: 35px;">Analysing...</p>


    <br/> 
    <br/>      
    <br/>     

    {{ prediction }}

    </form>

    </center>

  </div>
    


</template>

<script>
/* eslint-disable */
import { createWorker, PSM, OEM, recognize } from 'tesseract.js';
const worker = createWorker({
  logger: m => console.log(m),
});

import * as tf from '@tensorflow/tfjs';


export default {
  data(){
    return {
      text: "",
      imageData: "",
      runningOCR: false,
      OCRdone: false,
      runningModel: false,
      prediction: "",
      number: 1,
    }
  },
  methods: {
    previewImage (e){
      this.OCRdone = false;
      var input = e.target;

      if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = (e) => {
          this.imageData = e.target.result;
        }

        reader.readAsDataURL(input.files[0])
      }
    },
    async ocr() {
      this.prediction = "";
      this.runningOCR = true;
      const img = document.getElementById('image');
      console.log(img);
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng', OEM.LSTM_ONLY);
      await worker.setParameters({
        tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
      });
      const { data: { text } } = await worker.recognize(img);
      console.log(text)
      this.text = text;

      this.runningOCR = false;
      this.OCRdone = true;
      
    },
    detect() {
      this.prediction = "";
      this.runningModel = true;

      const model = await tf.loadLayersModel('./models/RNN/model.json');


      const input = this.text;
      const result = model.predict(input)
    
      if(result == 1){
          this.prediction = "No deception has been detected" 
        }
        else {
          this.prediction = "Deception has been detected"
        }
  
        this.runningModel = false;
        this.modelDone = true;

    }
  },
  mounted(){
    

  }
}

</script>

<style scoped>

.subtext{
  width: 350px;
}

textarea {
  width: 25%;
}

.btn {
  background-color: #3273D3;
  margin-top: 25px;
}
.btn:hover{
  background-color: #165094;
}

.preview {
  padding: 15px;
  width: 500px;
  height: auto;
}
</style>