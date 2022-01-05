<template>
  <div class="full-win">
    <div class="bg-purple">
      <div class="central-body">
        <img
          class="image-404"
          src="@/assets/pics/system-error/404.svg"
          width="300"
          alt="404"
        />
        <router-link to="/" class="btn-go-home">返回首页 </router-link>
      </div>
      <div class="objects">
        <img
          class="object_rocket"
          src="@/assets/pics/system-error/rocket.svg"
          width="40px"
          alt="rocket"
        />
        <div class="earth-moon">
          <img
            class="object_earth"
            src="@/assets/pics/system-error/earth.svg"
            width="100px"
            alt="earth"
          />
          <img
            class="object_moon"
            src="@/assets/pics/system-error/moon.svg"
            width="80px"
            alt="moon"
          />
        </div>
        <div class="box_astronaut">
          <img
            class="object_astronaut"
            src="@/assets/pics/system-error/astronaut.svg"
            width="140px"
            alt="astronaut"
          />
        </div>
      </div>
      <div class="glowing_stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
@keyframes rocket-movement {
  100% {
    transform: translate(1200px, -600px);
  }
}
@keyframes spin-earth {
  100% {
    transform: rotate(-360deg);
    transition: transform 20s;
  }
}

@keyframes move-astronaut {
  100% {
    transform: translate(-160px, -160px);
  }
}
@keyframes rotate-astronaut {
  100% {
    transform: rotate(-720deg);
  }
}

@keyframes glow-star {
  40% {
    opacity: 0.3;
  }
  90%,
  100% {
    opacity: 1;
    transform: scale(1.2);
    border-radius: 999999px;
  }
}

.spin-earth-on-hover {
  transition: ease 200s !important;
  transform: rotate(-3600deg) !important;
}

.bg-purple {
  background: url("@/assets/pics/system-error/page-bg.jpg") repeat-x left top;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  .custom-navbar {
    padding-top: 15px;
  }
  .brand-logo {
    margin-left: 25px;
    margin-top: 5px;
    display: inline-block;
  }
  .navbar-links {
    display: inline-block;
    float: right;
    margin-right: 15px;
    text-transform: uppercase;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    /*    overflow: hidden;*/
    display: flex;
    align-items: center;
  }

  li {
    float: left;
    padding: 0 15px;
    a {
      display: block;
      color: white;
      text-align: center;
      text-decoration: none;
      letter-spacing: 2px;
      font-size: 12px;
      transition: all 0.3s ease-in;
      &:hover {
        color: #ffcb39;
      }
    }
  }
  .btn-request {
    padding: 10px 25px;
    border: 1px solid #ffcb39;
    border-radius: 100px;
    font-weight: 400;
    &:hover {
      background-color: #ffcb39;
      color: #fff;
      transform: scale(1.05);
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
    }
  }
  .btn-go-home {
    position: relative;
    z-index: 200;
    margin: 15px auto;
    width: 100px;
    padding: 10px 15px;
    border: 1px solid #ffcb39;
    border-radius: 100px;
    font-weight: 400;
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 11px;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #ffcb39;
      color: #fff;
      transform: scale(1.05);
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
    }
  }
  .central-body {
    padding: 17% 5% 10% 5%;
    text-align: center;
  }
  .objects {
    img {
      z-index: 90;
      pointer-events: none;
    }
  }
  .object_rocket {
    z-index: 95;
    position: absolute;
    transform: translateX(-50px);
    top: 75%;
    pointer-events: none;
    animation: rocket-movement 200s linear infinite both running;
  }

  .object_earth {
    position: absolute;
    top: 20%;
    left: 15%;
    z-index: 90;
    /*    animation: spin-earth 100s infinite linear both;*/
  }

  .object_moon {
    position: absolute;
    top: 12%;
    left: 25%;
    /*
        transform: rotate(0deg);
        transition: transform ease-in 99999999999s;
    */
  }
  .earth-moon {
  }

  .object_astronaut {
    animation: rotate-astronaut 200s infinite linear both alternate;
  }

  .box_astronaut {
    z-index: 110 !important;
    position: absolute;
    top: 60%;
    right: 20%;
    will-change: transform;
    animation: move-astronaut 50s infinite linear both alternate;
  }

  .image-404 {
    position: relative;
    z-index: 100;
    pointer-events: none;
  }

  .stars {
    background: url(https://i.loli.net/2021/09/30/9kEbfo53wXTsPjz.jpg);
    background-repeat: repeat;
    background-size: contain;
    background-position: left top;
  }
  .glowing_stars {
    .star {
      position: absolute;
      border-radius: 100%;
      background-color: #fff;
      width: 3px;
      height: 3px;
      opacity: 0.3;
      will-change: opacity;
      &:nth-child(1) {
        top: 80%;
        left: 25%;
        animation: glow-star 2s infinite ease-in-out alternate 1s;
      }
      &:nth-child(2) {
        top: 20%;
        left: 40%;
        animation: glow-star 2s infinite ease-in-out alternate 3s;
      }
      &:nth-child(3) {
        top: 25%;
        left: 25%;
        animation: glow-star 2s infinite ease-in-out alternate 5s;
      }
      &:nth-child(4) {
        top: 75%;
        left: 80%;
        animation: glow-star 2s infinite ease-in-out alternate 7s;
      }
      &:nth-child(5) {
        top: 90%;
        left: 50%;
        animation: glow-star 2s infinite ease-in-out alternate 9s;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .bg-purple {
    .navbar-links {
      display: none;
    }

    .custom-navbar {
      text-align: center;
    }

    .brand-logo img {
      width: 120px;
    }

    .box_astronaut {
      top: 70%;
    }

    .central-body {
      padding-top: 25%;
    }
  }
}
</style>
