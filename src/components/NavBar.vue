<template>
  <header>
      <h1>Youth Centre</h1>
      <nav>
          <router-link to="/">Home</router-link>
          <router-link :to="{name: 'create'}">Create Post</router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
    header h1 {
        color: cadetblue;
        font-size: 48px;
    }
    header a {
        color: cadetblue;
        text-decoration: none;
        margin: 20px;
        font-size: 20px;
    }
    header a.router-link-active {
        color: darkslategray;
    }
</style>