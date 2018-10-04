<template>
  <div id="app">
    <Header/>
    <About/>
    <Education/>
    <It/>
    <Experiences/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import It from './components/It.vue'
import Experiences from './components/Experiences.vue'
import Footer from './components/Footer.vue'
import pdf from 'vue-pdf'

export default {
  name: 'app',
  components: {
    Header,
    About,
    Education,
    It,
    Experiences,
    Footer,
    pdf
  }
}
</script>

<style>
@import 'assets/css/styles.css';
</style>
