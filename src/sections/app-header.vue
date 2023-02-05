<template>
  <header class="container">
    <div class="links">
      <a
        href="#contacts"
        @click.prevent="scrollIntoView($event)"
      >
        {{ t('header.link1') }}
      </a>
      <a
        href="#contacts"
        @click.prevent="scrollIntoView($event)"
      >
        {{ t('header.link2') }}
      </a>
    </div>
    <div class="langs">
      <a
        :style="{textDecoration: locale === 'en' ? 'underline' : 'none'}"
        @click.prevent="setLocale('ru')"
      >Рус</a>
      <span>/</span>
      <a
        :style="{textDecoration: locale === 'ru' ? 'underline' : 'none'}"
        @click.prevent="setLocale('en')"
      >Eng</a>
    </div>
  </header>
</template>

<script setup>

import { scrollIntoView } from '@/helpers.js'
import {useI18n} from 'vue-i18n'

const { t, locale } = useI18n()

const setLocale = (localeValue) => {
	localStorage.setItem('defaultLocale', localeValue)
	locale.value = localeValue
}

</script>

<style scoped lang="scss">
  header {
    color: $color-white-opacity;
    padding: 56px 84px 0 156px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 56px;
    //box-sizing: content-box;
    a {
      font-family: 'Golos', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      margin-right: 56px;
      &:hover {
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 570px){
      padding-left: 20px;
      padding-right: 20px;
      a {
        margin-right: 0;
        color: $color-yellow;
        font-size: 14px;
        line-height: 17px;
        &:last-of-type {
          display: none;
        }
      }
    }
    .langs {
      flex-shrink: 1;
      font-size: 18px;
      a {
        margin: 0 5px;
        display: inline;
      }
    }
  }
</style>
