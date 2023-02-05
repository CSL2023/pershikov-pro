<template>
  <section
    id="media"
    class="media"
  >
    <h2>
      {{ t('sections.media.headline') }}
    </h2>
    <p>
      {{ t('sections.media.text') }}
    </p>
    <div class="media-swiper">
      <swiper
        :slides-per-view="'auto'"
        :modules="modules"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="item in posts"
          :key="item.title"
        >
          <a :href="item.guid" target="_blank">
            <figure>
              <img
                :src="item.thumbnail"
                alt=""
              >
              <figcaption>
                {{ item.title }}
              </figcaption>
            </figure>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const { t } = useI18n()

		const onSwiper = (swiper) => {
			console.log(swiper)
		}

		return {
			t,
			onSwiper,
			modules: [ Navigation ],
		}
	},
	data:()=>  ({
		posts: []
	}),
	async beforeMount() {
		const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@viktor_pershikov')
		const { items } = await res.json()
		this.posts = items
		// console.log(items)
		if (this.posts.length <= 3 && window.innerWidth > 1560 ) {
			document.querySelector('.swiper-button-next').style.opacity = 0
		}
		document.querySelector('.swiper-button-prev').style.opacity = 0
	},
	methods: {
		onSlideChange() {
			if (window.innerWidth < 1560 && this.posts.length <= 3 ){
				document.querySelector('.swiper-button-prev').style.opacity = 1
			}
			console.log('slide change')
		}
	}
}

</script>

<style lang="scss">
.media {
  background: $color-dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 212px;
  @media screen and (max-width: 570px){
    padding: 73px 0 36px 20px;
    align-items: flex-start;
  }
  h2 {
    margin-bottom: 28px;
    @media screen and (max-width: 570px){
      padding-right: 20px;
      margin-bottom: 16px;
    }
  }
  p {
    color: $color-white-opacity;
    margin-bottom: 48px;
    @media screen and (max-width: 570px){
      padding-right: 20px;
      margin-bottom: 32px;
    }
  }
  a {
    display: block;
    //width: fit-content;
    max-width: 518px;
    max-height: 518px;
    width: 100%;
    height: 100%;
    position: relative;
    @media screen and (max-width: 570px) {
      max-width: 230px;
      max-height: 230px;
    }
  }
  figure {
    display: block;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 91.67%);
    width: 518px;
    height: 518px;
    transition: all .3s ease;
    @media screen and (max-width: 570px) {
      width: 230px;
      height: 230px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 31.25%, #000000 91.67%);
    }

    img {
      mix-blend-mode: darken;
      display: block;
      height: 100%;
      min-height: 100%;
      object-fit: cover;
      transition: all .3s ease;
      @media screen and (max-width: 570px) {
        object-fit: cover;
      }
    }
    figcaption {
      position: absolute;
      bottom: 36px;
      left: 36px;
      max-width: 446px;
      color: $color-white;
      transition: all .3s ease;
      @media screen and (max-width: 570px) {
        bottom: 12px;
        left: 12px;
        max-width: 206px;
      }
    }
    &:hover {
      img {
        filter: grayscale(1);
        transition: all .3s ease;
      }
      figcaption {
        color: $color-yellow;
        transition: all .3s ease;
      }
    }
  }
}





.media-swiper {
  max-width: 100vw;
  overflow: hidden;
}

.swiper-slide {
  max-width: 518px;
  margin-right: 16px !important;
  @media screen and (max-width: 570px){
    max-width: 230px;
    margin-right: 8px !important;
  }
}

.swiper-button-prev, .swiper-button-next {
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  backdrop-filter: blur();
  z-index: 200;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 22px;
    background: url("/media/svg/arrow.svg") no-repeat;
    background-size: contain;
  }
  @media screen and (max-width: 570px) {
    display: none;
  }
}
.swiper-button-prev {
  left: 0;
  &::after {
    left: 45%;
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
.swiper-button-next {
  right: 0;
}
.swiper {
  overflow: visible;
  //width: 100vw;
  //max-width: 1440px;
}

</style>
