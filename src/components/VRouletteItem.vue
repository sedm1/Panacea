<template>
  <div class="roulette__item" 
  :class="{'rare-1': RouletteItems.rare === '1','rare-2': RouletteItems.rare === '2','rare-3': RouletteItems.rare === '3','rare-4': RouletteItems.rare === '4'}"
  >
    <div class="item__img"><img :src="require(`@/assets/img/${RouletteItems.img}`)" alt="RouletteItem"></div>
    <div class="item__title">{{ RouletteItems.title }}</div>
    <div class="item__chance"><slot></slot></div>
  </div>
</template>

<script>
export default {
    name: "VRoletteItem",
    props: {
        RouletteItems: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
//item_bg_red.png - красный 4
//item_bg_purple.png - фиол 3
//item_bg_blue.png - синий 2
//item_bg_silver.png - серый 1
</script>

<style lang="sass" scoped>
.roulette__item
    padding:10px
    border-radius: 10px
    margin-bottom: 10px
    +bg
    +flexa
    flex-direction: column
    justify-content: space-between
    .item__img img
        max-height: 130px
        max-width: 100%
        width: auto
    .item__title
        font-weight: 500
        font-size: 12px
        color: rgba(255,255,255,0.7)
        margin-top: 20px
.rare-1
    background-image: url('~@/assets/img/item_bg_silver.png')
.rare-2
    background-image: url('~@/assets/img/item_bg_blue.png')
.rare-3
    background-image: url('~@/assets/img/item_bg_purple.png')
.rare-4
    background-image: url('~@/assets/img/item_bg_red.png')
.item__chance
    margin-top: 10px
    font-size: 12px
    font-weight: 500
</style>