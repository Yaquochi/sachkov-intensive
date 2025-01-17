<template>
  <section class="section">
    <h2 class="section__title">Доступные интенсивы</h2>

    <Carousel
      :itemsToShow="$viewport.isLessThan('tablet') ? 1 : 2"
      :wrap-around="$viewport.isLessThan('tablet')"
      :mouseDrag="false"
    >
      <Slide v-for="(int, index) in intensivies" :key="index">
        <div
          class="section__card section__card_main w-96 max-[540px]:w-full max-[1300px]:w-80"
          @click="changeIntensive(int)"
        >
          <h3 class="section__card-title">
            {{ int.name }}
          </h3>

          <p class="line-clamp-2">
            {{ int.descr }}
          </p>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation v-if="!$viewport.isLessThan('tablet')" />
      </template>
    </Carousel>

    <div class="flex flex-col">
      <h3 class="section__cur-title mb-5">{{ currentIntensive.name }}</h3>

      <p class="text-xl mb-7 text-neutral-300">{{ currentIntensive.descr }}</p>

      <UAccordion
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
        <template #item="{ item }">
          <p v-thtml="item.content" class="text-white section__card"></p>
        </template>
      </UAccordion>
    </div>
  </section>
</template>

<script setup>
const { $viewport } = useNuxtApp();

const intensivies = [
  {
    id: 0,
    name: "Intensive 1",
    descr:
      "ksjdksjd sjdjsd dbs bd hhsdgdgds ddsdsd sdgsd sdsgdhs jx dhd ddd dd sd sd s ds dsdsds",
    programm: [
      {
        label: "Реляционные и неряционные базы данных",
        content: `<p>Практически ни одно бэкенд приложение не обходится без базы данных.
						В этом курсе мы подробно изучим как работать с
						<span class="programm-span">PostgreSQL</span>,
						<span class="programm-span">MongoDb</span>
						<span class="programm-span">Redis</span>.
						На практике поработаем с <span class="programm-span">EF Core</span> и
						<span class="programm-span">Dapper</span>. Научимся проектировать базу
						данных, настривать сложные конфигурции для анемичных и богатых моделей,
            писать сложные запросы, применять фильтрацию, пагинацию, сортировку, делать выборки и управлять транзакциями и блокировками.
			Все эти знания вам обязательно понадобятся на реально работе и будут украшать ваше резюме.</p>`,
      },
      {
        label: "ASP.NET Core",
        content: `<p>На этом курсе мы очень подробно изучим, как разрабатывать
						масштабируемые и производительные
						<span class="programm-span">Web API</span> приложения с помощью
						<span class="programm-span">ASP.NET Core</span>. Вы научитесь
						работать с <span class="programm-span">конфигурациями</span>,
						<span class="programm-span">логированием</span>,
						<span class="programm-span">контроллерами</span>,
						<span class="programm-span">Minimal Api</span>,
						<span class="programm-span">Swagger</span>,
						<span class="programm-span">роутингом</span>,
						<span class="programm-span">Middleware</span>,
						<span class="programm-span">аутентификацией</span> и
						<span class="programm-span">авторизацией</span>,
						<span class="programm-span">атрибутами</span> и
						<span class="programm-span">фильтрами</span>.
						Почти все наши сервисы будут иметь web api интерфейс для взаимодействия с внешним миром.
						ASP.NET Core очень упрощает разработку веб приложений, сейчас данный фреймворк является стандартом индустрии.</p>`,
      },
    ],
  },
  {
    id: 1,
    name: "Intensive 2",
    descr: "ksjdksjd sjdjsd dbs bd hhsdgdgds ddsdsd sdgsd sdsgdhs jx dhd ddd",
    programm: [
      {
        label: "Реляционные и неряционные базы данных",
        content: `<p>Практически ни одно бэкенд приложение не обходится без базы данных.
						В этом курсе мы подробно изучим как работать с
						<span class="programm-span">PostgreSQL</span>,
						<span class="programm-span">MongoDb</span>
						<span class="programm-span">Redis</span>.
						На практике поработаем с <span class="programm-span">EF Core</span> и
						<span class="programm-span">Dapper</span>. Научимся проектировать базу
						данных, настривать сложные конфигурции для анемичных и богатых моделей,
            писать сложные запросы, применять фильтрацию, пагинацию, сортировку, делать выборки и управлять транзакциями и блокировками.
			Все эти знания вам обязательно понадобятся на реально работе и будут украшать ваше резюме.</p>`,
      },
      {
        label: "ASP.NET Core",
        content: `<p>На этом курсе мы очень подробно изучим, как разрабатывать
						масштабируемые и производительные
						<span class="programm-span">Web API</span> приложения с помощью
						<span class="programm-span">ASP.NET Core</span>. Вы научитесь
						работать с <span class="programm-span">конфигурациями</span>,
						<span class="programm-span">логированием</span>,
						<span class="programm-span">контроллерами</span>,
						<span class="programm-span">Minimal Api</span>,
						<span class="programm-span">Swagger</span>,
						<span class="programm-span">роутингом</span>,
						<span class="programm-span">Middleware</span>,
						<span class="programm-span">аутентификацией</span> и
						<span class="programm-span">авторизацией</span>,
						<span class="programm-span">атрибутами</span> и
						<span class="programm-span">фильтрами</span>.
						Почти все наши сервисы будут иметь web api интерфейс для взаимодействия с внешним миром.
						ASP.NET Core очень упрощает разработку веб приложений, сейчас данный фреймворк является стандартом индустрии.</p>`,
      },
    ],
  },
  {
    id: 2,
    name: "Intensive 3",
    descr: "ksjdksjd sjdjsd dbs bd hhsdgdgds ddsdsd sdgsd sdsgdhs jx dhd ddd",
    programm: [
      {
        label: "Реляционные и неряционные базы данных",
        content: `<p>Практически ни одно бэкенд приложение не обходится без базы данных.
						В этом курсе мы подробно изучим как работать с
						<span class="programm-span">PostgreSQL</span>,
						<span class="programm-span">MongoDb</span>
						<span class="programm-span">Redis</span>.
						На практике поработаем с <span class="programm-span">EF Core</span> и
						<span class="programm-span">Dapper</span>. Научимся проектировать базу
						данных, настривать сложные конфигурции для анемичных и богатых моделей,
            писать сложные запросы, применять фильтрацию, пагинацию, сортировку, делать выборки и управлять транзакциями и блокировками.
			Все эти знания вам обязательно понадобятся на реально работе и будут украшать ваше резюме.</p>`,
      },
      {
        label: "ASP.NET Core",
        content: `<p>На этом курсе мы очень подробно изучим, как разрабатывать
						масштабируемые и производительные
						<span class="programm-span">Web API</span> приложения с помощью
						<span class="programm-span">ASP.NET Core</span>. Вы научитесь
						работать с <span class="programm-span">конфигурациями</span>,
						<span class="programm-span">логированием</span>,
						<span class="programm-span">контроллерами</span>,
						<span class="programm-span">Minimal Api</span>,
						<span class="programm-span">Swagger</span>,
						<span class="programm-span">роутингом</span>,
						<span class="programm-span">Middleware</span>,
						<span class="programm-span">аутентификацией</span> и
						<span class="programm-span">авторизацией</span>,
						<span class="programm-span">атрибутами</span> и
						<span class="programm-span">фильтрами</span>.
						Почти все наши сервисы будут иметь web api интерфейс для взаимодействия с внешним миром.
						ASP.NET Core очень упрощает разработку веб приложений, сейчас данный фреймворк является стандартом индустрии.</p>`,
      },
    ],
  },
  {
    id: 3,
    name: "Intensive 4",
    descr: "ksjdksjd sjdjsd dbs bd hhsdgdgds ddsdsd sdgsd sdsgdhs jx dhd ddd",
    programm: [
      {
        label: "Реляционные и неряционные базы данных",
        content: `<p>Практически ни одно бэкенд приложение не обходится без базы данных.
						В этом курсе мы подробно изучим как работать с
						<span class="programm-span">PostgreSQL</span>,
						<span class="programm-span">MongoDb</span>
						<span class="programm-span">Redis</span>.
						На практике поработаем с <span class="programm-span">EF Core</span> и
						<span class="programm-span">Dapper</span>. Научимся проектировать базу
						данных, настривать сложные конфигурции для анемичных и богатых моделей,
            писать сложные запросы, применять фильтрацию, пагинацию, сортировку, делать выборки и управлять транзакциями и блокировками.
			Все эти знания вам обязательно понадобятся на реально работе и будут украшать ваше резюме.</p>`,
      },
      {
        label: "ASP.NET Core",
        content: `<p>На этом курсе мы очень подробно изучим, как разрабатывать
						масштабируемые и производительные
						<span class="programm-span">Web API</span> приложения с помощью
						<span class="programm-span">ASP.NET Core</span>. Вы научитесь
						работать с <span class="programm-span">конфигурациями</span>,
						<span class="programm-span">логированием</span>,
						<span class="programm-span">контроллерами</span>,
						<span class="programm-span">Minimal Api</span>,
						<span class="programm-span">Swagger</span>,
						<span class="programm-span">роутингом</span>,
						<span class="programm-span">Middleware</span>,
						<span class="programm-span">аутентификацией</span> и
						<span class="programm-span">авторизацией</span>,
						<span class="programm-span">атрибутами</span> и
						<span class="programm-span">фильтрами</span>.
						Почти все наши сервисы будут иметь web api интерфейс для взаимодействия с внешним миром.
						ASP.NET Core очень упрощает разработку веб приложений, сейчас данный фреймворк является стандартом индустрии.</p>`,
      },
    ],
  },
];

