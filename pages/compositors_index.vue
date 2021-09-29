<script>
  export default {
    async asyncData({ $content, params }) {
      const compositors = await $content('albums').fetch()
      return {
        compositors
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">compositors Information</h3>
     <p>This section presents information about albums</p>
   <ul>
     <li v-for="compositor of compositors" :key="compositor.slug">
       <NuxtLink :to="{ name: 'albums-slug', params: { slug: compositor.slug } }">{{compositor.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>