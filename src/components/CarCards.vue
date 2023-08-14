<template>
  <div>
    <section class="car_cards" :class="bgblur ? 'car_cards_blur' : ''">
      <div class="card_item" v-for="item of 8" :key="item">
        <div class="card_item_in">
          <div class="car_price">$91.69</div>
          <div class="card_img">
            <img src="@/assets/img/car_img.png" alt="" />
          </div>
          <h2 class="card_title">
            <span class="title_in"><span>RANGE ROVER SPORT</span></span>
            <!--<router-link to="/"
              ><svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.75618 0.0110091C7.21475 0.185993 6.13971 0.506672 4.96268 1.14249C3.57114 1.89424 2.2841 3.10336 1.43008 4.46127C0.713038 5.60138 0.286939 6.78304 0.0470561 8.29642C-0.0156854 8.69221 -0.0156854 10.3165 0.0470561 10.7123C0.39643 12.9166 1.20868 14.5992 2.63582 16.0752C3.78119 17.2598 5.00969 18.0377 6.52471 18.5376C7.57164 18.8831 8.32364 19 9.5 19C10.6764 19 11.4284 18.8831 12.4753 18.5376C13.9903 18.0377 15.2188 17.2598 16.3642 16.0752C17.7913 14.5992 18.6036 12.9166 18.9529 10.7123C19.0157 10.3165 19.0157 8.69221 18.9529 8.29642C18.6656 6.48351 18.0983 5.10661 17.0816 3.75491C16.749 3.31258 16.0314 2.56615 15.5632 2.17545C14.2447 1.07515 12.6499 0.366403 10.8509 0.081181C10.5039 0.0261734 9.05125 -0.0225158 8.75618 0.0110091ZM10.493 1.79344C11.8466 1.96935 13.1081 2.49122 14.2345 3.34131C14.6262 3.63686 15.3713 4.38147 15.667 4.77284C16.7328 6.18331 17.2729 7.77466 17.2729 9.50435C17.2729 11.234 16.7328 12.8254 15.667 14.2359C15.3713 14.6272 14.6262 15.3718 14.2345 15.6674C12.8232 16.7325 11.2308 17.2723 9.5 17.2723C7.7692 17.2723 6.17682 16.7325 4.76546 15.6674C4.37384 15.3718 3.62875 14.6272 3.333 14.2359C2.26718 12.8254 1.72705 11.234 1.72705 9.50435C1.72705 7.77466 2.26718 6.18331 3.333 4.77284C3.62875 4.38147 4.37384 3.63686 4.76546 3.34131C5.87811 2.50163 7.14 1.97575 8.47724 1.79448C8.99197 1.72468 9.9602 1.7242 10.493 1.79344ZM9.11686 4.09224C8.50666 4.31922 8.19801 4.97786 8.42175 5.57547C8.79612 6.57538 10.2039 6.57538 10.5782 5.57547C10.7806 5.03506 10.537 4.41756 10.0156 4.14873C9.81058 4.04307 9.33022 4.01285 9.11686 4.09224ZM9.22322 8.10805C9.02418 8.18194 8.9071 8.27411 8.77477 8.46107L8.6632 8.61869L8.65282 11.4495C8.64137 14.5781 8.63293 14.4555 8.87768 14.707C9.30125 15.1421 10.0327 15.017 10.2855 14.4662C10.3498 14.3262 10.3538 14.1538 10.3546 11.5195C10.3555 8.49218 10.363 8.61018 10.1518 8.35982C9.9409 8.10987 9.52336 7.99666 9.22322 8.10805Z"
                  fill="white"
                  fill-opacity="0.74"
                /></svg>
            </router-link>-->
          </h2>
          <p class="card_description">
            Краткое описание услуги тут в пару строк для примера бла-бла,
            рыба-текст для крутых ребят.
          </p>
          <button class="buy_btn" @click="PurchaseModal(item)">Купить</button>
        </div>
      </div>
    </section>
    <section
      class="purchase_modal_container"
      :class="purchasemodal ? 'purchase_modal_active' : ''"
    >
      <div class="purchase_modal">
        <div class="purchase_modal_in">
          <div class="swiper_container">
            <div class="swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
              >
                <path
                  opacity="0.8"
                  d="M1.8889 8.74228e-07L12.531 10L1.8889 20L-7.35981e-05 18.225L8.75306 10L-7.51285e-05 1.775L1.8889 8.74228e-07Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="swiper_container_center">
              <div class="swiper purchaseSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item of 5" :key="item">
                    <img
                      data-v-827c66c2=""
                      src="@/assets/img/modal_car_img.png"
                      alt="modal_car_img"
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
              >
                <path
                  opacity="0.8"
                  d="M10.761 20L0.118896 10L10.761 0L12.65 1.775L3.89684 10L12.65 18.225L10.761 20Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div class="purchase_body">
            <h1 class="title">RANGE ROVER SPORT</h1>
            <p class="description">
              Lörem ipsum sovis lonade till stenokaledes isaligen jesamma. Rer.
              Vin gasamma tevis reasönat i tiv. Parande exorade fade oaktat
              vakyst utan resoktigt. Dinymykana rången nårenöliga. Sajongen
              vitreliga.
              <br />
              <br />
              <br />
              Jomyr epeling. Dekyde vill vatreskap i hypopell i son. Tresat
              ganeng vikoska medan fis. Parada ebyment pseudojevis tur. Nysm
              semimynas. Vapresk telengen eller lysena ifall havis inklusive
              ultravyngar.
              <br />
              <br />
              <br />
              Såsk. Hexangen bende. Sogt lynas nytissade som terasm, infrakode.
              Derörade lande när sung och salartad. Jefal kagobel ultradonat.
              Lan aröskap.
            </p>
            <button
              class="purchase_btn"
              @click="(purchasemodal = false)"
            >
              Purchase
            </button>
          </div>
          <button
            class="exit_btn"
            @click="
              purchasemodal = false;
              bgblur = false;
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
                fill="white"
                fill-opacity="0.2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <section
      id="modalDonation"
      :class="addModalvisible ? 'modalDonation_active' : ''"
    >
      <div class="modalDonation_in">
        <div
          class="close_button"
          @click="
            addModalvisible = false;
            bgblur = false;
          "
        >
          <svg data-v-827c66c2="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path data-v-827c66c2="" d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="white" fill-opacity="0.2"></path></svg>
        </div>
        <h2>Donation</h2>
        <span>Donate to Panacea Project and its development</span>
        <p>How much would you like to donate?</p>
        <form @submit.prevent action="" class="donadte_form">
          <div class="buttons">
            <div v-for="btnItem of buttons_donate" :key="btnItem.id">
              <button
                class="btn_donate"
                @click="addDonateModal(btnItem.id)"
                :class="btnItem.visable ? 'bg_active' : ''"
              >
                {{ btnItem.text }}<span>$</span>
              </button>
            </div>
          </div>
          <div class="other_donate">
            <input placeholder="Other amount" />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="comment"
            ></textarea>
          </div>
          <div class="last_button">
            <button
              @click="
                addModalvisible = false;
                successful = true;
              "
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </section>
    <section
      id="priorityModal"
      :class="priorityModalVarable ? 'priorityModal_active' : ''"
    >
      <div class="priorityModal_in">
        <div
          class="close_button"
          @click="
            priorityModalVarable = false;
            bgblur = false;
          "
        >
          <svg data-v-827c66c2="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path data-v-827c66c2="" d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="white" fill-opacity="0.2"></path></svg>
        </div>
        <h2>Priority queue</h2>
        <span
          >By purchasing Priority Que, you will log into the server before
          others. The privilege is valid for a month.</span
        >
        <p>Enter details</p>
        <form action="" @submit.prevent>
          <div class="select_wrapper">
            <div class="priority_select priority_select_one">
              <div
                class="select_btn"
                @click="selectMenufun()"
                :class="selectMenu ? 'select_btn_active' : ''"
              >
                <div class="select_val">Days</div>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" />
                </svg>
              </div>
              <div
                class="select_menu"
                :class="selectMenu ? 'select_menu_active' : ''"
              >
                <div class="menu_item" @click="selectMenufun('7 days')">
                  7 days
                </div>
                <div class="menu_item" @click="selectMenufun('30 days')">
                  30 days
                </div>
                <div class="menu_item" @click="selectMenufun('Lifetime')">
                  Lifetime
                </div>
              </div>
            </div>
            <div class="priority_select priority_select_two">
              <div
                class="select_btn"
                @click="selectMenufuntwo()"
                :class="selectMenutwo ? 'select_btn_active' : ''"
              >
                <div class="select_val">Server</div>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" />
                </svg>
              </div>
              <div
                class="select_menu"
                :class="selectMenutwo ? 'select_menu_active' : ''"
              >
                <div class="menu_item" @click="selectMenufuntwo('Georgia')">
                  Georgia
                </div>
                <div class="menu_item" @click="selectMenufuntwo('Texas')">
                  Texas
                </div>
                <div class="menu_item" @click="selectMenufuntwo('California')">
                  California
                </div>
              </div>
            </div>
          </div>
          <div class="order_total" :class="totalw ? 'order_total_active' : ''">
            Order total
            <div class="price">100$</div>
          </div>
          <button
            @click="
              priorityModalVarable = false;
              bgblur = false;
            "
          >
            Buy
          </button>
        </form>
      </div>
    </section>
    <section
      class="successful_modal"
      :class="successful ? 'successful_modal_active' : ''"
    >
      <div class="successful_modal_in">
        <button
          class="close_btn"
          @click="
            successful = false;
            bgblur = false;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
        </button>
        <h1 class="title">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.80835"
              width="12.8696"
              height="12.8696"
              rx="6.43478"
              fill="#E4354A"
            />
            <path
              d="M5.467 9.61682L3.2168 7.36662L3.77935 6.80407L5.467 8.49172L9.08903 4.86969L9.65158 5.43224L5.467 9.61682Z"
              fill="white"
            />
          </svg>

          Successful!
        </h1>
        <p class="description">
          Thank you for your support. <br />
          This helps us to develop the server
        </p>
      </div>
    </section>
    <section
      class="successful_error_modal"
      :class="successful_error ? 'successful_error_modal_active' : ''"
    >
      <div class="successful_modal_in">
        <button
          class="close_btn"
          @click="
            successful_error = false;
            bgblur = false;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
        </button>
        <h1 class="title">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.80835"
              width="12.8696"
              height="12.8696"
              rx="6.43478"
              fill="#E4354A"
            />
            <path
              d="M5.467 9.61682L3.2168 7.36662L3.77935 6.80407L5.467 8.49172L9.08903 4.86969L9.65158 5.43224L5.467 9.61682Z"
              fill="white"
            />
          </svg>

          Something went wrong!
        </h1>
        <p class="description">
          Thank you for your support. <br />
          This helps us to develop the server
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  data() {
    return {
      bgblur: false,
      purchasemodal: false,
      successful: false,
      successful_error: false,
      priorityModalVarable: false,
      addModalvisible: false,
      selectMenu: false,
      selectMenutwo: false,
      totalw: false,
      buttons_donate: [
        {
          id: 1,
          text: "10",
          visable: false,
        },
        {
          id: 2,
          text: "20",
          visable: false,
        },
        {
          id: 3,
          text: "50",
          visable: false,
        },
        {
          id: 4,
          text: "100",
          visable: false,
        },
      ],
    };
  },
  methods: {
    addModalShow(itemID){
      switch(itemID){
        case 1: 
        this.addModalvisible = false;
      this.purchasemodal = true;
      this.bgblur = true;
      break;
        case 2: 
        this.addModalvisible = true;
      this.bgblur = true;
      break;
      case 3: 
        this.addModalvisible = false;
      this.bgblur = true;
      this.priorityModalVarable = true;
      break;
      case 4: 
        this.addModalvisible = false;
      this.purchasemodal = true;
      this.bgblur = true;
      break;
        case 5: 
        this.addModalvisible = true;
      this.bgblur = true;
      break;
      case 6: 
        this.addModalvisible = false;
      this.bgblur = true;
      this.priorityModalVarable = true;
      break;
      case 7: 
      this.purchasemodal = true;
      this.bgblur = true;
      break;
        case 8: 
        this.addModalvisible = true;
      this.bgblur = true;
      break;
      }
      // this.addModalvisible = true;
      // this.bgblur = true;  
    },
    PurchaseModal(id) {
      switch (id) {
        case 1: 
          this.purchasemodal = false;
          break;
        case 2:
          this.addModalvisible = true;
      this.bgblur = true;
          break;
        case 3:
          this.priorityModalVarable = true;
          this.bgblur = true;
          break;
        case 4: 
          this.purchasemodal = false;
      this.bgblur = true ;
          break;
        case 5:
          this.addModalvisible = true;
      this.bgblur = true;
          break;
        case 6:
          this.priorityModalVarable = true;
          this.bgblur = true;
          break;  
          case 7: 
          this.purchasemodal = false;
          break;
        case 8:
          this.addModalvisible = true;
      this.bgblur = true;
          break; 
      }
      // this.purchasemodal = true;
      // this.bgblur = true;
    },
    addDonateModal(id) {
      this.buttons_donate.forEach((element) => {
        if (element.id === id) {
          element.visable = true;
        } else {
          element.visable = false;
        }
      });
    },
    addModal() {
      console.log("OK");
      this.addModalvisible = !this.addModalvisible;
    },
    addPriorityModal() {
      this.priorityModalVarable = !this.priorityModalVarable;
    },
    selectMenufun(val) {
      if (val != undefined) {
        let btnval = document.querySelector(".priority_select_one .select_val");
        btnval.innerHTML = val;
        let option = document.querySelectorAll(
          ".priority_select_one .menu_item"
        );
        option.forEach((i) => {
          if (i.innerHTML.trim() == val) {
            i.classList.add("menu_item_active");
          } else {
            i.classList.remove("menu_item_active");
          }
        });
      }

      this.selectMenu = !this.selectMenu;
      this.selectMenutwo = false;
    },
    selectMenufuntwo(val) {
      if (val != undefined) {
        let btnval = document.querySelector(".priority_select_two .select_val");
        btnval.innerHTML = val;
        let option = document.querySelectorAll(
          ".priority_select_two .menu_item"
        );
        option.forEach((i) => {
          if (i.innerHTML.trim() == val) {
            i.classList.add("menu_item_active");
          } else {
            i.classList.remove("menu_item_active");
          }
        });
      }

      this.selectMenutwo = !this.selectMenutwo;
      this.selectMenu = false;
    },
    total() {
      setInterval(() => {
        let btnval = document.querySelector(".priority_select_one .select_val");
        let btnvaltwo = document.querySelector(
          ".priority_select_two .select_val"
        );
        if (
          btnval.innerHTML.trim() != "Days" &&
          btnvaltwo.innerHTML.trim() != "Server"
        ) {
          this.totalw = true;
        }
      }, 500);
    },
  },
  mounted() {
    this.total();
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(".purchaseSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="sass">
.swiper-pagination  
  bottom: -42px 
  z-index: 20 
  .swiper-pagination-bullet  
    width: 11px 
    height: 11px 
    border: 1px solid rgba(255, 255, 255, 0.3) 
    background-color: transparent 
   
  .swiper-pagination-bullet-active  
    background-color: rgba(255, 255, 255, 1) 
   
 
@media (max-width: 850px)  
  .swiper-pagination  
    bottom: 13px 
    .swiper-pagination-bullet  
      width: 6.018px 
      height: 6.018px 
     
   
 
</style>
<style lang="sass" scoped>
.car_cards  
  max-width: 1150px 
  margin: 0 auto 
  padding: 213px 20px 118px 
  display: grid 
  grid-template-columns: repeat(4, 1fr) 
  gap: 27px 
  position: relative 
  z-index: 10 
  transition: 0.3s 
  .card_item  
    border-radius: 17px 
    position: relative 
    padding: 1px 
    background: #521016 
    .card_item_in  
      background: linear-gradient(0deg, #0d0d10, #0d0d10),radial-gradient(61.67% 58.01% at 50% 50%,#ea384d 0%,rgba(234, 56, 77, 0) 100%) 
      border-radius: 17px 
      padding: 13px 
      overflow: hidden 
      position: relative 
      &::after  
        content: "" 
        background: #ea384d 
        position: absolute 
        right: 0 
        top: -256px 
        width: 316px 
        height: 316px 
        filter: blur(196.5px) 
        z-index: 1 
       
      &:hover  
        background: radial-gradient(58.17% 58.17% at 50% 50%,rgba(234, 56, 77, 0.55) 0%,rgba(234, 56, 77, 0) 100%) 

        .card_img  
          background: radial-gradient(100% 100%,#c8465a 0%,rgba(211, 63, 85, 0) 100%) 
         
       
     

    .car_price  
      position: absolute 
      top: 0 
      right: 21px 
      background: linear-gradient(180deg, #ffb546 0%, #bb8636 100%) 
      font-family: "Gilroy", sans-serif 
      font-style: normal 
      font-weight: 600 
      font-size: 14px 
      line-height: 145% 
      text-align: center 
      letter-spacing: 0.4px 
      color: rgba(0, 0, 0, 0.66) 
      padding: 7px 14px 
      border-radius: 0 0 8px 8px 
      z-index: 4 
     
    .card_img  
      background: radial-gradient(100% 100%, #511921 0%, rgba(0, 0, 0, 0) 80%) 
      background: radial-gradient(100% 100.1% at 50% 50%,rgba(200, 70, 90, 0.55) 0%,rgba(211, 63, 85, 0) 100%) 
      border-radius: 9px 
      position: relative 
      z-index: 3 
      border-radius: 9px 
      padding: 31px 
      text-align: center 
      margin-bottom: 14px 
     
    .card_title  
      font-family: "Gilroy", sans-serif 
      font-style: normal 
      font-weight: 600 
      font-size: 15px 
      line-height: 18px 
      display: flex 
      align-items: center 
      letter-spacing: 0.4px 
      color: #ffffff 
      margin-bottom: 1px 
      display: flex 
      justify-content: space-between 
      align-items: center 
      cursor: pointer 
      z-index: 3 
      a  
        &:hover  
          svg  
            transform: scale(1.3) 
           
         
        svg  
          cursor: pointer 
          transition: 0.3s 
         
       
      .title_in  
        position: relative 
        z-index: 2 
        &::after  
          content: "" 
          width: 69px 
          height: 3px 
          background: #ea384d 
          box-shadow: 0px 4px 12px rgba(234, 56, 77, 0.55) 
          position: absolute 
          bottom: 4px 
          right: -13px 
          z-index: 1 
         
        span  
          position: relative 
          z-index: 5 
         
       
     
    .card_description  
      max-width: 210px 
      font-family: "Gilroy", sans-serif 
      font-style: normal 
      font-weight: 400 
      font-size: 12px 
      line-height: 17px 
      display: flex 
      align-items: flex-end 
      letter-spacing: 0.4px 
      color: rgba(255, 255, 255, 0.55) 
      margin-bottom: 13px 
      position: relative 
      z-index: 3 
     
    .buy_btn  
      width: 100% 
      padding: 15px 
      background: radial-gradient(50% 1207.81% at 50% 50%,rgba(234, 56, 77, 0.25) 0%,rgba(128, 16, 30, 0.25) 100%) 
      border: 1px solid #ea384d 
      border-radius: 7px 
      font-family: "Gilroy", sans-serif 
      font-style: normal 
      font-weight: 400 
      font-size: 12px 
      line-height: 17px 
      letter-spacing: 0.4px 
      color: #ffffff 
      cursor: pointer 
      position: relative 
      z-index: 3 
      &:hover  
        background: radial-gradient(50% 1207.81% at 50% 50%,#ea384d 0%,#80101e 100%) 
        border: 1px solid #ea384d 
       
     
   
 
.car_cards_blur  
  filter: blur(10px) 
 
.purchase_modal_container  
  max-width: 1011px 
  width: 100% 
  position: fixed 
  top: 50% 
  left: 50% 
  transform: translate(-50%, -50%) 
  z-index: 10 
  display: none 
 
.purchase_modal  
  padding: 35px 67px 60px 
  border-radius: 17px 
  background: linear-gradient(162deg, #541921 0%, #17090b 100%) 
  margin: 0 auto 
  border: 1px solid #ea384d 
  .purchase_modal_in  
    display: flex 
    gap: 94px 
   
  .swiper_container  
    max-width: 420px 
    display: flex 
    justify-content: space-between 
    align-content: center 
    position: relative 
    .swiper-button-next  
      right: -45px 
      svg  
        width: 12.531px 
        height: 20px 
        opacity: 0.800000011920929 
        transition: 0.3s 
        &:hover 
          transform: scale(1.3) 
          opacity: 1 
         
       
      &::after  
        display: none 
       
     
    .swiper-button-prev  
      left: -45px 
      svg  
        width: 12.531px 
        height: 20px 
        opacity: 0.800000011920929 
        transition: 0.3s 
        &:hover 
          transform: scale(1.3) 
         
       
      &::after  
        display: none 
       
     
    .swiper-button-disabled  
      opacity: 0 
     
    .swiper_container_center  
      position: relative 
     
    .swiper-pagination  
      bottom: -42px 
     
   
  .purchaseSwiper  
    max-width: 420px 
    height: 100% 
    border-radius: 17px 
    background: radial-gradient(94.43% 74.15% at 50% 50%,rgba(239, 44, 74, 0.55) 0%,rgba(60, 18, 23, 0.55) 100%) 

    .swiper-slide  
      display: flex 
      align-items: center 
      justify-content: center 
      img  
        width: 100% 
       
     
   
  .purchase_body  
    .title  
      max-width: 292px 
      color: #fff 
      font-family: Montserrat, sans-serif 
      font-size: 32px 
      font-style: normal 
      font-weight: 700 
      line-height: normal 
      margin-bottom: 30px 
     
    .description  
      color: #fff 
      font-family: Montserrat, sans-serif 
      font-size: 14px 
      font-style: normal 
      font-weight: 400 
      line-height: 150% 
      letter-spacing: 0.4px 
      margin-bottom: 30px 
     
    .purchase_btn  
      max-width: 213px 
      width: 100% 
      border-radius: 5px 
      background: #e4354a 
      color: #fff 
      text-align: center 
      font-family: Montserrat, sans-serif 
      font-size: 14px 
      font-style: normal 
      font-weight: 500 
      line-height: 145% 
      padding: 10px 
      border: 0 
      cursor: pointer 
      transition: 0.3s 
      &:hover 
        transform: scale(1.1) 
       
     
   
  .exit_btn  
    border: 0 
    background: transparent 
    position: absolute 
    top: 35px 
    right: 51px 
    cursor: pointer 
    
    svg 
      transition: 0.3s 
      &:hover 
        transform: scale(1.3) 
        path 
        fill: white 
        fill-opacity: 0.5 
        
       
       
     
   
 
.purchase_modal_active  
  display: block 
 
.successful_modal  
  width: 100% 
  height: 100% 
  position: fixed 
  top: 0 
  left: 0 
  right: 0 
  bottom: 0 
  padding: 0 20px 
  visibility: hidden 
  opacity: 0 
  transition: all 0.4s 
  display: flex 
  align-items: center 
  justify-content: center 
  .successful_modal_in  
    max-width: 460px 
    width: 100% 
    margin: 0 auto 
    border-radius: 17px 
    background: linear-gradient(162deg, #541921 0%, #17090b 100%) 
    padding: 16px 16.704px 34px 31px 
    border: 1px solid #ea384d 
    .close_btn  
      border: 0 
      background-color: transparent 
      cursor: pointer 
      float: right 
      margin-bottom: 8px 
      transition: 0.3s 
      &:hover  
        transform: scale(1.5) 
        svg 
          path 
            fill-opacity: 0.5 
           
         
       
     
    .title  
      color: #fff 
      font-family: Montserrat, sans-serif 
      font-size: 20px 
      font-style: normal 
      font-weight: 700 
      line-height: 91.4% 
      margin-top: 18px 
      margin-bottom: 15px 
     
    .description  
      max-width: 229px 
      color: #fff 
      font-family: Montserrat, sans-serif 
      font-size: 12px 
      font-style: normal 
      font-weight: 700 
      line-height: normal 
     
   
 
.successful_modal_active  
  visibility: visible 
  opacity: 1 
  z-index: 10 
 
.successful_error_modal  
  width: 100% 
  height: 100% 
  position: fixed 
  top: 0 
  left: 0 
  right: 0 
  bottom: 0 
  z-index: 10 
  padding: 0 20px 
  visibility: hidden 
  opacity: 0 
  transition: all 0.4s 
  display: flex 
  align-items: center 
  justify-content: center 
  .successful_modal_in  
    max-width: 460px 
    width: 100% 
    margin: 0 auto 
    border-radius: 17px 
    background: linear-gradient(162deg, #541921 0%, #17090b 100%) 
    padding: 16px 16.704px 34px 31px 
    .close_btn  
      border: 0 
      background-color: transparent 
      cursor: pointer 
      float: right 
      margin-bottom: 8px 
      transition: 0.3s 
      &:hover  
        transform: scale(1.5) 
       
     
    .title  
      display: flex 
      align-items: center 
      color: #e4354a 
      font-family: Montserrat, sans-serif 
      font-size: 20px 
      font-style: normal 
      font-weight: 700 
      line-height: 91.4% 
      margin-top: 18px 
      margin-bottom: 15px 
      svg  
        margin-right: 7.4px 
       
     
    .description  
      max-width: 229px 
      color: #fff 
      font-family: Montserrat, sans-serif 
      font-size: 12px 
      font-style: normal 
      font-weight: 700 
      line-height: normal 
     
   
 
.successful_error_modal_active  
  visibility: visible 
  opacity: 1 
  z-index: 10 
 
#priorityModal  
  visibility: hidden 
  opacity: 0 
  transition: all 0.4s 
  display: flex 
  justify-content: center 
  align-items: center 
  width: 100% 
  height: 100% 
  position: fixed 
  top: 0 
  right: 0 
  bottom: 0 
  left: 0 
  padding: 0 20px 
  .priorityModal_in  
    max-width: 422px 
    width: 100% 
    flex-shrink: 0 
    border-radius: 17px 
    background: linear-gradient(162deg, #541921 0%, #17090b 100%) 
    padding: 35px 
    position: relative 
    border: 1px solid #ea384d 
    .close_button  
      position: absolute 
      top: 16px 
      right: 16px 
      cursor: pointer 
      transition: 0.3s 
      &:hover  
        transform: scale(1.3) 
        svg 
          path 
            fill-opacity: 0.5 
           
         
       
     
    h2  
      color: #fff 
      font-family: "Montserrat", sans-serif 
      font-size: 32px 
      font-style: normal 
      font-weight: 700 
      line-height: normal 
      margin-bottom: 25px 
     
    span  
      color: #fff 
      font-family: "Montserrat", sans-serif 
      font-size: 14px 
      font-style: normal 
      font-weight: 300 
      line-height: normal 
      letter-spacing: -0.5px 
      display: inline-block 
      max-width: 340px 
      margin-bottom: 35px 
     
    p  
      margin-bottom: 21px 
      color: #fff 
      font-family: "Montserrat", sans-serif 
      font-size: 16px 
      font-style: normal 
      font-weight: 700 
      line-height: normal 
     
    form  
      .select_wrapper  
        display: grid 
        grid-template-columns: repeat(2, 1fr) 
        gap: 16px 
        width: 100% 
        margin-bottom: 37px 
        .priority_select  
          position: relative 
          .select_btn  
            display: flex 
            justify-content: space-between 
            align-items: center 
            padding: 14px 10px 
            border-radius: 10px 
            background: #422529 
            color: #fff 
            font-family: Montserrat, sans-serif 
            font-size: 16px 
            font-style: normal 
            font-weight: 700 
            line-height: normal 
            cursor: alias 
           
          .select_btn_active  
            border-radius: 10px 10px 0 0 
           
          .select_menu  
            width: 100% 
            border-radius: 0px 0px 10px 10px 
            overflow: hidden 
            display: none 
            position: absolute 
            top: 100% 
            left: 0 
            right: 0 
            .menu_item  
              padding: 10px 
              background: #422529 
              color: #fff 
              font-family: Montserrat, sans-serif 
              font-size: 14px 
              font-style: normal 
              font-weight: 400 
              line-height: normal 
              letter-spacing: -0.5px 
              cursor: alias 
              transition: 0.3s 
              &:hover  
                background-color: #604246 
               
             
            .menu_item_active  
              background-color: #604246 
             
           
          .select_menu_active  
            display: block 
           
         
       
      .order_total  
        border-top: 1px solid #422529 
        display: none 
        justify-content: space-between 
        align-items: center 
        color: #fff 
        font-family: Montserrat, sans-serif 
        font-size: 14px 
        font-style: normal 
        font-weight: 300 
        line-height: normal 
        letter-spacing: -0.5px 
        margin-bottom: 21px 
        .price  
          color: #fff 
          text-align: right 
          font-family: Montserrat, sans-serif 
          font-size: 20px 
          font-style: normal 
          font-weight: 700 
          line-height: 145% 
         
       
      .order_total_active  
        display: flex 
       
      button  
        width: 100% 
        border-radius: 5px 
        background: #e4354a 
        border: none 
        color: #fff 
        text-align: center 
        font-family: "Montserrat", sans-serif 
        font-size: 14px 
        font-style: normal 
        font-weight: 500 
        line-height: 145% 
        padding: 10px 
        cursor: pointer 
        transition: 0.3s 
        &:hover  
          transform: scale(1.1) 
         
       
     
   
 
.priorityModal_active  
  visibility: visible !important 
  opacity: 1 !important 
  z-index: 10 !important 
 
#modalDonation  
  position: fixed 
  padding: 0 20px 
  width: 100% 
  height: 100% 
  left: 0 
  top: 0 
  bottom: 0 
  right: 0 
  visibility: hidden 
  opacity: 0 
  transition: all 0.4s 
  display: flex 
  align-items: center 
  justify-content: center 
  .modalDonation_in  
    position: relative 
    border-radius: 17px 
    background: linear-gradient(162deg, #541921 0%, #17090b 100%) 
    max-width: 500px 
    width: 100% 
    flex-shrink: 0 
    padding: 35px 
    border: 1px solid rgba(234, 56, 77, 1) 
    .close_button  
      position: absolute 
      top: 16px 
      right: 16px 
      cursor: pointer 
      transition: 0.3s 
      &:hover  
        transform: scale(1.3) 
        svg 
          path 
            fill-opacity: 0.5 
           
         
       
     
    h2,
    p  
      margin: 0 
      padding: 0 
     
    h2  
      color: #fff 
      font-family: "Montserrat", sans-serif 
      font-size: 32px 
      font-style: normal 
      font-weight: 700 
      line-height: normal 
      margin-bottom: 13px 
     
    span  
      color: #fff 
      font-family: "Montserrat", sans-serif 
      font-size: 14px 
      font-style: normal 
      font-weight: 300 
      line-height: normal 
      letter-spacing: -0.5px 
      max-width: 180px 
      display: inline-block 
      margin-bottom: 40px 
     
    p  
      color: #fff 
      font-family: "Montserrat", sans-serif 
      font-size: 16px 
      font-style: normal 
      font-weight: 700 
      line-height: normal 
      margin-bottom: 19px 
     
    .buttons  
      display: flex 
      gap: 12px 
      margin-bottom: 23px 
      flex-wrap: nowrap 
      div  
        flex: 1 1 0 
       
      button  
        display: flex 
        padding: 22px 18px 22px 22px 
        justify-content: center 
        align-items: end 
        background: transparent 
        border-radius: 17px 
        border: 1px solid rgba(234, 56, 77, 1) 
        color: #fff 
        font-family: "Montserrat", sans-serif 
        font-size: 32px 
        font-style: normal 
        font-weight: 700 
        line-height: normal 
        cursor: pointer 
        span  
          color: #fff 
          font-family: Montserrat, sans-serif 
          font-size: 12px 
          font-style: normal 
          font-weight: 700 
          line-height: normal 
          margin-bottom: 6px 
         
       
      .bg_active  
        background: rgba(234, 56, 77, 1) !important 
       
     
    .other_donate  
      input  
        color: #fff 
        font-family: "Montserrat", sans-serif 
        font-size: 14px 
        font-style: normal 
        font-weight: 700 
        line-height: normal 
        border-radius: 17px 
        text-align: center 
        border: 1px solid rgba(234, 56, 77, 1) 
        background: transparent 
        display: inline-block !important 
        width: 100% 
        padding: 22px 0 
        margin-bottom: 22px 
        outline: none 
        cursor: pointer 
        &::placeholder  
          color: #fff 
          font-family: "Montserrat", sans-serif 
          font-size: 14px 
          font-style: normal 
          font-weight: 700 
          line-height: normal 
          text-align: center 
         
       
     
    textarea  
      border-radius: 17px 
      background: #453134 
      display: flex 
      width: 100% 
      height: 107px 
      padding: 18px 
      align-items: flex-start 
      gap: 10.833px 
      flex-shrink: 0 
      color: #fff 
      font-family: "Montserrat", sans-serif 
      font-size: 14px 
      font-style: normal 
      font-weight: 300 
      line-height: normal 
      letter-spacing: -0.5px 
      border: none 
      resize: none 
      outline: none 
      margin-bottom: 40px 
      &::placeholder  
        color: #fff 
        font-family: "Montserrat", sans-serif 
        font-size: 14px 
        font-style: normal 
        font-weight: 300 
        line-height: normal 
        letter-spacing: -0.5px 
       
     
    .last_button  
      float: right 
      width: 100% 
      button  
        float: right 
        border-radius: 5px 
        background: #e4354a 
        border: none 
        color: #fff 
        text-align: center 
        font-family: "Montserrat", sans-serif 
        font-size: 14px 
        font-style: normal 
        font-weight: 500 
        line-height: 145% 
        max-width: 213px 
        width: 100% 
        padding: 10px 
        cursor: pointer 
        transition: 0.3s 
        &:hover  
          transform: scale(1.1) 
         
       
     
   
 
.modalDonation_active  
  visibility: visible !important 
  opacity: 1 !important 
  z-index: 10 !important 
 

.closeBtn_active  
  z-index: -10 !important 
 

@media (max-width: 1200px)  
  .car_cards  
    grid-template-columns: repeat(3, 1fr) 
   
  .purchase_modal_container  
    padding: 0 32px 
   
  .purchase_modal  
    padding: 23px 27px 
    .purchase_modal_in  
      gap: 50px 
      .swiper_container  
        max-width: 390px 
        .purchaseSwiper  
          max-width: 390px 
         
        .swiper-pagination  
          bottom: 10px 
         
        .swiper-button-next  
          right: -30px 
         
        .swiper-button-prev  
          left: -30px 
         
       
     
   
 
@media (max-width: 850px)  
  .car_cards  
    grid-template-columns: repeat(2, 1fr) 
   
  .purchase_modal_container  
    max-width: 576px 
   
  .purchase_modal  
    .purchase_modal_in  
      flex-direction: column 
      gap: 12px 
      .swiper_container  
        max-width: auto 
        .swiper-button-next  
          right: -28px 
          svg  
            width: 7.472px 
            height: 11.926px 
           
         
        .swiper-button-prev  
          left: -28px 
          svg  
            width: 7.472px 
            height: 11.926px 
           
         
        .swiper_container_center  
          width: 100% 
         
        .purchaseSwiper  
          max-width: 460px 
          width: 100% 
          .swiper-slide  
            width: 100% 
            padding: 50px 13px 
           
         
       
      .purchase_body  
        .title  
          font-size: 12px 
          line-height: normal 
          margin-bottom: 10px 
         
        .description  
          font-size: 10px 
          line-height: 150% 
          overflow: hidden 
          display: -webkit-box 
          -webkit-line-clamp: 4  /* number of lines to show */
          line-clamp: 4 
          -webkit-box-orient: vertical 
         
       
     
    .exit_btn  
      top: 16px 
      right: 48px 
     
   
  #modalDonation  
    .modalDonation_in  
      max-width: 576px 
      padding: 23px 
      h2  
        font-size: 20px 
        line-height: 91.4% 
       
      span  
        font-size: 10px 
        margin-bottom: 20px 
        line-height: normal 
       
      p  
        font-size: 12px 
        line-height: normal 
       
      .donadte_form  
        .buttons  
          gap: 7px 
          div  
            flex: 1 1 0 
           
          .btn_donate  
            width: 100% 
            padding: 14.979px 12.255px 14.979px 14.979px 
            font-size: 21.787px 
            border-radius: 11.574px 
            span  
              align-content: flex-end 
              font-size: 8.17px 
              line-height: normal 
              margin-bottom: 4px 
             
           
         
        .other_donate  
          input  
            padding: 14.979px 12.255px 14.979px 14.979px 
            color: #fff 
            font-family: Montserrat, sans-serif 
            font-size: 21.787px 
            font-style: normal 
            font-weight: 700 
            line-height: normal 
           
         
        .last_button  
          button  
            font-size: 12px 
            line-height: 145% 
            width: 100% 
            max-width: 100% 
           
         
       
     
   
 
@media (max-width: 576px)  
  .car_cards  
    grid-template-columns: repeat(1, 1fr) 
    padding: 150px 20px 100px 
   
 
</style>
