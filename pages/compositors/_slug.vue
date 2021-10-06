<script>
  export default {
    async asyncData({ $content, params }) {
      const compositor = await $content('compositors', params.slug).fetch()
      const albums = await $content('albums').where({ compositorId: params.slug }).fetch()
      const peliculas = await $content('peliculas').where({albumId: params.slug }).fetch()
      /**const pelicula = await $content('peliculas').where({ id: albums.albumId }).only(['name']).fetch()*/
      return { compositor, albums, peliculas }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+compositor.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{compositor.name}}</h4>
	   Nationality: {{compositor.nationality}}.</br> 
     Born: {{compositor.birth_year}}.</br>
	   Genere: {{compositor.genere}}.</br></br>
	   <b>Biography</b></br>
	    <nuxt-content :document="compositor" />
	 </div>
	 <div class="three columns"></div>
	   <h5>Albums</h5>
	   <ul>
	     <li v-for="album of albums" :key="album.slug">
	       <NuxtLink :to="{ name: 'albums-slug', params: { slug: album.slug } }">{{album.name}}</NuxtLink>
	     </li>
	   </ul></br>
     <h5>Pelicula</h5>
	   <ul>
       <li>
          <li v-for="pelicula of peliculas" :key="pelicula.slug">
            <NuxtLink :to="{ name: 'peliculas-slug', params: { slug: pelicula.slug } }">{{pelicula.name}}</NuxtLink>
          <!--<NuxtLink :to="'/peliculas/'+compositor.peliculaId">{{pelicula[0].name}}</NuxtLink></br>-->
      </li>
   </div>
   <FooterView />
 </div>
</template>