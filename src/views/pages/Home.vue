<template>
  <div class="home">
    <header>
      <h1>Trouve un établissement</h1>
      <!--<img src="../../../public/img/illustrations/location.svg" alt="Location icon">-->
      <lottie :options="defaultOptions2" :height="100" />
    </header>
    <p>Scanne le QR code de l’étalissement et envoie leurs directement ta commande !</p>
    <div class="scan-btn-container">
      <div class="ellipse1" @click="openScanPage">
        <div class="ellipse2">
          <img src="../../../public/img/illustrations/qr-icon.svg" alt="QR icon">
          <!--<lottie :options="defaultOptions" :height="60" :width="60" />-->
        </div>
      </div>
    </div>
    <h3 v-if="isAuthenticated">
      <img src="../../../public/img/illustrations/pin.svg" alt="Pin icon">
      Autour de moi
    </h3>
    <div class="stores" v-if="isAuthenticated">
      <div v-for="(company, index) in companies" :key="index" @click="openCompanyPage(company.id)">
        <div class="store" style="cursor:pointer;">
          <!--<img class="img-container" :src="company.img" alt="">-->
          <img class="img-container" :src="'https://source.unsplash.com/1600x900/?' + company.keywords" alt="">
          <div class="store-info">
            <p class="store-type" v-if="geolocation && company">
              <span>
                <i class="bx bx-restaurant" />
              </span>
              <b>à {{ convertCoordinatesToMeters(geolocation.latitude, geolocation.longitude, company.latitude, company.longitude) }}</b>
            </p>
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
import Lottie from 'vue-lottie';
import * as animationData from '../../../public/img/animations/scan-check.json'
import * as animationData2 from '../../../public/img/animations/store.json'
export default {
  name: 'Home',
  components: {
    'lottie': Lottie
  },
  data () {
    return {
      api_url: process.env.API_URL,
      companies: [],
      defaultOptions: { animationData: animationData.default },
      defaultOptions2: { animationData: animationData2.default },
      animationSpeed: 1
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
    },
    openCompanyPage (id) {
      axios.get( '/api/companies/' + id)
          .then(response => {
            if (!response.data) this.error = "Cet établissement n'éxiste pas !";
            else {
              this.$store.dispatch('setActiveStore', response.data)
                this.$store.dispatch('closeScanPage')
              if (this.$router.currentRoute !== 'store') {
                this.$router.push({ path: '/store' })
              }
            }
          })
          .catch(e => console.error(e))
    },
    convertCoordinatesToMeters (lat1, lon1, lat2, lon2) {
      const R = 6378.137; // Radius of earth in KM
      const dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
      const dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const d = R * c;

      if (d < 1) return parseInt(d*1000) + 'm'
      return parseInt(d) + ' km'
    }
  },
  mounted () {
    axios.get( '/api/companies')
        .then(response => {
          this.companies = response.data
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
        cursor: pointer;
        &:hover {
          img {
            transform: scale(1.2, 1.2) rotate3d(0, 3, 3, 3deg);
          }
        }
        img {
          transition: all .3s;
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
