<template>
  <div>
    <TheHeader></TheHeader>
    <main>
      <section class="products__block">
        <div class="container">
          <div class="products">
            <VProductsItem
            v-for="ProductsItem in PRODUCTS"
            :key="ProductsItem.id"
            :ProductsItem="ProductsItem"
            ></VProductsItem>
          </div>
        </div>
      </section>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import VProductsItem from '@/components/VProductsItem.vue';
import { mapActions, mapGetters } from 'vuex';
//Свайпер
//import {Swiper, SwiperSlide} from "swiper/vue"
//import "swiper/css"
export default {
  name: "StorePage",
  components: { 
    TheHeader, 
    TheFooter, 
    VProductsItem
  },
  mounted(){
    this.GET_PRODUCTS()
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS'
    ])
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  }
}
</script>

<style lang="sass" scoped>
header
  position: static !important
.products__block
  margin-top: 60px
.products
  display: grid
  grid-template-columns: repeat(4,1fr)
  gap: 27px
  max-width: 1105px
  margin: 0 auto
</style>