<template>
	<section class="section">
		<h2 class="section__title">Что ты получишь за время обучения</h2>

		<ul class="grid grid-cols-2 gap-10 max-[540px]:hidden max-[1300px]:gap-7">
			<li class="section__card flex" v-for="item in items" :key="item.id">
				<h3 class="section__card-title">
					{{ item.title }}
				</h3>

				<p>
					{{ item.text }}
				</p>
			</li>
		</ul>

		<article class="section__card hidden max-[540px]:flex min-h-[343px]">
			<h3
				class="section__card-title cardText"
				:class="{ cardTextChange: animation }"
			>
				{{ curItem.title }}
			</h3>

			<p class="cardText" :class="{ cardTextChange: animation }">
				{{ curItem.text }}
			</p>

			<div class="flex flex-row gap-2 justify-center mt-auto mb-0">
				<UButton
					icon="i-heroicons-arrow-left"
					size="sm"
					color="gray"
					square
					variant="link"
					@click="delCurPage"
				/>
				<span class="text-gray-500">
					{{ curItemId + "/" + items.length }}
				</span>
				<UButton
					icon="i-heroicons-arrow-right"
					size="sm"
					color="gray"
					square
					variant="link"
					@click="addCurPage"
				/>
			</div>
		</article>
	</section>
</template>

<script setup>
let curItemId = ref(1);
let animation = ref(false);

const addCurPage = () => {
	animation.value = true;

	setTimeout(() => {
		curItemId.value === 4 ? (curItemId.value = 1) : curItemId.value++;
		animation.value = false;
	}, 600);
};

const delCurPage = () => {
	animation.value = true;
	setTimeout(() => {
		curItemId.value === 1 ? (curItemId.value = 4) : curItemId.value--;
		animation.value = false;
	}, 600);
};

const items = [
	{
		id: 1,
		title: "Опыт, максимально приближенный к коммерческому",
		text: "Как минимум ты будешь работать над своим пет проектом, выполняя поставленные задачи. Так ещё у тебя есть возможность поучаствовать в разработке моего проекта, как на реальной работе, с kanban доской, сроками и сложными задачами.",
	},
	{
		id: 2,
		title: "Освоишь современные технологии",
		text: "Научишься работать с современным стеком на .Net и React на практике. Тебе больше не придётся случайным образом изучать всё подряд. На курсе мы уделяем время самому востребованному стэку, который понадобится тебе, чтобы устроиться на высокооплачиваемую работу.",
	},
	{
		id: 3,
		title: "Готовый проект",
		text: "По итогу у тебя будет большой проект для резюме, который станет твоей визитной карточкой. С помощью него ты сможешь подробно рассказать о своём рабочем опыте, ведь ты будешь решать реальные задачи на практике, сталкиваться с проблемами и одолевать их.",
	},
	{
		id: 4,
		title: "Освоишь полный путь создания проекта",
		text: "Ты пройдешь весь путь создания проекта - от создания репозитория до подготовки к запуску и деплоя. У тебя сформируется полная картина того, как разрабатываются реальные коммерческие проекты.",
	},
];

const curItem = computed(() => {
	return items.find((i) => i.id === curItemId.value);
});
</script>

<style scoped>
.section {
	display: flex;
	flex-direction: column;
	gap: 50px;
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
	border-radius: 24px;
	border: 1px solid #e59cff;
	background: rgba(10, 1, 25, 0.6);
	flex-direction: column;
	gap: 16px;
	color: rgba(255, 255, 255, 0.8);
	font-size: 18px;
	font-weight: 400;
	padding: 24px;
}

.section__card-title {
	font-size: 30px;
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

@media screen and (max-width: 1300px) {
	.section {
		gap: 32px;
	}

	.section__title {
		font-size: 58px;
	}

	.section__card {
		border-radius: 16px;
		padding: 20px;
	}

	.section__card-title {
		font-size: 25px;
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
		border-radius: 12px;
		padding: 16px;
	}

	.section__card-title {
		font-size: 20px;
	}
}

.cardText {
	transition: opacity 0.5s;
	opacity: 1;
}

.cardTextChange {
	transition: opacity 0.5s;
	opacity: 0;
}
</style>
