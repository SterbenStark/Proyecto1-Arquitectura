<script>
  export default {
    async asyncData({ $content, params }) {
      const albums = await $content('albums').fetch()
      return {
        albums
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Albums Information</h3>
     <p>This section presents information about Albums</p>
   <ul>
     <li v-for="album of albums" :key="album.slug">
       <NuxtLink :to="{ name: 'albums-slug', params: { slug: album.slug } }">{{album.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>