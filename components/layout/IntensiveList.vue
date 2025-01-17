<template>
  <section class="section">
    <h2 class="section__title">Доступные интенсивы</h2>

    <ul class="grid grid-cols-3 gap-10">
      <li class="section__card flex" v-for="int in intensivies" :key="int.id">
        <h3 class="section__card-title">
          {{ int.name }}
        </h3>

        <p>
          {{ int.descr }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const intensivies = [
  {
    id: 0,
    name: "Intensive 1",
    descr: "ksjdksjd sjdjsd dbs bd hhsdgdgds ddsdsd sdgsd sdsgdhs jx dhd ddd",
  },
  {
    id: 1,
    name: "Intensive 2",
    descr: "ksjdksjd sjdjsd dbs bd hhsdgdgds ddsdsd sdgsd sdsgdhs jx dhd ddd",
  },
  {
    id: 2,
    name: "Intensive 3",
    descr: "ksjdksjd sjdjsd dbs bd hhsdgdgds ddsdsd sdgsd sdsgdhs jx dhd ddd",
  },
];
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
</style>
