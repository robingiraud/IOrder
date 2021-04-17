<template>
  <div>
    <ul>
      <li>
        <i class="bx bxs-user-account bx-sm" />
        <div>
          <h3>{{ user.name }}</h3>
          <span>Voir mon profil</span>
        </div>
      </li>
      <li>
        <i class="bx bxs-bell-ring bx-sm" />
        <h3>Notifications [WIP]</h3>
      </li>
      <li>
        <i class="bx bxs-wrench bx-sm" />
        <h3>Paramètres & préférences</h3>
      </li>
      <li style="color: #84BCFF">
        <i class="bx bx-donate-heart bx-sm" />
        <h3>Faire un don</h3>
      </li>
      <li style="color: lightcoral" @click="logout">
        <i class="bx bx-log-out bx-sm" />
        <h3>Se déconnecter</h3>
      </li>
    </ul>
    <!-- Mon profil
    <button @click="logout">Déconnexion</button> -->
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    logout: function () {
      this.$store.dispatch('auth/AUTH_LOGOUT').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: .2rem;
  li {
    display: flex;
    align-items: center;
    padding: 1rem .5rem;
    cursor: pointer;
    &:hover {
      background-color: white;
      border-radius: 10px;
    }
    i {
      font-size: 1.2rem !important;
      margin-right: 1.5rem;
    }
    div {
      display: flex;
      flex-direction: column;
      span {
        text-align: left;
        font-size: .6em;
        margin-top: -4px;
        color: lightgrey;
      }
    }
    h3 {
      text-align: left;
      margin: 0;
      font-size: .9em;
      font-weight: normal;
    }
  }
}
</style>
