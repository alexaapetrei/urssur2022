<script>
    import { change, categoria } from "../stores/intrebari";
</script>
<div class="tabs is-toggle is-fullwidth is-medium">
    <ul>
      <li class:is-active={$categoria === "a"}>
        <a href="null" on:click|preventDefault="{()=>(change('a')) }">
          <span>A</span>
        </a>
      </li>
      <li class:is-active={$categoria === "b"}>
        <a href="null" on:click|preventDefault="{()=>(change('b')) }">
          <span>B</span>
        </a>
      </li>
      <li class:is-active={$categoria === "c"}>
        <a href="null" on:click|preventDefault="{()=>(change('c')) }">
          <span>C</span>
        </a>
      </li>
      <li class:is-active={$categoria === "d"}>
        <a href="null" on:click|preventDefault="{()=>(change('d')) }">
          <span>D</span>
        </a>
      </li>
      <li class:is-active={$categoria === "e"}>
        <a href="null" on:click|preventDefault="{()=>(change('e')) }">
          <span>E</span>
        </a>
      </li>
      <li class:is-active={$categoria === "r"}>
        <a href="null" on:click|preventDefault="{()=>(change('r')) }">
          <span>R</span>
        </a>
      </li>
    </ul>
  </div>
  
