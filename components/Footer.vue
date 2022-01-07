<template>
  <div class="footer">
    <ul class="social-links">
      <li>
        <a class="social-link" target="_blank" href="https://vk.com/welcome_bfu">
          <fa
          class="icon"
          :icon="['fab','vk']" />
        </a>
      </li>
      <li>
        <a class="social-link" target="_blank" href="https://www.instagram.com/welcomebfu/">
          <fa
          class="icon"
          :icon="['fab','instagram']" />
        </a>
      </li>
      <li>
        <a class="social-link" target="_blank" href="https://vk.com/welcome_bfu">
          <fa
          class="icon"
          :icon="['fab','tiktok']" />
        </a>
      </li>
    </ul>
    <p class="welcome"><span class="highlight">Welcome-центр</span> БФУ им.Канта</p>
  </div>
</template>

<style scoped>
.footer {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.welcome {
  text-align: center;
}
.social-links {
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
}
.social-link {
  font-size: 36px;
  margin: 0 20px;
  cursor: pointer;
  color: inherit;
}
.social-link .icon {
  transition: all 0.2s ease-out;
}
.social-link:hover .icon{
  transform: scale(1.1);
}
</style>
