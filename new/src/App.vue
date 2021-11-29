<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/rplay">Rplay</router-link> |
      <router-link to="/flutter">Butler's Diary</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="routerContainer" :isMobile="isMobile" />
    <footer class="endfixed">
      새로운 시도를 좋아하는 개발자 전다나 010.5763.6355 copyright by Donna:)
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  padding: 0 8px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0492c2;
}
ul,
ol {
  list-style: none;
}

.endfixed {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: #1a1818;
  opacity: 0.7;
  color: #fff;
}

.flexRow {
  display: flex;
  flex-flow: row nowrap;
  justify-items: center;
}
.center {
  display: flex;
  justify-items: center;
  justify-content: center;
}

.routerContainer {
  width: 70%;
  margin: 0 auto;
}
</style>
