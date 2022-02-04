<script>
    export let value = "default";
    export let text = "O Intrebare cool";
    export let active = false;
    
    
    function handleClick() {
        active = !active
    } 
    </script>


    <div class="ans"
        class:active={active === true}
      on:click={handleClick}
    > 
    
      <span class="tick">
        <svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg>
        <symbol id="icon-checkmark" viewBox="0 0 32 32">
        <title>checkmark</title>
        <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
        </symbol>
      </span>
      <span class="letter">
        {value}
      </span>
      <span class="text">
        {text}
      </span>
    </div>
  
  
  <style>
  * {
  
    /* 
      makes it so that clicking button 
      is not cunfused with selecting text 
    */
    user-select:none; 
  }
  .ans {
    min-height: 49px;
    background: rgba(102, 102, 102, 0.1);
    border-radius: 5px;
    border-bottom: 2px solid #666;
    padding: 5px 10px;
    margin:5px 0;
    text-align: left;
    font-size: 18px;
    /*line-height: 20px;*/
    display: flex;
  }
  
  .ans:hover {
    border-top: 2px solid #fff;
    border-bottom: 0;
  }
  
  .text {
    width: 90%;
    align-self: center;
  }
  
  .tick {
    display: none;
    width: 40px;
    height: 40px;
    align-self: center;
    margin: 12.5px 10px 12.5px 0;
  }
  
  .active .tick {
    display: inline-flex;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    align-content: center;
    animation: swing-in-bottom-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  }
  .active .letter {
    display: none;
    height: 40px;
  }
  .letter {
    color: #000;
    opacity: 0.2;
    font-size: 40px;
    padding: 10px;
    align-self: center;
  }
  
  .active {
    color: #fff;
    background: #D70D34;
    border-top: 2px solid #fff;
    border-bottom: 0;
    min-height: 42px;
    padding: 5px 10px;
    margin:5px 0;
  }
  </style>