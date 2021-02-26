<template>
  <div class="home">
    <header>
      <h1>Trouve un établissement</h1>
      <img src="../../public/img/illustrations/location.svg" alt="Location icon">
    </header>
    <p>Scanne le QR code de l’étalissement et envoie leurs directement ta commande !</p>
    <div class="scan-btn-container">
      <div class="ellipse1">
        <div class="ellipse2">
          <img src="../../public/img/illustrations/qr-icon.svg" alt="QR icon">
        </div>
      </div>
    </div>
    <h3>
      <img src="../../public/img/illustrations/pin.svg" alt="Pin icon">
      Autour de moi
    </h3>
    <div class="stores">
      <div class="store">
        <img class="img-container" src="../../public/img/restaurant2.jpg" alt="">
        <div class="store-info">
          <p class="store-type"><span><i class="bx bx-restaurant" /> ITALIEN</span><b>à 380m</b></p>
          <h2>La compagnie de la Rosa</h2>
          <p class="store-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, culpa distinctio, fuga fugiat impedit ipsum, itaque iusto laborum numquam perspiciatis placeat quasi quibusdam reiciendis repellendus rerum tempora totam velit veritatis.
          </p>
        </div>
      </div>
      <hr>
      <div class="store">
        <img class="img-container" src="../../public/img/restaurant.jpg" alt="">
        <div class="store-info">
          <p class="store-type"><span><i class="bx bx-restaurant" /> PIZZERIA</span><b>à 800m</b></p>
          <h2>Café de la paix</h2>
          <p class="store-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, culpa distinctio, fuga fugiat impedit ipsum, itaque iusto laborum numquam perspiciatis placeat quasi quibusdam reiciendis repellendus rerum tempora totam velit veritatis.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
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
