<template>
  <div>
    <TheHeader></TheHeader>
    <main>
        <div class="container">
            <div class="contacts__info">
                <h1 class="info__title">Contacts</h1>
                <p class="info__descript">Use Discord to contact the Administration <a>Panacea Dayz Discord</a></p>
            </div>
        </div>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
export default {
    name: "TheContacts",
    components: {
        TheHeader, TheFooter
    }
}
</script>

<style lang="sass" scoped>
body
    min-height: 100vh
header
    position: static !important
main
    margin-bottom: 200px
.contacts__info
    padding: 37px 30px
    border-radius: 35px
    background: url(~@/assets/img/news_bg.png)
    +bg
.info__title
    font-size: 32px
    margin: 21px 0px
.info__descript
    color: #C7A1AB
    margin-bottom: 17px
    a
        color: $red
</style>