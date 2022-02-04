<script>
import { intrebari, change, categoria } from "../stores/intrebari";
import CatSelector from "../components/catSelector.svelte"

  
let Q = "";
let filtered = [];

$: {
  if(Q){
    filtered = $intrebari.filter(
      intrebare => intrebare.q.toLowerCase().includes(Q.toLowerCase())
    )}
    else {
      filtered = [... $intrebari]
  }
}
</script>

<main>
<CatSelector />

  <div class="search container">
    <div class="field">
      <p class="control">
       <input class="input" type="text" bind:value={Q} placeholder="Cauta intreabrea aici" >
      </p>
    </div>

    <h1>Din {$intrebari.length} am gasit {filtered.length} care se potrivesc cu ce ai cautat </h1>
    {#each filtered.slice(0,35) as intrebare}
    <div class="card">
      <div class="card-header">
        <h2 class="card-header-title"> {intrebare.q} </h2>
      </div>
      <div class="card-content">
        
           
           <div class="columns">
            {#if intrebare.i > 0}
            <div class="column">
                <figure class="image is-3by2">
                
                  <img src= '/img/{$categoria}/{intrebare.i}.jpg'>
                </figure>
            </div>  
            {/if}
            <div class="column">
              <div class="center-vertical">
                
              <div class="ans"><span class='letter'>a</span> <span class="text">{intrebare.a}</span> </div>
              <div class="ans"><span class='letter'>b</span> <span class="text">{intrebare.b}</span> </div>
              <div class="ans"><span class='letter'>c</span> <span class="text">{intrebare.c}</span> </div>
              </div>
            </div>
        
           </div>

      </div>
            <footer class="card-footer">
              <p class="card-footer-item correct"><span class="text">Varianta corecta : {intrebare.v} </span></p>
            </footer>
    </div>
{/each}

  </div>
</main>


<style>
.center-vertical {
  flex-direction: column;
  height: 100%
}
.card {
  margin-bottom: 10px;
}
.wrapper {
  display: flex;
  flex-direction: row;
}

.ansBlock {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

}


.ans {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  margin:5px 0;
  text-align: left;
  font-size: 18px;
  display: flex;
}

.text {
  width: 90%;
  align-self: center;
}

.letter {
  color: #000;
  opacity: 0.2;
  font-size: 20px;
  padding: 10px;
  align-self: center;
}

.correct {
  background: rgba(102, 102, 102, 0.1);
}
</style>
