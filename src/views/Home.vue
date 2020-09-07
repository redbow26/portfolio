<template>
  <div class="home">
    <component :is="component"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default {
  name: 'Home',
  components: {
    About,
    Contact,
    Projects
  },
  data() {
    return {
      component: "Projects"
    }
  }
}
</script>
