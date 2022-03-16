<template>
  <main>
    <div class="text-top">Videos every week</div>

    <a href="https://www.youtube.com/channel/UCARzMooDoBJe2gmAYSbvBRw" target="_blank">
      <img alt="Subscribe" id="subscribe" src="https://cdn-icons-png.flaticon.com/512/4659/4659011.png">
    </a>

    <div class="text-bottom">youtube.com/mila-developer</div>
  </main>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

  main {
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
  }

  .text-top {
    color: var(--color-background-nav);
    font-size: 22px;
    text-shadow: black 0.1em 0.1em 0.2em;
  }

  #subscribe {
    width: 300px;
  }

  .text-bottom {
    color: var(--color-background-nav);
    font-size: 18px;
    margin-top: 20px;
    text-shadow: black 0.1em 0.1em 0.2em;
  }

  @media (min-width: 700px) {
    #subscribe {
      width: 370px;
    }
  }

</style>