<template>
  <div class="modalBg " :class="{'modalBg-active': IsOpen === true}">
    <div class="modal__main">
        <h1 class="main__title">You won</h1>
        <div class="item__img"><img :src="require(`@/assets/img/${ItemImg}`)" alt="ItemImg"></div>
        <div class="item__title">{{ ItemTitle }}</div>
        <button class="recive">Recive</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "VRouletteModal",
    props: {
        IsOpen: {
            type: Boolean,
            default(){
                return false
            }
        },
        ItemImg: {
            type: String,
            default(){
                return ""
            }
        },
        ItemTitle: {
            type: String,
            default(){
                return ""
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.modal__main
    +flexa
    flex-direction: column
    padding: 50px 0px
    max-width: 400px
    width: 100%
.main__title
    font-size: 31px
    font-weight: 600
.item__img
    img
        max-height: 250px
.item__title
    color: $pink
    font-size: 21px
    font-weight: 600
.recive
    background: linear-gradient(90deg, $red 0%, $pink 100%)
    position: absolute
    bottom: 0
    left: 50%
    transform: translate(-50%, 50%)
    border-radius: 10px
    font-size: 16px
    font-weight: 600
    padding: 15px 50px
    transition: .3s
    &:hover
        transform: scale(1.04) translate(-47%, 50%)
        box-shadow: 0px 4px 89px rgba(225,40,62,0.26)
</style>