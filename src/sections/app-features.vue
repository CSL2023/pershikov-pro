<template>
  <section class="features">
    <div class="container">
      <div class="mobile-headline">
        {{ t('sections.features.headline') }}
      </div>
      <div class="card">
        <h3>{{ t('sections.features.consulting.headline') }}</h3>
        <p>
          {{ t('sections.features.consulting.p1.text1') }}
          <span
          >
            {{ t('sections.features.consulting.p1.yellow') }}
          </span>
        </p>
        <p>
          {{ t('sections.features.consulting.p2.text1') }}
          <a
            href="#media"
            class="text-yellow"
            @click.prevent="scrollIntoView($event)"
          >
            {{ t('sections.features.consulting.p2.yellow1') }}
          </a>
          {{ t('sections.features.consulting.p2.text2') }}
        </p>
        <p>
          {{ t('sections.features.consulting.p3.text1') }}
        </p>
      </div>
      <div class="card">
        <h3>{{ t('sections.features.analytics.headline') }}</h3>
        <p v-text="t('sections.features.analytics.p1')" />
        <p v-text="t('sections.features.analytics.p2')" />
        <p v-text="t('sections.features.analytics.p3')" />
      </div>
      <div class="card">
        <h3>{{ t('sections.features.trading.headline') }}</h3>
        <p>
          {{ t('sections.features.trading.p1.text') }}
          <a
            href="https://caslinvest.com"
            target="_blank"
            rel="nofollow"
            class="text-yellow"
          >
            {{ t('sections.features.trading.p1.yellow') }}
          </a>
        </p>
        <p v-text="t('sections.features.trading.p2')" />
        <p v-text="t('sections.features.trading.p3')" />
      </div>
      <div class="card">
        <h3>{{ t('sections.features.publishing.headline') }}</h3>
        <p>
          {{ t('sections.features.publishing.p1.text') }}
          <a
            href="https://ifta.org/publications/journal"
            target="_blank"
            rel="nofollow"
            class="text-yellow"
          >{{ t('sections.features.publishing.p1.yellow') }}</a>
        </p>
        <p v-text="t('sections.features.publishing.p2')" />
        <p>
          {{ t('sections.features.publishing.p3.text1') }}
          <a
            href="https://www.amazon.com/Complete-Guide-Comprehensive-Fibonacci-Analysis/dp/160796760X"
            target="_blank"
            rel="nofollow"
            class="text-yellow"
          >{{ t('sections.features.publishing.p3.yellow') }} </a>
          {{ t('sections.features.publishing.p3.text2') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

import { scrollIntoView } from '@/helpers.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped lang="scss">
  .features {
    background: $color-dark;
    @media screen and (max-width: 570px) {
      border-bottom: 3px solid $color-dark-gray;
    }
    .container {
      padding: 149px 110px 245px 156px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 116px;
      grid-row-gap: 115px;
      @media screen and (max-width: 570px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding: 56px 20px 5px 21px;
        grid-row-gap: 0;
        .card {
          margin-bottom: 49px;
        }
      }
    }
    h3 {
      margin-bottom: 24px;
      @media screen and (max-width: 570px) {
        margin-bottom: 16px;
      }
    }
    p {
      margin-bottom: 10px;
    }
    a:hover {
      color: $color-white;
      text-decoration: none;
      transition: all .2s ease;
    }
  }

  .mobile-headline {
    display: none;
    @media screen and (max-width: 570px) {
      display: block;
      font-family: 'Golos', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.1em;
      color: #FCB300;
      margin-bottom: 32px;
    }
  }
</style>
