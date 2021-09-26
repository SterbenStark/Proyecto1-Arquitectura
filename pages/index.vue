<template>
 <div class="container">
   <HeaderView />
   <h2 style="margin-top: 15px">Catálogo de Música de Películas</h2>
	  <p>Este sitio muestra información sobre distintos compositores de música de peliculas a lo largo de la historia, donde
      también se podran apreciar sus albunes y las peliculas donde tuvo una participación.
      <br>
      Se podrán visualizar información de entidades principales tales como: Compositores, Albunes y Peliculas.</p>
    <ul>
	  <li> <NuxtLink to="/books_index">Books information</NuxtLink></li>
	  <li> <NuxtLink to="/authors_index">Authors information</NuxtLink></li>
	  <li> <NuxtLink to="/publishers_index">Publishers information</NuxtLink></li>
	</ul>
   <FooterView />
 </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>