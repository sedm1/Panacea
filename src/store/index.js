import { createStore } from 'vuex'
import axios from "axios"
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
    IsUserLogIn: true
  },
  getters: {
    PLAYERSUS(state){
      return state.playersUs
    },
    PLAYERSEU(state){
      return state.playersEu
    },
    USERSTATE(state){
      return state.IsUserLogIn
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
    }
  },
  mutations: {
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
    }
  },
  actions: {
    async GET_PLAYERS_US({commit}){
      try {
        //http://localhost:3000/playersUs
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
        //http://localhost:3000/playersEu - тестовое
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
        //http://localhost:3000/Stats - тестовое
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
        //ПЕРЕДЕЛАТЬ
        //http://localhost:3000/Purchase
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
        //http://localhost:3000/ItemsForRoulette
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
        //http://localhost:3000/LiveDropp
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
        //http://localhost:3000/Subscriptions
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
        //http://localhost:3000/Promocodes
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
    }
  }
})
