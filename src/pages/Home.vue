<template>
  <main>
    <div class="text-top">
      <p class="visible">Welcome everyone
      </p>

    </div>

    <a href="https://github.com/mila-developer" target="_blank">
      <img alt="Subscribe" id="subscribe" src="https://media.giphy.com/media/YkXEXpPfKJYohkLWId/giphy.gif" allowFullScreen>
    </a>

    <div class="text-bottom"></div>
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
    font-size: 36px;
    text-shadow: black 0.1em 0.1em 0.2em;
    margin-bottom: 20px;
    cursor: pointer;
    animation: bounce 1s infinite alternate;
  }

  #subscribe {
    width: 450px;
  }

  .text-bottom {
    color: var(--color-background-nav);
    font-size: 18px;
    margin-top: 20px;
    text-shadow: black 0.1em 0.1em 0.2em;
  }

  @media (min-width: 700px) {
    #subscribe {
      width: 500px;
    }
  }

  @keyframes bounce {
    from {
    transform: translateZ(0px);
  }
    to {
    transform: translateZ(-15px);
    color: var(--color-text-title);
    text-shadow: none;
  }
  }

</style>