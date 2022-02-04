<script>
import {page} from '$app/stores';
</script>
  <nav class="coolNav">
    <a href="/" class:active={$page.url.pathname === '/'}>
      <img src="/img/logo-drop.svg"
        class="logo"
        alt="UrsSur"
      >
      <span class="logoText">
        UrsSur
      </span>
    </a>
    <a href="/chestionar" class:active={$page.url.pathname === '/chestionar'}>Chestionar</a>
    <a href="/search" class:active={$page.url.pathname === '/search'}>Cauta</a>
  </nav>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coolNav {
  display: flex;
  position: absolute;
  background: #ffcd00 /* skyblue */;
  top:0;
  left:0;
  right: 0;
  padding-top: 5px
}
.logo {
  width: 50px;
}
@media (max-width:400px) {
  .logoText {
    display: none;
  }
}

.coolNav a {
  z-index: 99;
  text-decoration: none;
  text-align: center;
  color: #D70D34;
  font-weight: bold;
  line-height: 42px;
  vertical-align: middle;
  padding: 0 5px;
  margin: 0 5px;
  border: 3px solid transparent;
  flex: 1;
  justify-content: center;
}

.coolNav a:hover {
  border-bottom: 3px solid rgba(102, 102, 102, 0.1);
}


.coolNav img {
  display: inline-block;
  vertical-align: middle;
}

.active {
  background: rgba(102, 102, 102, 0.1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

}
</style>
