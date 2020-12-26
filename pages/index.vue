<template>
  <video-background
    :src="require('@/assets/video/test-video-1.mp4')"
    style="height: 100vh"
    overlay="linear-gradient(45deg,rgba(247, 238, 127, 0.35),rgba(241, 166, 106, 0.75))"
  >
    <div class="header-text--container">
      <h1 class="header-text--primary" style="color: black">Casa Patron</h1>
      <h3 class="header-text--secondary">Explore New Mexico's Enchantments</h3>
    </div>
  </video-background>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap');
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.header-text--container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
}
.header-text--primary {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -1px;
  font-size: 10rem;
  margin: 0 auto;
  text-shadow: 0px 0px 10px rgba(247, 238, 127, 1);
}

.header-text--secondary {
  font-family: 'Lato', sans-serif;
  font-size: 1.7rem;
  margin: 0 auto;
  text-shadow: 0px 0px 7px #f7ee7f;
  color: black;
  text-transform: uppercase;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
