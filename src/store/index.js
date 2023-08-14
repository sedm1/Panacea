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
    }
  },
  actions: {
    async GET_PLAYERS_US({commit}){
      try {
        const UsPlayers = await axios("http://localhost:3000/playersUs", {
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
        const EuPlayers = await axios("http://localhost:3000/playersEu", {
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
        const Stats = await axios("http://localhost:3000/Stats", {
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
        const Promo = await axios("http://localhost:3000/Promo", {
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
        const Items = await axios("http://localhost:3000/ItemsForRoulette", {
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
        const Live_items = await axios("http://localhost:3000/LiveDropp", {
          method: "GET"
        })
        commit("SET_LIVE_ITEMS_TO_STATE", Live_items.data)
        return Live_items.data
      } catch (error) {
        console.log("Ошибка при получении Живых Товаров" + error)
        return error
      }
    }
  }
})
