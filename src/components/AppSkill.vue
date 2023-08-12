<template>
    <section class="skills section" id="skills">


        <h2 class="section__title skills__title"><i class="alicon alicon-daima skills__icon"></i>{{ $t("skills__title") }}
        </h2>
        <span class="section__subtitle">{{ $t("skills__subtitle") }}</span>
        <div class="playground">
            <div class="animation-container">
                <div class="list">
                    <div v-for="item in items">
                        <div :data-order="item.order" class="list-item">
                            <img :src="item.imageUrl" alt="item" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    { order: 0, imageUrl: '/src/assets/icons/Angular.png' },
    { order: 1, imageUrl: '/src/assets/icons/Css.png' },
    { order: 2, imageUrl: '/src/assets/icons/Docker.png' },
    { order: 3, imageUrl: '/src/assets/icons/Html.png' },
    { order: 2, imageUrl: '/src/assets/icons/Java.png' },
    { order: 1, imageUrl: '/src/assets/icons/JavaScript.png' },
    { order: 0, imageUrl: '/src/assets/icons/Kotlin.svg.png' },
    { order: 0, imageUrl: '/src/assets/icons/NodeJs.png' },
    { order: 1, imageUrl: '/src/assets/icons/Python.png' },
    { order: 2, imageUrl: '/src/assets/icons/SpringBoot.png' },
    { order: 3, imageUrl: '/src/assets/icons/Vue.png' },
    { order: 0, imageUrl: '/src/assets/icons/Git.png'}
]

</script>

<style lang="scss" scoped>
* {
    padding: 0;
    list-style: none;
}


.playground {
    position: relative;
}

.animation-container {
    position: sticky;
    gap: 20px;
    padding: 20px;
    justify-items: center;
}

/* 
.list {
    width: 800px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
} */

.list {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
}

.list-item {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin: 50px 15px;
    border-color: rgb(237, 235, 240);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    text-align: center;
}

@media(min-width: 768px) {
    .list {
        grid-template-columns: repeat(4, 1fr);
    }
}

.skills {
  &__container {
    row-gap: 0;
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }
  &__icon {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }
  &__title {
    margin-bottom: var(--mb-0-75);
  }
  &__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }
  &__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }
}
</style>