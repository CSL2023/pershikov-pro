<template>
  <footer class="footer">
    <a
      class="tg-btn"
      href="https://t.me/pershikov"
      target="_blank"
      aria-label="button"
    >
      <img
        src="/media/svg/tg-btn.svg"
        alt=""
      >
      <span>{{ t('footer.btn') }}</span>
    </a>
    <div
      id="contacts"
      class="contacts"
    >
      <a href="mailto:viktor@pershikov.pro">viktor@pershikov.pro</a>
      <a
        href="https://t.me/viktor_pershikov"
        target="_blank"
      >viktor_pershikov</a>
    </div>
    <p
      class="place"
      v-html="t('footer.address')"
    />
  </footer>
</template>

<script setup>

import {useI18n} from 'vue-i18n'

const { t } = useI18n()

</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tg-btn {
  background: #0089BB;
  border-radius: 12px;
  padding: 14px 40px 16px;
  margin-top: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 16px;
  color: $color-white;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  font-family: 'Golos', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 122%;
  text-decoration: none;
  @media screen and (max-width: 570px) {
    font-size: 18px;
    border-radius: 8px;
    margin-top: 65px;
    padding-left: 34px;
    padding-right: 34px;
    grid-gap: 12px;
    padding-bottom: 12px;
    width: fit-content;
  }
  &:hover {
    transition: all .3s ease;
    background: #00688D;
  }
  img {
    width: 32px;
    height: 32px;
    @media screen and (max-width: 570px) {
      width: 24px;
      height: 24px;
    }
  }
}
.contacts {
  margin: 135px 0 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 570px) {
    margin-bottom: 0;
    margin-top: 50px;
  }
  a {
    font-family: 'Golos', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;
    display: inline;
    width: fit-content;
    position: relative;
    @media screen and (max-width: 570px){
      font-size: 24px;
    }
    &::before {
      position: absolute;
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      bottom: 0;
      background: $color-yellow;
      transition: all .3s ease;
    }
    &:hover::before {
      height: 0;
      transition: all .2s ease;
    }
    &:last-of-type {
      margin-top: 37px;
      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        background: url("/media/svg/telegram.svg") center center no-repeat;
        height: calc(38px * 1.4);
        width: 28px;
        margin-left: 8px;
        text-decoration: none;
        @media screen and (max-width: 570px) {
          width: 20px;
          height: 12px;
          background-size: cover;
          margin-top: 12px;
          margin-left: 12px;
        }
      }
    }
  }
  img {
    display: inline;
    font-size: 38px;
    margin-left: 8px;
  }
}
.place {
  text-align: center;
  color: $color-white-opacity;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin: 0 0 118px;
  @media screen and (max-width: 570px) {
    font-size: 16px;
    margin-bottom: 48px;
    margin-top: 69px;
  }
}
</style>
