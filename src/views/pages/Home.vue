<template>
  <div class="home">
    <header>
      <h1>Trouve un établissement</h1>
      <img src="../../../public/img/illustrations/location.svg" alt="Location icon">
    </header>
    <p>Scanne le QR code de l’étalissement et envoie leurs directement ta commande !</p>
    <div class="scan-btn-container">
      <div class="ellipse1" @click="openScanPage">
        <div class="ellipse2">
          <img src="../../../public/img/illustrations/qr-icon.svg" alt="QR icon">
        </div>
      </div>
    </div>
    <h3 v-if="isAuthenticated">
      <img src="../../../public/img/illustrations/pin.svg" alt="Pin icon">
      Autour de moi
    </h3>
    <div class="stores" v-if="isAuthenticated">
      <div v-for="(company, index) in companies" :key="index">
        <div class="store">
          <img class="img-container" :src="company.img" alt="">
          <div class="store-info">
            <p class="store-type"><span><i class="bx bx-restaurant" /> ITALIEN</span><b>à {{ company.meters }}m</b></p>
            <h2>{{ company.name }}</h2>
            <p class="store-description">
              {{ company.description }}
            </p>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: 'Home',
  data () {
    return {
      api_url: process.env.API_URL,
      companies: []
    }
  },
  computed: {
    ...mapGetters({
      geolocation: 'geolocation',
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  methods: {
    openScanPage () {
      if (this.isAuthenticated) {
        this.$store.dispatch('openScanPage')
      } else {
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    axios.get( '/api/companies')
        .then(response => {
          response.data.forEach(company => {
            company.meters = (Math.random() * (800 - 30) + 30).toFixed(0)
            company.img = company.meters%2 === 1 ? '/img/restaurant2.jpg' : '/img/restaurant.jpg'
          })
          this.companies = response.data.sort(function(a, b) {
            return a.meters - b.meters;
          })
        })
        .catch(e => console.error(e))
  }
}
</script>

<style lang="scss" scoped>
.home {
  header {
    display: flex;
    justify-content: space-between;
    color: #414141;
    h1 {
      max-width: 60vw;
      text-align: left;
      margin-bottom: 0;
    }
  }
  p {
    text-align: left;
    color: #B1B1B1;
    font-size: .8rem;
  }

  .scan-btn-container {
    display: flex;
    justify-content: center;
    .ellipse1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 208px;
      height: 208px;
      border-radius: 100px;
      background: radial-gradient(70% 70% at 50% 50%, #badaff 0%, rgba(236, 241, 255, 0) 65%);
      .ellipse2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 110px;
        border-radius: 100px;
        background: #FFFFFF;
        box-shadow: 0 0 9px rgba(132, 188, 255, 0.2);
        img {
          margin: .4rem 0;
          height: 40%;
        }
        p {
          margin: 0;
          font-size: .7em;
        }
      }
    }
  }

  h3 {
    display: flex;
    align-items: center;
    img {
      margin-right: .5rem;
    }
  }

  .stores {
    hr {
      height: 1px;
      border: none;
      background-color: lightgrey;
      margin: 2rem 0;
    }
    .store {
      .img-container {
        border-radius: 20px;
        width: 100%;
        height: 280px;
        object-fit: cover;
        filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2));
      }
      .store-info {
        h2 {
          margin: 0;
          text-align: left;
          font-size: 1.3em;
        }
        .store-type {
          display: flex;
          justify-content: space-between;
          letter-spacing: 1px;
          margin: .5em 0;
        }
      }
    }
  }
}
</style>
