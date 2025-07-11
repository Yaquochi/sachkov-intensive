<template>
  <section class="section">
    <h2 class="section__title">Доступные интенсивы</h2>

    <Carousel
      :itemsToShow="
        $viewport.isLessThan('tablet') || intensivies.length < 2 ? 1 : 2
      "
      :wrap-around="$viewport.isLessThan('tablet')"
      :mouseDrag="false"
      class="carousel-container"
    >
      <Slide v-for="(int, index) in intensivies" :key="int.id">
        <div class="relative">
          <div v-if="index === 1" class="section__new-badge">НОВИНКА</div>
          <div
            class="section__card section__card_main w-[440px] max-[768px]:w-full max-[1300px]:w-[380px] h-full mx-auto"
            @click="changeIntensive(int)"
          >
            <div class="flex flex-col h-full">
              <h3
                class="section__card-title mb-3 font-bold bg-gradient-to-r from-amber-400 to-yellow-300 inline-block text-transparent bg-clip-text min-h-[72px] items-center"
              >
                {{ int.name }}
              </h3>

              <div
                class="divide-x divide-neutral-300 mb-3 section__card section__card_mini flex-shrink-0"
              >
                <span class="mr-2">
                  {{ int.lessonsAmount }}
                  {{ getNoun(int.lessonsAmount, "урок", "урока", "уроков") }}
                </span>
                <span class="pl-2">{{ int.duration }} ч.</span>
              </div>

              <p class="line-clamp-2 flex-grow min-h-[48px] flex items-start">
                {{ int.shortDescr }}
              </p>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation v-if="!$viewport.isLessThan('tablet')" />
      </template>
    </Carousel>

    <div class="flex flex-col" :key="currentIntensive.id">
      <h3 class="section__cur-title mb-7">{{ currentIntensive.name }}</h3>

      <div
        v-thtml="currentIntensive.fullDescription"
        class="mb-7 text-neutral-300"
      ></div>

      <h3 class="mb-3 section__cur-title !text-3xl">Программа интенсива</h3>

      <UAccordion
        :key="currentIntensive.id"
        class="accordion"
        color="white"
        variant="soft"
        :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
        multiple
        :items="currentIntensive.programm"
        :ui="{
          default: {
            class:
              'text-2xl text-left w-full max-[540px]:text-lg border-t rounded-none py-5 max-[1300px]:py-4',
            truncate: false,
          },
          item: {
            size: 'text-lg max-[540px]:text-base',
          },
          transition: {
            enterActiveClass: 'duration-500',
            leaveActiveClass: 'duration-500',
          },
        }"
      >
        <template #default="{ item, index, open }">
          <UButton
            :color="item.comingSoon ? 'gray' : 'white'"
            :variant="item.comingSoon ? 'ghost' : 'soft'"
            class="section__accordion-button"
            :class="{
              'section__accordion-button_coming-soon': item.comingSoon,
            }"
          >
            <span class="flex items-center justify-between w-full">
              <span class="flex items-center gap-3 flex-1">
                <span v-if="item.comingSoon" class="section__coming-soon-badge">
                  СКОРО ВЫЙДЕТ
                </span>
                <span
                  class="flex-1"
                  :class="{ 'section__coming-soon-text': item.comingSoon }"
                  >{{ item.label }}</span
                >
              </span>

              <UIcon
                :name="
                  open ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'
                "
                class="w-5 h-5 transform transition-transform duration-200"
              />
            </span>
          </UButton>
        </template>

        <template #item="{ item }">
          <div
            v-if="item.comingSoon"
            class="text-white section__card section__coming-soon-content"
          >
            <p class="text-center text-neutral-400 italic">
              Урок находится в разработке. Содержание будет доступно после
              релиза.
            </p>
          </div>
          <p v-else v-thtml="item.content" class="text-white section__card"></p>
        </template>
      </UAccordion>

      <div
        class="mt-7 w-full flex flex-row items-center gap-8 max-[540px]:flex-col max-[540px]:items-end max-[540px]:gap-4"
      >
        <a
          :href="currentIntensive.buyLink"
          class="section__buy-btn section__buy-btn_full !w-1/5 max-[1020px]:!w-1/3 max-[768px]:!w-1/2 max-[540px]:!w-full"
        >
          Приобрести
        </a>
        <div
          v-if="currentIntensive.sale"
          class="flex flex-row items-start gap-3"
        >
          <span class="text-5xl font-semibold max-[768px]:text-4xl">
            {{ currentIntensive.sale }} ₽
          </span>

          <span
            class="line-through text-3xl max-[768px]:text-2xl text-neutral-500"
          >
            {{ currentIntensive.price }} ₽
          </span>
        </div>

        <span v-else class="text-5xl font-semibold max-[540px]:text-4xl">
          {{ currentIntensive.price }} ₽
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $viewport } = useNuxtApp();

