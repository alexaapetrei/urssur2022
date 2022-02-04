<script>
     import { categoria, intrebari, change } from "../stores/intrebari";
     import Ans from "../components/ans.svelte"
     import {onMount} from "svelte";
     import { browser } from "$app/env";
     let curr_corecte = []
     let curr_gresite = []
     let goal = 26
     let curenta = 0
     let answers = []
     let corecta = ""
     let verificata = false

     function answerClick(a) {
       answers.includes(a) 
       ? answers = answers.filter(ans => ans!= a) 
       : answers.push(a); answers = answers
      // Interesting new aproch :D
      // if (answers.includes(a)) {
      //   answers = answers.filter(ans => ans!= a)
        
      // }else {
      //   answers.push(a)
      // }
      console.log(answers)

     }

     function checkAnswer() {
      
       if($intrebari[curenta].v === answers.join('')){
        curr_corecte.push($intrebari[curenta].id)
        curr_corecte = curr_corecte
        console.log("Correct Answer"+curr_corecte.length)
        corecta = "true"
        
        
       } else {
        curr_gresite.push($intrebari[curenta].id)
        curr_gresite = curr_gresite
        corecta = "false"
        console.log("Wrong answer bro"+curr_corecte.length / goal * 100)
        
       }
       verificata = true
       verificata = verificata
     }

     function nextQuestion() {
      verificata = false
      verificata = verificata
      answers = []
      answers = answers
      curenta = curenta + 1
      corecta = ""

     }

</script>

<div class="sup container">

  <div class="columns is-mobile ">
      <div class="column is-8">
        <div class="stacked_progress">
          <div  style='width:{curr_corecte.length / goal * 100}%; background:green' ></div>
          <div  style='width:{curr_gresite.length / goal * 100}%; background:red'></div>
        </div>
      </div>

      <div class="column has-text-centered is-3">
        { curr_corecte.length + curr_gresite.length} / { goal }
      </div>

<!--       
      <div class="column is-1">
        <timer></timer>
      </div> -->
  </div>
    

  <div class="testThing" >

 
    <h2 class="title is-4">
      {$intrebari[curenta].q}
    </h2>


      <div class="columns">
        {#if $intrebari[curenta].i > 0}
        <div class="column">
            <figure class="image is-3by2">
              <img src='/img/{$categoria}/{$intrebari[curenta].i}.jpg'>
            </figure>
        </div>  
        {/if}
        <div class="column">
          {#each ["a","b","c"] as ans}
          <div on:click={()=>answerClick(ans)}>
            <Ans  text={$intrebari[curenta][ans]} 
                  value={ans}
                  active={answers.includes(ans) ? true : false}   
            >
            </Ans>
          </div>
            {/each}
            </div>
            
</div>
 
</div>
</div>
{#if answers.length}
<div class="verificator" class:wrong={corecta==='false' && corecta.length > 0}>
  {#if corecta === "true"}
  <div class="msg">
    <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <article class="media">
              <figure class="media-left">
                <img src="/img/happy.svg" class="logo" alt="UrsSur"> 
              </figure>
                <div class="media-content">
                  <p>Bravo ai raspuns corect :</p>
                  <p><strong class="v">{$intrebari[curenta].v}</strong></p>
                </div>
            </article>
          </div>
      </div>
  </div>
  {/if}
  {#if corecta === "false"}
  <div class="msg">
    <div class="columns">
       <div class="column is-half is-offset-one-quarter">
         <article class="media">
           <figure class="media-left">
             <img src="/img/ooops.svg" class="logo" alt="UrsSur">
           </figure>
             <div class="media-content">
               <p>Omul din greseli invata !</p>
               <p>Corect este : <strong class="v">{$intrebari[curenta].v}</strong></p>
             </div>
         </article>
       </div>
   </div>
 </div>
  {/if}      
  

  {#if answers.length}
  
 
  <div class="questions-menu"> 
    {#if !verificata}
    <button class="verifica" 
    type="button" 
    name="button" 
    on:click="{checkAnswer}">
      <svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg>
        <symbol id="icon-checkmark" viewBox="0 0 32 32">
          <title>checkmark</title>
          <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
        </symbol>
    Verifica
    </button>
    {/if}
    
    {#if verificata}
    <button class="urmatoarea" 
      on:click="{nextQuestion}">Urmatoarea
    </button>
    {/if}
    
</div>
{/if}

</div>
{/if}
<style>
    .icon {
      display: inline-flex;
      width: 1em;
      height: 1em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
      align-content: center;
    }
    
    .verificator {
      background: green;
      color:#fff;
      font-size: 44px;
      text-align: center;
      position: fixed;
      bottom:0;
      left: 0;
      right: 0;
      padding-bottom: 72px;
      padding-top:20px;
    }
    
    .verificator img {
      width: 90px;
    }
    
    .msg {
      font-size: 22px;
    }
    
    .v {
      text-transform: uppercase;
      letter-spacing: 10px;
      color: #fff;
    }
    
    .wrong {
      background: red;
    }
    .questions-menu {
      display: flex;
      flex-wrap:nowrap;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
    }
    
    .questions-menu button {
      width: 50%;
      font-size: 22px;
      border-radius: 5px;
      padding: 10px;
    }
    
    .questions-menu .verifica:hover{
      border: 3px solid #D70D34;
    }
    
    .verifica {
      background: #fff;
      color: #D70D34;
      border: 3px solid #D70D34;
    }
    
    .questions-menu .urmatoarea {
      color: #fff;
      background: transparent;
      border: 3px solid white;
    }
    .testThing {
      margin-bottom: 400px;
    }
    
    .modal h2 {
      text-transform: capitalize;
    }
    
    h2 {
      min-height: 42px;
    }
    
    </style>