<script>
  export default {
    async asyncData({ $content, params }) {
      const album = await $content('albums', params.slug).fetch()
      const compositor = await $content('compositors').where({ id: album.compositorId }).only(['name']).fetch()
      return { compositor, album }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+album.image" alt="Album image">
     </div>
     <div class="six columns">
       <h4>{{album.name}}</h4>
	   Compositor: <NuxtLink :to="'/compositors/'+album.compositorId">{{compositor[0].name}}</NuxtLink></br>
     Año del album: {{album.year}}.</br> 
     Número de canciones: {{album.number_songs}}. 
     Duración del album: {{album.duration}}.</br></br>
	   <b>Description</b></br>
	    <nuxt-content :document="album" />
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>