<template>
  <header class="header mb-10 max-[540px]:mb-6">
    <div class="flex flex-row items-center gap-2">
      <img
        src="~/assets/icon/code.svg"
        alt="логотип."
        class="max-[540px]:w-8 max-[1300px]:w-10"
      />
      <span
        class="text-white text-4xl max-[540px]:text-xl max-[540px]:!leading-none max-[1300px]:text-3xl"
      >
        Sachkov Tech
      </span>
    </div>

    <a href="https://t.me/sachkova_mng" class="header__btn">
      <span class="header__btn-text whitespace-nowrap">По всем вопросам</span>
      <img
        src="~/assets/icon/star.png"
        alt="записаться."
        class="max-[540px]:w-6 max-[1300px]:w-7"
      />
    </a>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: 10, 1, 25, 0.6;
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

.header__btn {
  border-radius: 16px;
  border: 1px solid #e59cff;
  background-color: transparent;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: box-shadow 0.2s ease-in-out;
}

.header__btn:focus-visible {
  outline: none;
}

.header__btn:hover {
  box-shadow: 0 0 15px #e59cff;
  transition: box-shadow 0.2s ease-in-out;
}

.header__btn-text {
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

@media screen and (max-width: 1300px) {
  .header {
    padding: 20px 26px;
    border-radius: 16px;
  }

  .header__btn {
    border-radius: 14px;
    font-size: 16px;
    padding: 10px 14px;
  }
}

@media screen and (max-width: 540px) {
  .header {
    padding: 16px 12px;
    border-radius: 11px;
    box-shadow: 0px 0px 8px 0px rgba(198, 135, 234, 0.5) inset;
    gap: 0;
  }

  .header__btn {
    border-radius: 12px;
    font-size: 14px;
    padding: 8px 10px;
  }

  .header__btn:hover {
    box-shadow: 0 0 11px #e59cff;
  }
}
</style>