import { intensivies } from "~/assets/intensivies/intensivies";

const currentIntensive = ref(intensivies[0]);

const changeIntensive = (int) => {
  currentIntensive.value = int;
};

const getNoun = (num, one, two, five) => {
  let n = Math.abs(num);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.section__title {
  font-size: 70px;
  font-weight: 800;
  line-height: 110%;
  background: linear-gradient(
    90deg,
    #e59cff 0.01%,
    #ba9cff 50.01%,
    #9cb2ff 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section__card {
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  padding: 24px;
  position: relative;
}

.section__card_active {
  box-shadow: 0 0 15px #e59cff;
}

.section__card_main:hover {
  cursor: pointer;
  box-shadow: 0 0 15px #e59cff;
  transition: all 0.2s ease-in-out;
}

.section__card_main {
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  min-height: 240px;
  height: 100%;
}

.section__card_mini {
  border-radius: 10px;
  padding: 6px 12px;
}

.section__card-title {
  font-size: 28px;
  line-height: 130%;
}

.carousel-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.carousel__slide {
  padding: 15px 5px;
  width: fit-content !important;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.section__cur-title {
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(
    90deg,
    #9cb2ff 0.01%,
    #c2b8ff 50.01%,
    #e59cff 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section__buy-btn {
  width: 100%;
  padding: 13px 18px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #e59cff;
  background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  color: #0a0119;
  font-size: 16px;
  transition: box-shadow 0.2s ease-in-out;
}

.section__buy-btn_full {
  font-size: 21px;
  padding: 16px 32px;
  border-radius: 16px;
}

.section__buy-btn:hover {
  box-shadow: 0px 0px 15.1px 0px #e59cff inset;
  transition: box-shadow 0.2s ease-in-out;
}

@media screen and (max-width: 1300px) {
  .section {
    gap: 32px;
  }

  .section__title {
    font-size: 58px;
  }

  .section__card {
    border-radius: 16px;
    padding: 18px;
  }

  .section__card_main {
    min-height: 220px;
  }

  .section__card-title {
    font-size: 24px;
    min-height: 64px;
  }

  .carousel {
    padding: 0 20px;
  }

  .section__cur-title {
    font-size: 36px;
  }
}

@media screen and (max-width: 540px) {
  .section {
    gap: 26px;
  }

  .section__title {
    font-size: 28px;
  }

  .section__card {
    border-radius: 12px;
    font-size: 16px;
    padding: 12px;
  }

  .section__card_main {
    min-height: 180px;
  }

  .section__card_mini {
    border-radius: 8px;
    padding: 4px 10px;
  }

  .section__card-title {
    font-size: 20px;
    min-height: 56px;
  }

  .carousel {
    padding: 0;
  }

  .section__buy-btn {
    padding: 10px 15px;
    border-radius: 8px;
  }

  .section__buy-btn_full {
    font-size: 18px;
    padding: 12px 20px;
    border-radius: 12px;
  }

  .section__cur-title {
    font-size: 32px;
  }
}

.section__accordion-button {
  text-align: left !important;
  width: 100% !important;
  border-radius: 0 !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 20px 0 !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  justify-content: flex-start !important;
}

.section__accordion-button_coming-soon {
  background: transparent !important;
}

.section__accordion-button_coming-soon:hover {
  background: transparent !important;
}

.section__coming-soon-badge {
  background: rgba(156, 178, 255, 0.2);
  color: rgba(156, 178, 255, 0.8);
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  border: 1px solid rgba(156, 178, 255, 0.3);
  flex-shrink: 0;
}

.section__coming-soon-text {
  color: rgba(255, 255, 255, 0.6) !important;
}

.section__coming-soon-content {
  opacity: 0.6;
}

.section__new-badge {
  position: absolute;
  top: -8px;
  right: 12px;
  background: linear-gradient(90deg, #e59cff, #ba9cff);
  color: #0a0119;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(229, 156, 255, 0.3);
}

@media screen and (max-width: 1300px) {
  .section__accordion-button {
    padding: 16px 0 !important;
    font-size: 20px !important;
  }

  .section__coming-soon-badge {
    font-size: 10px;
    padding: 2px 6px;
  }

  .section__new-badge {
    font-size: 11px;
    padding: 3px 10px;
    top: -6px;
    right: 10px;
  }
}

@media screen and (max-width: 540px) {
  .section__accordion-button {
    font-size: 18px !important;
  }

  .section__coming-soon-badge {
    font-size: 9px;
    padding: 1px 5px;
  }

  .section__new-badge {
    font-size: 10px;
    padding: 2px 8px;
    top: -5px;
    right: 8px;
  }
}
</style>
