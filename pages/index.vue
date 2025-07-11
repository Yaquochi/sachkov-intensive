<template>
  <div class="app">
    <!-- <div
      class="bg-red-500 text-white sticky top-0 left-0 right-0 w-full px-10 py-6 flex flex-row justify-center items-center divide-x drop-shadow-xl z-50 max-[540px]:px-6 max-[540px]:py-2"
    >
      <h2
        class="uppercase text-3xl px-3 max-[540px]:text-2xl max-[540px]:text-center"
      >
        новогодяя акция
      </h2>
      <span class="text-xl px-3 max-[540px]:text-center">
        23.12 <br class="hidden max-[540px]:inline" />
        - 01.01
      </span>
      <h2
        class="uppercase text-3xl px-3 max-[540px]:text-2xl max-[540px]:text-center"
      >
        скидки до 20%
      </h2>
    </div> -->

    <div class="app__fullcontent">
      <LayoutHeader />

      <div class="app__content">
        <LayoutIntensiveList />

        <LayoutFooter />
      </div>
    </div>

    <a href="#">
      <UButton
        icon="i-heroicons-arrow-small-up"
        size="xl"
        color="purple"
        variant="solid"
        class="fixed bottom-0 right-0 mb-4 mr-4 animate-bounce"
        :ui="{
          rounded: 'rounded-full',
          color: {
            purple: {
              solid: 'dark:text-white bg-purple-500 shadow-sm',
            },
          },
        }"
      />
    </a>
  </div>
</template>

<style>
* {
  font-family: "Play", sans-serif;
}

.app {
  background-color: #0a0119;
  background-image: url("~/assets/img/bg.png");
  background-size: cover;
  background-position: center top;
  min-height: 100vh;
  position: relative;
}

.app::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 1, 25, 0.4);
  pointer-events: none;
  z-index: 1;
}

.app__fullcontent {
  position: relative;
  z-index: 2;
  padding: 40px 100px;
  max-width: 1600px;
  margin: 0 auto;
  overflow: hidden;
}

.app__content {
  display: flex;
  flex-direction: column;
  gap: 140px;
}

@media screen and (max-width: 1300px) {
  .app__fullcontent {
    padding: 34px 40px;
  }

  .app__content {
    gap: 100px;
  }
}

@media screen and (max-width: 540px) {
  .app {
    background-image: url("~/assets/img/bgmobile.png");
  }

  .app__fullcontent {
    padding: 24px 8px;
  }

  .app__content {
    gap: 60px;
  }
}
</style>