const currentIntensive = ref(intensivies[0]);

const changeIntensive = (int) => {
  currentIntensive.value = int;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  font-weight: 400;
  padding: 24px;
  position: relative;
}

.section__card_main:hover {
  cursor: pointer;
  box-shadow: 0 0 15px #e59cff;
  transition: all 0.2s ease-in-out;
}

.section__card_main {
  transition: all 0.2s ease-in-out;
}

.section__card-title {
  font-size: 28px;
  font-weight: 500;
  line-height: 140%;
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

.carousel__slide {
  padding: 15px 10px;
  width: fit-content !important;
  margin-bottom: 10px;
}

.section__cur-title {
  font-size: 42px;
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
  .section {
    gap: 32px;
  }

  .section__title {
    font-size: 58px;
  }

  .section__card {
    border-radius: 16px;
    gap: 13px;
    padding: 18px;
  }

  .section__card-title {
    font-size: 24px;
  }

  .carousel {
    padding: 0 20px;
  }
}

@media screen and (max-width: 540px) {
  .section {
    gap: 16px;
  }

  .section__title {
    font-size: 28px;
  }

  .section__card {
    border-radius: 12px;
    gap: 10px;
    font-size: 16px;
    padding: 12px;
  }

  .section__card-title {
    font-size: 22px;
  }

  .carousel {
    padding: 0;
  }
}
</style>
