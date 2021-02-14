<template>
  <div>
    <NavBar />
    <SideDrawer />
  </div>
</template>

<script>
import NavBar from '@/components/navigation/NavBar.vue'
import SideDrawer from '@/components/navigation/SideDrawer.vue'
export default {
  components: {
    NavBar,
    SideDrawer,
  },
}
</script>

<style scoped></style>
