<template>
  <div class="index">
    <TheHeader></TheHeader>
    <div class="index_in">
      <CarCards />
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import CarCards from "@/components/CarCards";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "TheIndex",
  components: {
    CarCards,
    TheHeader,
    TheFooter
},
};
</script>

<style lang="sass" scoped>
.index  
  overflow: hidden 
  .index_in  
    position: relative 
    .kub_top_bg  
      position: absolute 
      top: -370px 
      left: -330px 
     
    .kvadrat_left_bg  
      position: absolute 
      bottom: -411px 
      left: -541px 
     
    .kvadrat_right_bg  
      position: absolute 
      bottom: -272px 
      right: -540px 
     
    .klipartz  
      position: absolute 
      bottom: -122px 
      right: -161px 
      z-index: 1 
     
    .kub_bottom_bg  
      position: absolute 
      right: -330px 
      bottom: -370px 
     
   
 

@media (max-width: 992px)  
  .index  
    .index_in  
      .kub_top_bg  
        top: -270px 
        left: -230px 
        height: 700px 
       
      .kvadrat_left_bg  
        bottom: -72px 
        left: -240px 
        height: 561px 
       
      .kvadrat_right_bg  
        bottom: -72px 
        height: 561px 
        right: -240px 
       
      .klipartz  
        bottom: -45px 
        right: -63px 
        height: 245px 
       
      .kub_bottom_bg  
        height: 700px 
        right: -230px 
        bottom: -270px 
       
     
   
 
</style>
