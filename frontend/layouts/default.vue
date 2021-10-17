<template>
  <div>
    <Header />
   <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        }
      ]
    }
  }
}
</script>
