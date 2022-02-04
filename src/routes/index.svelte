<script>
 import { categoria, intrebari } from "../stores/intrebari";
 import CatSelector from "../components/catSelector.svelte";
    
</script>
<div class="content">

    <h1>Chestionare Auto UrsSur </h1>
    <h2>Selecteaza o categorie si hai sa faci un chestionar:</h2>
</div>
<CatSelector />

<a href="/chestionar" class="button is-large is-success is-fullwidth">Incepe Chestionar</a>