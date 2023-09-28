import { createStore } from 'vuex'
import axios from "axios"
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user']
})
export default createStore({
  state: {
    playersUs: [],
    playersEu: [],
    stats: [],
    promo: [],
    items: [],
    live_items: [],
    subscriptions: [],
    allpromo: [],
    purchhistory: [],
    products: [],
    user: {
      name: '',
      IsUserLogIn: false,
      balance: "0.00",
      img: "",
      level: 1,
      SteamId: ""
    },
    server: {
      UsOnline: 57,
      MaxUsOnline: 127,
      EuOnline: 10,
      MaxEuOnline: 80
    }
  },
  getters: {
    PLAYERSUS(state){
      return state.playersUs
    },
    PLAYERSEU(state){
      return state.playersEu
    },
    USER(state){
      return state.user
    },
    SERVER(state){
      return state.server
    },
    STATS(state){
      return state.stats
    },
    PROMO(state){
      return state.promo
    },
    ITEMS(state){
      return state.items
    },
    LIVE_ITEMS(state){
      return state.live_items
    },
    SUBSCRIPTIONS(state){
      return state.subscriptions
    },
    ALLPROMO(state){
      return state.allpromo
    },
    PURCHHISTORY(state){
      return state.purchhistory
    },
    PRODUCTS(state){
      return state.products
    }
  },
  mutations: {
    SET_NEW_USER_DATE: (state, SteamDate) => {
      state.user.img = SteamDate[0]
      state.user.name = SteamDate[1]
      state.user.IsUserLogIn = true
      window.location.search = ""
    },
    SET_USPLAYERS_TO_STATE: (state, playersUs) => {
      state.playersUs = playersUs
    },
    SET_EUPLAYERS_TO_STATE: (state, playersEu) => {
      state.playersEu = playersEu
    },
    SET_STATS_TO_STATE: (state, stats) => {
      state.stats = stats
    },
    SET_PROMO_TO_STATE: (state, promo) =>{
      state.promo = promo
    },
    SET_ITEMS_TO_STATE: (state, items) =>{
     state.items = items 
    },
    SET_LIVE_ITEMS_TO_STATE: (state, live_items) => {
      state.live_items = live_items
    },
    SET_SUBSCRIPTIONS_TO_STATE: (state, subscriptions) => {
      state.subscriptions = subscriptions
    },
    SET_ALLPROMO_TO_STATE: (state, allpromo) => {
      state.allpromo = allpromo
    },
    SET_PURCHHISTORY_TO_STATE: (state, purchhistory) => {
      state.purchhistory = purchhistory
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    }
  },
  actions: {
    async GET_PLAYERS_US({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersUs.json - для гит
        const UsPlayers = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersUs.json", {
          method: "GET"
        })
        commit("SET_USPLAYERS_TO_STATE", UsPlayers.data)
        return UsPlayers.data
      } catch (error) {
        console.log("Ошибка при получении игроков us" + error)
        return error
      }
    },
    async GET_PLAYERS_EU({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersEu.json - для гита
        const EuPlayers = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersEu.json", {
          method: "GET"
        })
        commit("SET_EUPLAYERS_TO_STATE", EuPlayers.data)
        return EuPlayers.data
      } catch (error) {
        console.log("Ошибка при получении игроков Eu" + error)
        return error
      }
    },
    async GET_STATS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Stats.json - для гит
        const Stats = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Stats.json", {
          method: "GET"
        })
        commit("SET_STATS_TO_STATE", Stats.data)
        return Stats.data
      } catch (error) {
        console.log("Ошибка при получении статов" + error)
        return error
      }
    },
    async GET_PROMO({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Purchase.json
        const Promo = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Purchase.json", {
          method: "GET"
        })
        commit("SET_PROMO_TO_STATE", Promo.data)
        return Promo.data
      } catch (error) {
        console.log("Ошибка при получении промокодов" + error)
        return error
      }
    },
    async GET_ITEMS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/ItemForRoulette.json
        const Items = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/ItemForRoulette.json", {
          method: "GET"
        })
        commit("SET_ITEMS_TO_STATE", Items.data)
        return Items.data
      } catch (error) {
        console.log("Ошибка при получении Товаров" + error)
        return error
      }
    },
    async GET_LIVE_ITEMS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/LiveDrops.json
        const Live_items = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/LiveDrops.json", {
          method: "GET"
        })
        commit("SET_LIVE_ITEMS_TO_STATE", Live_items.data)
        return Live_items.data
      } catch (error) {
        console.log("Ошибка при получении Живых Товаров" + error)
        return error
      }
    },
    async GET_SUBSCRIPTIONS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Subscriptions.json
        const Subscriptions = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Subscriptions.json", {
          method: "GET"
        })
        commit("SET_SUBSCRIPTIONS_TO_STATE", Subscriptions.data)
        return Subscriptions.data
      } catch (error) {
        console.log("Ошибка при получении Подписки" + error)
        return error
      }
    },
    async GET_ALLPROMO({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Promocodes.json
        const Allpromo = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Promocodes.json", {
          method: "GET"
        })
        commit("SET_ALLPROMO_TO_STATE", Allpromo.data)
        return Allpromo.data
      } catch (error) {
        console.log("Ошибка при получении всех промокодов" + error)
        return error
      }
    },
    async GET_PURCHHISTORY({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/PurchHistory.json
        const PurchHistory = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/PurchHistory.json", {
          method: "GET"
        })
        commit("SET_PURCHHISTORY_TO_STATE", PurchHistory.data)
        return PurchHistory.data
      } catch (error) {
        console.log("Ошибка при получении всех промокодов" + error)
        return error
      }
    },
    async GET_PRODUCTS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Products.json
        const Products = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Products.json", {
          method: "GET"
        })
        commit("SET_PRODUCTS_TO_STATE", Products.data)
        return Products.data
      } catch (error) {
        console.log("Ошибка при получении всех промокодов" + error)
        return error
      }
    },
    //async SET_NEW_USER({commit}, SteamId){
    //   try {
    //     const SteamApiKey = "FCED6F17167C667A153501D2A92C3827"
    //     const SteamDate = await axios(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${SteamApiKey}&steamids=${SteamId}`, {
    //       method: "GET"
    //     })
    //     //Уже полученные и отсортированные данные
    //     const StemFullDate = SteamDate.data['response']['players'][0]
    //     commit('SET_NEW_USER_DATE', [StemFullDate['avatarfull'], StemFullDate['personaname']])
    //   } catch(error){
    //     console.log("Ошибка при занесенгии айди")
    //   }
    // }
    async SET_NEW_USER({commit}){
      try{
        const UserDate = await axios(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${SteamApiKey}&steamids=${SteamId}`, {
          method: "GET"
        })
      } catch(error){
          console.log("Ошибка при занесенгии айди")
        }
    }
  },
  plugins: [vuexLocal.plugin]
})