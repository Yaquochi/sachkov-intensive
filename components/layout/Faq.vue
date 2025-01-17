<template>
  <section class="flex flex-row gap-10 max-[540px]:flex-col max-[540px]:gap-4">
    <div class="card h-fit max-[540px]:!hidden">
      <h3 class="card__title whitespace-nowrap">Остались вопросы?</h3>

      <a href="https://t.me/sachkova_mng" class="card__consult-btn">
        Написать в Telegram
      </a>
    </div>

    <h2 class="hidden max-[540px]:inline title">FAQ</h2>

    <UAccordion
      color="white"
      variant="outline"
      :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
      multiple
      :items="faq"
      open-icon="i-heroicons-plus"
      close-icon="i-heroicons-minus"
      :ui="{
        default: {
          class: 'text-xl mb-2.5 w-full max-[540px]:text-lg text-left',
          truncate: false,
        },
        item: {
          size: 'text-lg max-[540px]:text-base',
          color: 'text-white/80',
        },
        transition: {
          enterActiveClass: 'duration-500',
          leaveActiveClass: 'duration-500',
        },
      }"
    />
  </section>
</template>

<script setup>
const { $viewport } = useNuxtApp();

const faq = [
  {
    label: "Что такое интенсив?",
    content:
      "Я приглашаю вас в телеграм канал, в котором хранятся все записи занятий, задания, чаты с поддержкой. Ты сразу сможешь влиться в работу.",
  },
  {
    label: "На какрое время я получу доступ к интенсиву?",
    content:
      "Фронтенд знать необязательно, его мы будем изучать с нуля. Тебе нужно знать только C# на базовом уровне.",
  },
];
</script>

<style scoped>
.card {
  border-radius: 30px;
  border: 1px solid #e59cff;
  background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 40px;
  gap: 48px;
}

.card__title {
  color: #0a0119;
  font-size: 40px;
  font-weight: 600;
  line-height: 110%;
}

.card__consult-btn {
  padding: 16px 32px;
  text-align: center;
  border-radius: 24px;
  border: 1px solid, #e59cff;
  background: #0a0119;
  box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
  color: #fff;
  font-size: 20px;
  line-height: 150%;
  transition: box-shadow 0.2s ease-in-out;
  text-wrap: nowrap;
}

.card__consult-btn:hover {
  box-shadow: 0px 0px 15.1px 0px #e59cff inset;
  transition: box-shadow 0.2s ease-in-out;
}

.title {
  font-size: 32px;
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

@media screen and (max-width: 1300px) {
  .card {
    border-radius: 24px;
    padding: 30px;
  }

  .card__title {
    font-size: 32px;
  }

  .card__consult-btn {
    padding: 14px 52px;
    border-radius: 18px;
    font-size: 18px;
  }
}
</style>
