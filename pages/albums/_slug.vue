<script>
  export default {
    async asyncData({ $content, params }) {
      const album = await $content('albums', params.slug).fetch()
      const compositor = await $content('compositors').where({ id: album.compositorId }).only(['name']).fetch()
      const pelicula = await $content('peliculas').where({ id: album.peliculaId }).only(['name']).fetch()
      return { compositor, album, pelicula }
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
     Número de canciones: {{album.number_songs}}.</br> 
     Duración del album: {{album.duration}}.</br>
     Ver está relacion (Album asociado a la pelicula): {{album.name}}.</br></br>
	   <b>Description</b></br>
	    <nuxt-content :document="album" />
	 </div>
	 <div class="three columns"></div>
	   <h5>Pelicula Asociada</h5>
	   <ul>
       <li>
          <NuxtLink :to="'/peliculas/'+pelicula.albumId">{{pelicula[0].name}}</NuxtLink></br>
      </li>
	   </ul>
   </div>
   <FooterView />
 </div>
</template>