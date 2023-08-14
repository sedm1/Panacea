<template>
  <div>
    <div class="block__header">
        <div class="block__title">Item</div>
        <div class="block__title">Promocode</div>
    </div>
    <div class="block__main">
        <VPromoItem
        v-for="VPromoItem in PROMO"
        :key="VPromoItem.id"
        :VPromoItem="VPromoItem"
        ></VPromoItem>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VPromoItem from './VPromoItem.vue';
export default {
    name: "ThePromo",
    mounted() {
        this.GET_PROMO();
    },
    methods: {
        ...mapActions([
            'GET_PROMO'
        ])
    },
    computed: {
        ...mapGetters([
            'PROMO'
        ])
    },
    components: { VPromoItem }
}
</script>

<style lang="sass" scoped>
.block__header
    width: 100%
    display: flex
    .block__title
        width: 50%
        text-align: center
        font-size: 16px
        font-weight: 500
@media screen and (max-width: $mobileContainer)
    .block__header
        margin-top: 50px
</style>