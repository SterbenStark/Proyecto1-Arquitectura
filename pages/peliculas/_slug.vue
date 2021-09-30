<script>
  export default {
    async asyncData({ $content, params }) {
      const pelicula = await $content('peliculas', params.slug).fetch()
      const album = await $content('albums').where({ id: pelicula.albumId }).only(['name']).fetch()
      return { album, pelicula }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+pelicula.image">
     </div>
     <div class="six columns">
       <h4>{{pelicula.name}}</h4>
	   Dirección de la película: {{pelicula.direction}}</br>
     País: {{pelicula.country}}</br>
     Año de estreno: {{pelicula.year}}</br>
     Duración de la película: {{pelicula.duration}}</br>
	   Generos: {{pelicula.genere}}</br></br>
	   <b>Description</b></br>
	    <nuxt-content :document="pelicula" />
	 </div>
	 <div class="three columns"></div>
	   <h5>Album Asociado</h5>
	   <ul>
       <li>
          <NuxtLink :to="'/albums/'+pelicula.albumId">{{album[0].name}}</NuxtLink></br>
      </li>
	     <!--<li v-for="album of albums" :key="album.slug">
	        <NuxtLink :to="{ name: 'albums-slug', params: { slug: album.slug } }">{{album.name}}</NuxtLink>
	     </li>-->
	   </ul>
   </div>
   <FooterView />
 </div>
</template>