<template>
  <section class="section">
    <h2 class="section__title">Программа обучения</h2>

    <div>
      <UAccordion
        class="accordion"
        color="white"
        variant="soft"
        :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
        multiple
        :items="firstItem"
        :ui="{
          default: {
            class: 'text-2xl w-full max-[540px]:text-lg',
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

      <UAccordion
        class="accordion"
        color="white"
        variant="soft"
        :size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
        multiple
        :items="textItems"
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

const firstItem = [
  {
    label: "Архитектура бэкенд приложений",
    defaultOpen: true,
    content: `<p>Мы глубоко погрузимся в современные <span class="programm-span">архитектурные подходы</span>, реализуя крупный проект, который начинается с <span class="programm-span">монолитной структуры</span> и постепенно переходит в <span class="programm-span">микросервисную архитектуру</span>. Вы освоите <span class="programm-span">чистую архитектуру</span>, <span class="programm-span">CQRS</span>, <span class="programm-span">DDD</span>, <span class="programm-span">модульный монолит</span> и <span class="programm-span">микросервисы</span>. Особое внимание уделяется пониманию принципов, зачем и как использовать этот стек для создания <span class="programm-span">гибких и устойчивых систем</span>, способных <span class="programm-span">масштабироваться</span>. Это включает также взаимодействие <span class="programm-span">фронтенда и бэкенда</span> в большом проекте, что даст вам полное представление о современных архитектурных решениях.</p>`,
  },
];

const textItems = [
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
  {
    label: "Аутентификация и авторизация",
    content: `<p>На курсе мы подробно разбираем современные подходы к аутентифицации и авторизации на ASP.NET Core с помощью <span class="programm-span">jwt токенов</span>,
                <span class="programm-span">ролей</span> и <span class="programm-span">разрешений</span>. Мы реализуем аутентификацию не только в монолитном приложении,
                но и в микросервисервесной архитектуре. Также мы реализуем аутентификацию и авторизацию на фронтенде. Подтверждение по почте,
				восстановление пароля, блокировка пользователей, сложная ролевая система с разрешениями, всё это мы реализуем на проекте.</p>`,
  },
  {
    label: "Реальные бизнес задачи",
    content: `<p>Решение большого количества задач из реальной разработки. Вы на
						практике будете решать непростые бизнес задачи, с которыми обычно сталкиваются на работе:
						<span class="programm-span"> CRUD операции</span>,
						<span class="programm-span">взаимодействие между несколькими модулями и сервисами</span>,
            			<span class="programm-span">валидация и ошибки</span>,
            			<span class="programm-span">многоэтапные фичи</span>,
            			<span class="programm-span">согласованность данных между сервисами</span>,
						<span class="programm-span">сложная бизнес логика</span>,
						<span class="programm-span">отложенные задачи</span>,
						<span class="programm-span">работа с состоянияни и событиями</span>.</p>`,
  },
  {
    label: "Amazon S3",
    content: `<p>Довольно часто бэкенд и фронтенд приложения взаимодействуют с файлами, фото и видео. Сегодняшним стандартом для
			работы с таким типом данных является Amazon S3. На курсе вы на практике научитесь работать с файлами с помощью MinIO или Yandex Clound
			с помощью Amazon S3. Умение работать с S3 хранилищем очень ценится работодателями и точно пригодится во время работы.</p>`,
  },
  {
    label: "Юнит и итеграционное тестирование",
    content: `<p>Для начала на курсе вы познакомитесь с <span class="programm-span">юнит тестами</span>, покроете ими основую бизнес логику и доменные сущности.
			Дальше вы познакомитесь с <span class="programm-span">интеграционным тестированием</span>, с <span class="programm-span">DevContainers</span>
			вы протестируете работу между различными сервисами в вашем проекте.
			Сегодня тестирование является очень важным компонентом индустрии, без тестов вашему проекту будет очень сложно масштабироваться.</p>`,
  },
  {
    label: "Docker, Docker compose и Nginx",
    content: `<p>Вы обязательно запустите своё приложение и множество различных
						сервисов в <span class="programm-span">Docker</span> с помощью
						<span class="programm-span">Docker compose</span>. Также мы настроим Nginx, как прокси сервер для взаимодействия клиента
						с сервером. Владение навыками и понимание контейнеризации сегодня является стандартом для
						каждого разработчика.</p>`,
  },
  {
    label: "Фоновые процессы и задачи с Hangfire или Quartz",
    content: `<p>На курсе вы научитель работать с
						<span class="programm-span">background сервисами</span>,
						<span class="programm-span">Quartz</span> и
						<span class="programm-span">Hangfire</span> для работы с
						различными фоновыми или отложенными задачами. Фоновые сервисы используются
            			для многих задач, такие как: consumer-процессы, расписания, отложенные задачи,
						сервисы для поддержки консистентности и согласованности данных, отправка уведомлений и другие.</p>`,
  },
  {
    label: "Модульный монолит и микросервисы",
    content: `<p>Для начала мы начнём создавать наше приложение с модульного монолита. Далее вы разделите монолит на модульный,
			тем самым обеспечите удобное разделение логики и независимость между модулями. Далее мы начнём отделять части приложения на отдельные
			микросервисы. Научимся взаимодействовать с ними по <span class="programm-span">HTTP</span>, <span class="programm-span">GRPC</span>
			и с помощью <span class="programm-span">брокеров сообщений</span>, такие как <span class="programm-span">RabbitMQ</span>,
			<span class="programm-span">Redis</span> и <span class="programm-span">Kafka</span>.
			Сегодня распределённые системы являются стандартом индустрии. Они нужны для достижения максимальной производительности и масштабируемости.</p>`,
  },
  {
    label: "Кэширование и распределённый кэш с Redis",
    content: `<p>На курсе вы освоите работу с кэширование. Для начала мы изучим MemoryCache, далее реализуем распределённое кэширование
			с помощью <span class="programm-span">Redis</span>. Сегодня кэширование очень важно для работы с большим количеством данных.
			Мы научимся инвалидировать кэш и учитывать сложные моменты при работе с кэшом.</p>`,
  },
  {
    label:
      "Доменные и интеграционные события. Брокеры сообщений: RabbitMq и Kafka",
    content: `<p>На курсе мы обязательно поработаем с <span class="programm-span">RabbitMq</span>
			и <span class="programm-span">Kafka</span>. Брокеры сообщений очень полезны для асинхронного взаимодействия между
			сервисами. Также с помощью брокеров можно реализовать событийную архитектуру. Мы внедрим в наш проект доменные
			и интеграционные события.</p>`,
  },
  {
    label: "React, TypeScript, Axios, Tailwind",
    content: `<p>Сегодня очень ценятся именно
						<span class="programm-span">Fullstack</span> разработчики.
						Поэтому на этом курсе мы изучим, как для вашего бэкенда сделать
						фронтенд на <span class="programm-span">React</span>. Вы
						разработаете полноценное фронтенд приложение и каждый сможет им
						воспользоваться. С таким стэком будет намного проще получить хороший оффер, и ваше резюме будет выделяться среди других</p>`,
  },
  {
    label: "Redux и Rtk query",
    content: `<p>Здесь вы сможете на практике связать фронтенд приложение с бэкендом,
						отправлять запросы с помощью
						<span class="programm-span">axios</span> и
						<span class="programm-span">rtk query</span>, а также управлять
						состоянием приложения с помощью
						<span class="programm-span">Redux</span>. 
						Мы посмотрим на различные способы оптимизации фронтенд приложений, чтобы ваше Api не умерало от большого количества запросов</p>`,
  },
  {
    label: "Резюме и собеседования",
    content: `<p>Всё шло к этому моменту, на курсе я подготовлю тебя к
						<span class="programm-span">собеседованиям</span> и помогу
						правильно составить <span class="programm-span">резюме</span>,
						чтобы ты точно получил свой догожданный
						<span class="programm-span">оффер</span>. Мы регулярно проводим
						мок собеседования и созвоны, где обсуждаем текущий рынок в it и каждому помогает с трудоустройством.</p>`,
  },
  {
    label: "CI/CD",
    content: `<p>На курсе ты освоишь все необходимые навыки CI/CD, который требуются от бэкенд разработчиков.
		Освой <span class="programm-span">Github Actions</span> и деплой проекта на сервер.
		Ты на практике сможешь развернуть своё веб приложение, чтобы все могли им воспользоваться!</p>`,
  },
];
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.section__title {
  font-size: 80px;
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
  border-radius: 12px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
  padding: 24px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}

.section__card-title {
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
    gap: 40px;
  }

  .section__title {
    font-size: 58px;
  }

  .section__card {
    padding: 20px;
  }
}

@media screen and (max-width: 540px) {
  .section {
    gap: 24px;
  }

  .section__title {
    font-size: 28px;
  }

  .section__card {
    padding: 16px;
    font-size: 16px;
  }
}
</style>
