<template>
  <section class="intro container">
    <div class="text">
      <h1 v-html="t('sections.intro.headline')" />
      <img
        src="/media/victor-pershikov-mobile.png"
        alt=""
        class="img-mobile"
      >
      <p>
        <span class="text-yellow">
          {{ t('sections.intro.text.yellow1') }}
        </span>
        {{ t('sections.intro.text.text1') }}
        <span class="text-yellow">
          {{ t('sections.intro.text.yellow2') }}
        </span>
      </p>
    </div>
<!--    <div class="image-wrapper">-->
      <picture class="image">
        <img
          src="/media/victor-pershilov-desktop.png"
          alt=""
          class="image"
        >
      </picture>
<!--    </div>-->
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style scoped lang="scss">
  .intro {
    margin-top: 58px;
    padding: 0 84px 106px 156px;
    display: flex;
    //align-items: center;
    grid-gap: 25px;
    justify-content: space-between;
    @media screen and (max-width: 570px){
      padding: 110px 20px 67px;
    }
  }
  .text {
    flex-grow: 1;
    flex-basis: 50%;
    h1 {
      margin-top: 75px;
      margin-bottom: 48px;
      @media screen and (max-width: 570px){
        margin-bottom: 24px;

        &::after {
          content: '';
          display: block;
          width: 3px;
          height: 365px;
          margin-left: calc(132px - 20px);
          margin-top: 12px;
          background: $color-yellow;
        }
      }
    }
    p {
      max-width: 446px;
      font-size: 28px;
      @media screen and (max-width: 570px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 145%;
      }
    }
    .img-mobile {
      display: none;
      @media screen and (max-width: 570px) {
        display: block;
        margin-bottom: 24px;
        max-width: 224px;
      }
    }
  }
  .image {
      display: block;
      text-align: center;
      object-fit: cover;
    max-width: 40vw;
    @media screen and (max-width: 570px) {
      display: none;
    }
  }
</style>
