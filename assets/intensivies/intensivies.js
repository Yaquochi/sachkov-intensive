export const intensivies = [
    {
        id: 1,
        name: "Архитектура и структура .NET веб-приложений",
        price: "15000 ",
        sale: "10000",
        buyLink: "https://t.me/sachkov_intensive_1_bot",
        descr: "На этом интенсиве вы с нуля освоите проектирование и разработку современных .NET веб-приложений с использованием ASP.NET Core! Этот интенсив подойдет для начинающих разработчиков, которые хотят углубить свои знания в архитектуре, проектировании и создании масштабируемых веб приложений на основе монолитной и модульной архитектуре.",
        shortDescr:
            "Изучите архитектуру .NET веб-приложений с ASP.NET Core, чистую архитектуру и лучшие практики разработки",
        fullDescription: `<div class="flex flex-col gap-4">
        <p class="text-lg leading-relaxed mb-6">На этом интенсиве вы с нуля освоите проектирование и разработку современных .NET веб-приложений с использованием ASP.NET Core! Этот интенсив подойдет для начинающих разработчиков, которые хотят углубить свои знания в архитектуре, проектировании и создании масштабируемых веб приложений на основе монолитной и модульной архитектуре.</p>
        
        <span class="int__descr-title font-semibold text-2xl">Почему этот интенсив?</span>

        <ul class="int__list int__list_why">
        <li>Практико-ориентированный подход: <span class="">каждый этап сопровождается реальными примерами и заданиями</span></li>
        <li>Глубокое погружение в архитектуру: вы поймете, как с нуля проектировать приложения, которые легко поддерживать и масштабировать</li>
        <li>Актуальные технологии: ASP.NET Core, REST API, EF Core, FluentValidation, Scrutor, CQRS и многое другое</li>
        <li>Свой проект: вы узнаете, какие идеи и проекты можно реализовать на ASP.NET Core, и сможете придумать свою уникальную идею для нового проекта</li>
        </ul>

         <span class="int__descr-title font-semibold text-2xl">Для кого этот интенсив:</span>

        <ul class="int__list int__list_who">
         <li>Разработчики, которые хотят улучшить свои навыки в проектировании и архитектуре .NET веб-приложений.</li>
         <li>Те, кто хотят научиться создавать масштабируемые и поддерживаемые веб-приложения на актуальном стэке.</li>
         <li>Все, кто хочет создать свой уникальный пет проект на ASP.NET Core, который поможет при трудоустройстве.</li>
        </ul>

         <span class="int__descr-title font-semibold text-2xl">Результат:</span>

        <ul class="int__list int__list_total">
         <li>Вы сможете самостоятельно проектировать и разрабатывать сложные .NET веб-приложения, используя лучшие практики и современные архитектурные подходы.</li>
         <li>Не упустите возможность прокачать свои навыки и стать специалистом в разработке .NET веб-приложений!</li>
        </ul>
      </div>`,
        lessonsAmount: 18,
        duration: 16,
        programm: [
            {
                label: "Урок 1. Продумывание идеи и проектирование проекта",
                defaultOpen: true,
                content: `<ul class="int-list">
                        <li class="programm-span">Какие бывают проекты и как придумать идею для проекта?</li>
                        <li class="programm-span">Конкретные примеры идей</li>
                        <li class="programm-span">Определяем функционал веб-приложения</li>
                        <li class="programm-span">Проектирование предметной области</li>
                        <li class="programm-span">Модули. Как правильно разделить проект на модули</li>
                        <li class="programm-span">Как устанавливать связь между модулями</li>
                        <li class="programm-span">Cohesion, что это и для чего нужно</li>
                        <li class="programm-span">Coupling, что это и для чего нужно</li>
                          </ul>`,
            },
            {
                label: "Урок 2. Проектирование REST API",
                content: `<ul class="int-list">
                    <li class="programm-span">Проектирование REST API. Что такое REST API?</li>
                    <li class="programm-span">Создание ресурса, метод POST</li>
                    <li class="programm-span">Получение ресурса, метод GET</li>
                    <li class="programm-span">Зачем иногда следует использовать POST вместо GET</li>
                    <li class="programm-span">Получение ресурса по ID</li>
                    <li class="programm-span">Обновление ресурса</li>
                    <li class="programm-span">Удаление ресурса</li>
                    <li class="programm-span">Важные правила при проектировании REST API</li>
                    <li class="programm-span">Проектирование более сложных endpoint'ов</li>
                </ul>`,
            },
            {
                label: "Урок 3. Выбор архитектуры для проекта: монолит, модульный монолит, микросервисы",
                content: `<ul class="int-list">
                    <li class="programm-span">Какую архитектуру выбрать для проекта? Монолит, модульный монолит, микросервисы</li>
                    <li class="programm-span">Монолитная архитектура</li>
                    <li class="programm-span">Модульный монолит</li>
                    <li class="programm-span">Микросервисная архитектура</li>
                </ul>`,
            },
            {
                label: "Урок 4. Чистая архитектура",
                content: `<ul class="int-list">
                    <li class="programm-span">Чистая архитектура, что это и зачем нужно?</li>
                    <li class="programm-span">Какие раньше были архитектуры?</li>
                    <li class="programm-span">Что такое бизнес логика?</li>
                    <li class="programm-span">Основные концепции чистой архитектуры</li>
                    <li class="programm-span">Слои в чистой архитектуре. Первый слой - Entities</li>
                    <li class="programm-span">Внешние слои</li>
                    <li class="programm-span">Пример проекта с чистой архитектурой</li>
                </ul>`,
            },
            {
                label: "Урок 5. Создание репозитория и проекта, создание основных сущностей",
                content: `<ul class="int-list">
                    <li class="programm-span">Создание репозитория</li>
                    <li class="programm-span">Создание проекта</li>
                    <li class="programm-span">Добавление .gitignore</li>
                    <li class="programm-span">Создание канбан доски для задач</li>
                    <li class="programm-span">Работа с ветками и задачами</li>
                    <li class="programm-span">Создание доменного проекта</li>
                    <li class="programm-span">Создание моделей в предметной области</li>
                    <li class="programm-span">Почему GUID а не long?</li>
                    <li class="programm-span">Анемичная и богатая модель</li>
                    <li class="programm-span">Связи между моделями и модулями</li>
                    <li class="programm-span">Прямая ссылка или Guid</li>
                    <li class="programm-span">Решение проблемы nullable reference</li>
                    <li class="programm-span">Древовидная структура, parent - children</li>
                    <li class="programm-span">Проектирование других сущностей</li>
                </ul>`,
            },
            {
                label: "Урок 6. Настройка проекта: editorconfig, stylecop. Создание контроллера",
                content: `<ul class="int-list">
                    <li class="programm-span">Коммит и пуш изменений, пуллреквест и мерж</li>
                    <li class="programm-span">Создание Asp Net Core проекта</li>
                    <li class="programm-span">Создание слоя Presenters с контроллерами</li>
                    <li class="programm-span">Настраиваем swagger и open api</li>
                    <li class="programm-span">Editorconfig и stylecop, анализатор кода</li>
                    <li class="programm-span">Directory.Build.props для чего нужен</li>
                    <li class="programm-span">Проект WEB против Presenters</li>
                    <li class="programm-span">Методы в контроллере на практике</li>
                    <li class="programm-span">ActionResult и статус коды</li>
                    <li class="programm-span">Параметры в методах контроллера [FromBody] и другие</li>
                    <li class="programm-span">DTO модели</li>
                    <li class="programm-span">Проект с контрактами</li>
                    <li class="programm-span">Пишем остальные HTTP методы на практике</li>
                    <li class="programm-span">Получение данных. HTTP GET метод</li>
                    <li class="programm-span">Обновление данных. HTTP PUT метод</li>
                    <li class="programm-span">Удаление данных. HTTP DELETE метод</li>
                    <li class="programm-span">Другие HTTP методы для различных фич</li>
                </ul>`,
            },
            {
                label: "Урок 7. Application слой",
                content: `<ul class="int-list">
                    <li class="programm-span">Коммит и пуш изменений</li>
                    <li class="programm-span">Формируем задачу, работа с Application слоем</li>
                    <li class="programm-span">Документация enum'ов</li>
                    <li class="programm-span">Зачем нужен Application слой</li>
                    <li class="programm-span">Создание Application слоя на практике, установление зависимостей</li>
                    <li class="programm-span">Создаём первый сервис. Что такое сервис</li>
                    <li class="programm-span">Какие параметры должен принимать сервис
                    <li class="programm-span">Формируем бизнес сценарий в сервисе</li>
                    <li class="programm-span">Создание сущности в сервисе</li>
                    <li class="programm-span">Как работать с базой данных в Application слое. Dependency inversion принцип.</li>
                    <li class="programm-span">Что такое репозиторий и зачем он нужен</li>
                    <li class="programm-span">Какие модели использовать для работы с базой данных? Domain vs DTO vs Datamodels</li>
                    <li class="programm-span">Почему нужно начитать разработку с интерфейсов?</li>
                    <li class="programm-span">Какие должны быть папки в проекте? Как распределить файлы по папкам</li>
                    <li class="programm-span">Как писать логи</li>
                    <li class="programm-span">Работа с валидацией. Основные концепции. Где должна быть валидацияВалидация входных параметров. Валидация бизнес логики</li>
                    <li class="programm-span">FluentValidation, как пользоваться библиотекой?</li>
                    <li class="programm-span">Валидация бизнес логики. Правила в сценариях</li>
                    <li class="programm-span">Как использовать сервисы в контроллерах</li>
                    <li class="programm-span">Как и где правильно регистрировать зависимости</li>
                </ul>`,
            },
            {
                label: "Урок 8. Инфраструктурный слой",
                content: `<ul class="int-list">
                    <li class="programm-span">Инфраструктурный слой, что это и для чего нужен</li>
                    <li class="programm-span">Создание инфраструктурного слоя для базы данных</li>
                    <li class="programm-span">Инверсия зависимостей, объясняю на примере</li>
                    <li class="programm-span">Нужно ли использовать репозитории</li>
                    <li class="programm-span">Пример как можно реализовать сидирование</li>
                    <li class="programm-span">Что ещё может быть в инфраструктуре? Примеры инфраструктурных слоёв</li>
                    <li class="programm-span">Как регистрировать инфраструктуру в DI? Extension методы</li>
                    <li class="programm-span">Подвожу итоги по инфраструктуре</li>
                </ul>`,
            },
            {
                label: "Урок 9. Работа с ошибками, как правильно работать с Exceptions",
                content: `<ul class="int-list">
                    <li class="programm-span">Почему важно правильно работать с ошибками</li>
                    <li class="programm-span">Создание кастомных Exceptions</li>
                    <li class="programm-span">Класс Error и Shared проект. Правильно работаем с ошибками</li>
                    <li class="programm-span">Как вернуть ошибки валидации с помощью Exception</li>
                    <li class="programm-span">Как правильно обрабатывать ошибки, Exception middleware</li>
                    <li class="programm-span">Почему Exceptions это не всегда хорошо</li>
                </ul>`,
            },
            {
                label: "Урок 10. Result паттерн",
                content: `<ul class="int-list">
                    <li class="programm-span">Когда нужно использовать Exceptions</li>
                    <li class="programm-span">Когда нужно использовать Result паттерн</li>
                    <li class="programm-span">Зачем нужен Result паттерн, что это такое</li>
                    <li class="programm-span">Самая простая реализация Result паттерна с помощью кортежей</li>
                    <li class="programm-span">Класс Result, пример его использования</li>
                    <li class="programm-span">Result<T>, как вернуть значения из Result</li>
                    <li class="programm-span">Неявное преобразование</li>
                    <li class="programm-span">Библиотека CsharpFunctionalExtensions</li>
                    <li class="programm-span">Возвращаем список ошибок</li>
                    <li class="programm-span">Кастомная коллекция Failure</li>
                    <li class="programm-span">Возвращаем список ошибок</li>
                    <li class="programm-span">Пример кода с try catch + Result</li>
                    <li class="programm-span">Метод расширения для красивого ответа клиенту, статус коды</li>
                </ul>`,
            },
            {
                label: "Урок 11. Реализация других бизнес фич",
                content: `<ul class="int-list">
                    <li class="programm-span">Метод AddAnswer</li>
                    <li class="programm-span">Что должен возвращать метод в сервисах</li>
                    <li class="programm-span">Документация методов, summary</li>
                    <li class="programm-span">Добавляем нужные зависимости и начинаем писать логику метода, валидация</li>
                    <li class="programm-span">Два способа, как добавлять дочернюю сущность в базу данных</li>
                    <li class="programm-span">Первый способ, если используете Dapper</li>
                    <li class="programm-span">Что может пойти не так в бизнес сценарии, откуда берутся баги</li>
                    <li class="programm-span">Как управлять транзакцией в Application слое, TransactionManager</li>
                    <li class="programm-span">Второй способ добавления дочерней сущности в базу данных</li>
                    <li class="programm-span">Добавляем новые бизнес правила и усложняем метод</li>
                    <li class="programm-span">Как обратиться к другому модулю в разных случаях, новый инфраструктурный слой</li>
                </ul>`,
            },
            {
                label: "Урок 12. Разделение сервиса на обработчики (Hanlders)",
                content: `<ul class="int-list">
                    <li class="programm-span">Разделение сервиса на части</li>
                    <li class="programm-span">Как правильно назвать обработчик</li>
                    <li class="programm-span">Вынесение фичи в отдельный класс</li>
                    <li class="programm-span">Создание папок для фич, удобный способ</li>
                    <li class="programm-span">Общий интерфейс для обработчиков</li>
                    <li class="programm-span">Паттерн команда (command), что это такое и зачем нужны команды</li>
                    <li class="programm-span">ICommandHandler</li>
                    <li class="programm-span">ICommand, улучшение интерфейса</li>
                    <li class="programm-span">Как в контроллере правильно вызвать Handler</li>
                    <li class="programm-span">Как удобно зарегистрировать все обработчики в DI</li>
                    <li class="programm-span">Scrutor, расширяем возможности Dependency Injection</li>
                    <li class="programm-span">Получение данных</li>
                </ul>`,
            },
            {
                label: "Урок 13. Получение данных из бд и других источников",
                content: `<ul class="int-list">
                    <li class="programm-span">Как получать данные?</li>
                    <li class="programm-span">Пишем фичу на получение данных с фильтрами</li>
                    <li class="programm-span">Какие модели возвращать из бэкенда? Создаём DTO</li>
                    <li class="programm-span">Получаем данные с помощью репозитория, способ первый</li>
                    <li class="programm-span">Получаем связанные данные из другого хранилища, пример с файлами</li>
                    <li class="programm-span">Extension метод для Enum, из Enum в строку</li>
                    <li class="programm-span">Минусы использования репозитория для получения данных</li>
                    <li class="programm-span">Второй способ, использование DbContext в Handler</li>
                    <li class="programm-span">Как использовать DbContext в Application</li>
                    <li class="programm-span">IQueryable в DbContext </li>
                    <li class="programm-span">Пишем запросы в Handler с помощью DbContext</li>
                    <li class="programm-span">Паттерн CQS, разделение операций на запись и чтение</li>
                    <li class="programm-span">Добавление IQuery и IQueryHandler</li>
                    <li class="programm-span">Что если мы не используем EF Core, а используем Dapper</li>
                </ul>`,
            },
            {
                label: "Урок 14. Модульный монолит",
                content: `<ul class="int-list">
                    <li class="programm-span">Рассматриваем обычное монолитное решение</li>
                    <li class="programm-span">Как будет выглядеть модульный монолит</li>
                    <li class="programm-span">Меняем структуру проекта, создаём новые проекты</li>
                    <li class="programm-span">Показываю как должен выглядеть модульный монолит</li>
                    <li class="programm-span">Проект Shared</li>
                    <li class="programm-span">Папка Infrastructure</li>
                    <li class="programm-span">Остальные проекты в Core</li>
                    <li class="programm-span">Пример модуля Questions</li>
                    <li class="programm-span">Архитектура Vertical Slice Architecture для небольших модулей</li>
                    <li class="programm-span">Minimal API для фич</li>
                    <li class="programm-span">Как регистрировать ендпоинты в Minimal API</li>
                    <li class="programm-span">Взаимодействие между модулями с помощью контрактов</li>
                    <li class="programm-span">Как регистрировать DI в модулях</li>
                </ul>`,
            },
            {
                label: "Урок 15. Github actions",
                content: `<ul class="int-list">
                    <li class="programm-span">Пушим прошлую задачу в github</li>
                    <li class="programm-span">Настриваем Github actions</li>
                </ul>`,
            },
            {
                label: "Урок 16. Лучший способ возвращать API ответы в приложении. EndpointResult",
                content: `<ul class="int-list">
                    <li class="programm-span">В этом уроке будет информация о лучшем способе возвращать ответы от API</li>
                </ul>`,
            },
            {
                label: "Урок 17. Как выбрать архитектуру для проекта: Clean Architecture vs Vertical Slice Architecture",
                content: `<ul class="int-list">
                    <li class="programm-span">Clean Architecture vs Vertical Slice Architecture</li>
                </ul>`,
            },
            {
                label: "Урок 18. Проектирование доменных сущностей для доменной области - Бронирование мест на мероприятия",
                content: `<ul class="int-list">
                    <li class="programm-span">Пример проектирования доменных сущностей для другой доменной области.</li>
                </ul>`,
            },
        ],
    },
    {
        id: 2,
        name: "Реляционные базы данных в веб приложениях",
        price: "17 900",
        sale: "14 900",
        buyLink: "https://t.me/sachkov_intensive_2_bot",
        descr: "Фундаментальное изучение работы с реляционными базами данных в .NET приложениях на практике. Освойте PostgreSQL, Entity Framework Core и Dapper для создания эффективных и масштабируемых решений с правильной архитектурой доступа к данным и производительными запросами.",
        shortDescr:
            "Освойте работу с PostgreSQL, Entity Framework Core и Dapper. Изучите оптимизацию и архитектуру БД",
        fullDescription: `<div class="flex flex-col gap-4">
        <p class="text-lg leading-relaxed mb-6">Фундаментальное изучение работы с реляционными базами данных в .NET приложениях на практике. Освойте PostgreSQL, Entity Framework Core и Dapper для создания эффективных и масштабируемых решений с правильной архитектурой доступа к данным и производительными запросами.</p>
        
        <span class="int__descr-title font-semibold text-2xl">Почему этот интенсив?</span>

        <ul class="int__list int__list_why">
        <li>Глубокое понимание баз данных: <span class="">от теории ACID до практической реализации сложных запросов</span></li>
        <li>Два подхода к работе с данными: изучите как ORM (Entity Framework Core), так и микро-ORM (Dapper)</li>
        <li>Практические кейсы: реальный проект системы бронирования мест с решением типичных проблем</li>
        <li>Производительность и оптимизация: научитесь писать эффективные SQL запросы и управлять транзакциями</li>
        <li>Современные подходы: Repository pattern, CQS, управление транзакциями и блокировки, индексы</li>
        <li>Правильная архитектура: Clean Architecture, CQRS</li>
        </ul>

         <span class="int__descr-title font-semibold text-2xl">Для кого этот интенсив:</span>

        <ul class="int__list int__list_who">
         <li>Разработчики, которые хотят научиться работать с реляционными базами данных в .NET приложениях.</li>
         <li>Все, кто хочет научиться проектировать и реализовывать сложные схемы баз данных с правильными связями и ограничениями.</li>
         <li>Разработчики, которые хотят углубить знания в работе с базами данных в .NET приложениях.</li>
         <li>Те, кто хочет научиться проектировать эффективную архитектуру доступа к данным.</li>
         <li>Разработчики, работающие с Entity Framework Core и желающие освоить альтернативные подходы.</li>
         <li>Все, кто хочет понять, как решать проблемы производительности и параллельного доступа к данным.</li>
        </ul>

         <span class="int__descr-title font-semibold text-2xl">Результат:</span>

        <ul class="int__list int__list_total">
         <li>Вы сможете проектировать и реализовывать сложные схемы баз данных с правильными связями и ограничениями.</li>
         <li>Освоите как Entity Framework Core, так и Dapper с SQL запросами для разных сценариев использования.</li>
         <li>Научитесь оптимизировать запросы, управлять транзакциями и решать проблемы параллельного доступа.</li>
         <li>Получите практический опыт создания масштабируемой архитектуры доступа к данным.</li>
        </ul>
      </div>`,
        lessonsAmount: 16,
        duration: 18,
        programm: [
            {
                label: "Урок 1. Основы PostgreSQL и теория баз данных",
                defaultOpen: true,
                content: `<ul class="int-list">
                        <li class="programm-span">PostgreSQL - что это и почему выбирают эту СУБД</li>
                        <li class="programm-span">Разница между СУБД и БД, понятие схемы</li>
                        <li class="programm-span">Устройство таблиц и хранение данных в PostgreSQL</li>
                        <li class="programm-span">Ключи: Primary Key и Foreign Key</li>
                        <li class="programm-span">SERIAL vs UUID (GUID) - выбор типа идентификатора</li>
                        <li class="programm-span">Отношения между таблицами: один ко многим, один к одному, многие ко многим</li>
                        <li class="programm-span">Принципы ACID: Atomicity, Consistency, Isolation, Durability</li>
                        <li class="programm-span">Что такое транзакции и зачем они нужны</li>
                        <li class="programm-span">Индексы: назначение, виды, плюсы и минусы</li>
                        <li class="programm-span">B-tree индексы и составные индексы</li>
                          </ul>`,
            },
            {
                label: "Урок 2. Проектирование доменных моделей и связей между сущностями",
                content: `<ul class="int-list">
                    <li class="programm-span">Подход Code First в проектировании моделей</li>
                    <li class="programm-span">Создание проекта ASP.NET Core Web API</li>
                    <li class="programm-span">Проектирование сущностей с использованием богатых моделей</li>
                    <li class="programm-span">Установка связей между классами</li>
                    <li class="programm-span">Работа с nullable reference types</li>
                    <li class="programm-span">Проектирование связей</li>
                    <li class="programm-span">Реализация связей между модулями</li>
                    <li class="programm-span">Проектирование системы бронирования</li>
                    <li class="programm-span">Группировка классов по модулям</li>
                </ul>`,
            },
            {
                label: "Урок 3. Настройка окружения и начало работы с базой данных",
                content: `<ul class="int-list">
                    <li class="programm-span">Запуск PostgreSQL с помощью Docker</li>
                    <li class="programm-span">Обзор и настройка docker-compose файла</li>
                    <li class="programm-span">Работа с pgAdmin для управления базой данных</li>
                    <li class="programm-span">Сравнение подходов Database First и Code First</li>
                    <li class="programm-span">Понятие миграций в Entity Framework</li>
                    <li class="programm-span">Создание DbContext для работы с базой данных</li>
                    <li class="programm-span">Паттерн Repository</li>
                    <li class="programm-span">Работа с базой данных без ORM: чистый SQL</li>
                    <li class="programm-span">Параметризованные SQL-запросы для безопасности</li>
                </ul>`,
            },
            {
                label: "Урок 4. Конфигурации Entity Framework Core и создание миграций",
                content: `<ul class="int-list">
                    <li class="programm-span">Глубокое понимание разницы Code First от Database First</li>
                    <li class="programm-span">Конфигурирование доменных моделей через Fluent API</li>
                    <li class="programm-span">Entity vs Value Object: концепции и различия</li>
                    <li class="programm-span">Способы хранения Value Objects в базе данных</li>
                    <li class="programm-span">Конфигурация через ComplexProperty и OwnsOne</li>
                    <li class="programm-span">Работа с комплексными объектами и типизированными Id</li>
                    <li class="programm-span">Регистрация DbContext в Dependency Injection</li>
                    <li class="programm-span">Понимание Scoped vs Singleton для DbContext</li>
                    <li class="programm-span">Создание и применение миграций</li>
                    <li class="programm-span">Работа с JSON объектами (OwnsMany, JSONB)</li>
                    <li class="programm-span">Настройка связей между таблицами и модулями</li>
                    <li class="programm-span">Конфигурирование связей один к одному и многие ко многим</li>
                </ul>`,
            },
            {
                label: "Урок 5. Работа с DbContext, ChangeTracker и операции вставки",
                content: `<ul class="int-list">
                    <li class="programm-span">Создание слоя Application и проекта Contacts</li>
                    <li class="programm-span">Реализация фичи создания сущности</li>
                    <li class="programm-span">Различные подходы работы с базой данных</li>
                    <li class="programm-span">Создание доменных моделей в фичах</li>
                    <li class="programm-span">Способы работы с базой данных из слоя Application</li>
                    <li class="programm-span">Настройка логирования для отладки SQL-запросов</li>
                    <li class="programm-span">Понимание работы ChangeTracker в Entity Framework</li>
                    <li class="programm-span">Добавление связанных сущностей при создании основной</li>
                    <li class="programm-span">Работа с прямыми навигационными связями</li>
                    <li class="programm-span">Анализ генерируемых SQL-запросов</li>
                    <li class="programm-span">Реализация Repository pattern vs прямое использование DbContext</li>
                    <li class="programm-span">Регистрация зависимостей и работа с фабриками</li>
                    <li class="programm-span">Необходимость транзакций при работе с данными</li>
                </ul>`,
            },
            {
                label: "Урок 6. Операции обновления и удаления, массовые операции",
                content: `<ul class="int-list">
                    <li class="programm-span">Реализация обновления через Dapper (чистый SQL)</li>
                    <li class="programm-span">Первый способ обновления через Entity Framework Core</li>
                    <li class="programm-span">Сравнение работы обновлений в Dapper vs EF Core</li>
                    <li class="programm-span">Массовые обновления в Entity Framework Core</li>
                    <li class="programm-span">Массовые обновления через Dapper</li>
                    <li class="programm-span">Обновление через доменные сущности (второй способ)</li>
                    <li class="programm-span">Ограничения Dapper при работе с доменными сущностями</li>
                    <li class="programm-span">Анализ работы Change Tracker</li>
                    <li class="programm-span">Плюсы и минусы различных подходов к обновлению</li>
                    <li class="programm-span">Полное обновление сущностей (третий способ)</li>
                    <li class="programm-span">Различия между IQueryable и IEnumerable</li>
                    <li class="programm-span">Проблемы массовых обновлений с получением сущностей</li>
                    <li class="programm-span">Обновление навигационных сущностей: два способа</li>
                    <li class="programm-span">Комбинированный подход для оптимальной работы</li>
                </ul>`,
            },
            {
                label: "Урок 7. Правильная архитектура репозиториев и управление транзакциями",
                content: `<ul class="int-list">
                    <li class="programm-span">Когда нужны и не нужны множественные реализации репозитория</li>
                    <li class="programm-span">Случаи использования нескольких реализаций репозитория</li>
                    <li class="programm-span">Комбинированный подход в архитектуре репозиториев</li>
                    <li class="programm-span">Проблемы транзакционности в распределенных операциях</li>
                    <li class="programm-span">Стратегии управления транзакциями</li>
                    <li class="programm-span">Создание и реализация TransactionManager</li>
                    <li class="programm-span">Паттерн TransactionScope и его применение</li>
                    <li class="programm-span">Решение проблем транзакционности в фичах обновления</li>
                    <li class="programm-span">Правильное использование using с транзакциями</li>
                    <li class="programm-span">Анализ работы транзакций в действии</li>
                </ul>`,
            },
            {
                label: "Урок 8. Реализация функционала бронирования и бизнес-логики",
                content: `<ul class="int-list">
                    <li class="programm-span">Анализ предметной области системы бронирования</li>
                    <li class="programm-span">Создание контроллера для операций бронирования</li>
                    <li class="programm-span">Создание фичи бронирования в слое Application</li>
                    <li class="programm-span">Создание специализированного репозитория</li>
                    <li class="programm-span">Правильное использование SaveChanges и обработка ошибок</li>
                    <li class="programm-span">Использование репозитория в обработчиках (handlers)</li>
                    <li class="programm-span">Реализация проверки доступности мероприятия</li>
                    <li class="programm-span">Проверка принадлежности мест к мероприятию</li>
                    <li class="programm-span">Реализация проверки статуса бронирования мест</li>
                    <li class="programm-span">Анализ генерируемых SQL-запросов</li>
                    <li class="programm-span">Выявление проблем параллельного доступа</li>
                </ul>`,
            },
            {
                label: "Урок 9. Параллельные операции и изоляция транзакций",
                content: `<ul class="int-list">
                    <li class="programm-span">Проблемы нескольких одновременных запросов</li>
                    <li class="programm-span">Влияние транзакций на параллельные операции</li>
                    <li class="programm-span">Подробный анализ уровней изоляции транзакций</li>
                    <li class="programm-span">Феномены в базах данных: dirty read, phantom read</li>
                    <li class="programm-span">Изменение уровня изоляции транзакций</li>
                    <li class="programm-span">Способы решения проблем параллельности</li>
                    <li class="programm-span">Решение через database constraints (ограничения БД)</li>
                    <li class="programm-span">Реализация проверки максимальной вместимости</li>
                    <li class="programm-span">Проблемы проверки вместимости при параллельных запросах</li>
                    <li class="programm-span">Pessimistic locking (пессимистичная блокировка)</li>
                    <li class="programm-span">Optimistic locking (оптимистичная блокировка)</li>
                    <li class="programm-span">Реализация обоих типов блокировок</li>
                </ul>`,
            },
            {
                label: "Урок 10. Практическое применение пессимистичной блокировки",
                content: `<ul class="int-list">
                    <li class="programm-span">Углубленный пример использования Pessimistic locking</li>
                    <li class="programm-span">Реализация бронирования нескольких мест одновременно</li>
                    <li class="programm-span">Получение и блокирование связанных сущностей</li>
                    <li class="programm-span">Запросы для получения всех доступных мест</li>
                    <li class="programm-span">Реализация сложной доменной логики</li>
                    <li class="programm-span">Анализ производительности и SQL-запросов</li>
                </ul>`,
            },
            {
                label: "Урок 11. Сидирование базы данных и автоматизация",
                content: `<ul class="int-list">
                    <li class="programm-span">Различные способы реализации сидирования</li>
                    <li class="programm-span">Размещение логики сидирования в проекте</li>
                    <li class="programm-span">Реализация сидирования данных</li>
                    <li class="programm-span">Использование Cursor AI для генерации кода сидеров</li>
                    <li class="programm-span">Автоматизация процесса наполнения данными</li>
                </ul>`,
            },
            {
                label: "Урок 12. Архитектура запросов на чтение данных",
                content: `<ul class="int-list">
                    <li class="programm-span">Различия между операциями чтения и записи</li>
                    <li class="programm-span">Типы запросов в приложениях</li>
                    <li class="programm-span">Запрос получения информации о мероприятии и карте мест</li>
                    <li class="programm-span">Выбор правильных моделей для возврата из бэкенда</li>
                    <li class="programm-span">Использование AsNoTracking для оптимизации</li>
                    <li class="programm-span">Паттерн CQS (Command Query Separation)</li>
                    <li class="programm-span">Работа с интерфейсом IQueryable</li>
                    <li class="programm-span">Создание IReadDbContext для операций чтения</li>
                </ul>`,
            },
            {
                label: "Урок 13. Сложные SQL запросы и оптимизация",
                content: `<ul class="int-list">
                    <li class="programm-span">Усложнение запросов для получения мероприятий</li>
                    <li class="programm-span">Проблемы множественных запросов (N+1 problem)</li>
                    <li class="programm-span">Проекции данных с помощью Select</li>
                    <li class="programm-span">Оптимизация запросов в один JOIN</li>
                    <li class="programm-span">Использование Dapper для прямых SQL-запросов</li>
                    <li class="programm-span">Маппинг объектов в Dapper</li>
                    <li class="programm-span">Усложнение SQL с LEFT JOIN</li>
                    <li class="programm-span">Эквивалентные запросы в Entity Framework Core и LINQ</li>
                    <li class="programm-span">LINQ Query syntax для сложных соединений</li>
                    <li class="programm-span">Реализация LEFT JOIN в EF Core</li>
                </ul>`,
            },
            {
                label: "Урок 14. Фильтрация, пагинация и агрегация данных",
                content: `<ul class="int-list">
                    <li class="programm-span">Подсчет количества свободных мест</li>
                    <li class="programm-span">Запросы на EF Core с LINQ для агрегации</li>
                    <li class="programm-span">Использование оконных функций в SQL</li>
                    <li class="programm-span">Запросы с фильтрами и пагинацией</li>
                    <li class="programm-span">Фильтрация по датам и времени</li>
                    <li class="programm-span">Усложнение логики: минимальное количество свободных мест</li>
                    <li class="programm-span">Реализация пагинации в Entity Framework Core</li>
                </ul>`,
            },
            {
                label: "Урок 15. Продвинутые техники работы с Dapper",
                content: `<ul class="int-list">
                    <li class="programm-span">Фильтрация и пагинация в Dapper через SQL</li>
                    <li class="programm-span">Написание сложных SQL-запросов</li>
                    <li class="programm-span">Анализ планов выполнения запросов</li>
                    <li class="programm-span">Использование CTE (Common Table Expressions)</li>
                    <li class="programm-span">Сравнение производительности различных подходов</li>
                    <li class="programm-span">Реализация фильтров и пагинации в Dapper</li>
                    <li class="programm-span">Оптимальные способы подсчета общего количества (total count)</li>
                </ul>`,
            },
            {
                label: "Урок 16. Гибкая сортировка и продвинутые запросы",
                content: `<ul class="int-list">
                    <li class="programm-span">Реализация гибкой сортировки в Entity Framework Core</li>
                    <li class="programm-span">Гибкая сортировка в Dapper</li>
                    <li class="programm-span">Усложнение запросов: сортировка по популярности</li>
                    <li class="programm-span">Улучшение запросов с помощью CTE (WITH AS)</li>
                    <li class="programm-span">Расчет популярности через Entity Framework Core</li>
                    <li class="programm-span">Оптимизация сложных аналитических запросов</li>
                </ul>`,
            },
            {
                label: "Урок 17. Работа с деревьями и иерархическими структурами в Postgresql. Adjacency List и Materialized Path",
                content: ``,
            },
            {
                label: "Урок 18. Работа с индексами и оптимизация запросов",
                comingSoon: true,
            },
            {
                label: "Урок 19. CQRS",
                comingSoon: true,
            },
            {
                label: "Урок 20. Паттерн Спецификация (Specification)",
                comingSoon: true,
            },
        ],
    },
];
