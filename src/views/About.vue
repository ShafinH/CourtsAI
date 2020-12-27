<template>
 <img :src="require('@/assets/Footer.png')" class="footer">
 
 <div class="home-content"> 
    <h2 class="title">CourtsAI</h2>

    <p class="caption">Using AI to make the court</p>
    <p class="caption1">system more fair</p>
    <router-link to="/deception" class="text-white">
      <div class="home-button">
            <p class="button-text">Get Started</p>
      </div>
    </router-link>
  </div>

  <img :src="require('@/assets/home-image.png')" class="home-image"/>
  <!--<div class="footer"></div>-->

 
  
</template>

<script>
export default {
  
}
</script>


<style >


.home-image {
  position: absolute;
  width: 500px;
  height: 500px;
  left: 146px;
  top: 262px;

  filter: drop-shadow(2px 10px 4px rgba(0, 0, 0, 0.25));
}

router-link {
    text-decoration: none;
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
}
.title {
  position: absolute;
  width: 388px;
  height: 104px;
  left: 720px;
  top: 361px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 85px;
  line-height: 104px;
    
  color: #165094;

}
.caption{
  position: absolute;
  left: 730px;
  top: 485px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: px;

  color: #525252;
}
.caption1{
  position: absolute;
  left: 730px;
  top: 520px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;

  color: #525252;
}

.home-button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px;

  position: absolute;
  width: 247px;
  height: 84px;
  left: 720px;
  top: 620px;

  background: linear-gradient(270deg, #165094 0%, rgba(50, 115, 211, 0.81) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1350px;
}

.home-button:hover{
  transform: scale(1.06);
}

.button-text{
  position: static;
  width: 210px;
  height: 43px;
  left: 18.5px;
  top: 20.5px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 43px;
  /* identical to box height */


  color: #FFFFFF;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 25px 0px;

}

  
</style>

