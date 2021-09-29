<script>
  export default {
    async asyncData({ $content, params }) {
      const author = await $content('authors', params.slug).fetch()
      const albums = await $content('albums').where({ authorId: params.slug }).fetch()
      return { author, albums }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+author.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{author.name}}</h4>
	   Nationality: {{author.nationality}}; Born: {{author.birth_year}}</br>
	   Fields: {{author.fields}}</br></br>
	   <b>Biography</b></br>
	    <nuxt-content :document="author" />
	 </div>
	 <div class="three columns"></div>
	   <h5>Albums</h5>
	   <ul>
	     <li v-for="album of albums" :key="album.slug">
	       <NuxtLink :to="{ name: 'albums-slug', params: { slug: album.slug } }">{{album.name}}</NuxtLink>
	     </li>
	   </ul>
   </div>
   <FooterView />
 </div>
</template>