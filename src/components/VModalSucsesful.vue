<template>
  <div class="modal__sucsesful" :class="{'modal__sucsesful-active': IsOpen === true}">
    <div class="suc__header">
        <div class="header__img"><img src="../assets/img/svg/suc.svg" alt="suc"></div>
        <h1 class="suc__title">Successful!</h1>
    </div>
    <div class="suc__main">
        <p class="suc__descript">Thank you for your support.</p>
        <p class="suc__descript">This helps us to develop the server</p>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';
export default {
    name: "VModalSucsesful",
    props: {
        IsOpen: {
            type: Boolean,
            default(){
                return false
            }
        }
    },
    setup(props, {emit}){
        watch(() => props.IsOpen, (first) => {
            if(first == true) setTimeout(() => emit('CloseModalSucses'), 2500);
        });
    }
}
</script>

<style lang="sass" scoped>
.modal__sucsesful
    border-radius: 17px
    background: linear-gradient(162deg, #541921 0%, #17090B 100%)
    position: absolute
    top: 10px
    right: 10px
    z-index: $absIndex
    padding: 50px
    border: 1px solid $pink
    transform: scale(0)
    transition: .4s
    &-active
        transform: scale(1)
.suc__header
    +flexa
    .header__img
        margin-right: 10px
        width: 20px
        height: 20px
    .suc__title
        font-size: 32px
        font-weight: 700
.suc__main
    margin-top: 15px
    .suc__descript
        font-size: 16px
        font-weight: 700
@media screen and (max-width: $mobileContainer)
    .modal__sucsesful
        padding: 35px
    .suc__header 
        .suc__title
            font-size: 25px
    .suc__main
        .suc__descript
            font-size: 12px
    
</style>