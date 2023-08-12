<template>
    <div class="playground" ref="playground">
        <div class="list">
            <div class="list-item" v-for="(item, index) in items" :key="index" :data-order="index">
                <!-- Your item content here -->
                <img :src="getImageUrl(index)" :alt="index" width="40px" height="40px"/>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {

    data() {
        return {
            playGround: document.querySelector(".playground"),
            list: document.querySelector(".list"),
            listItems: document.querySelectorAll(".list-item"),
            items: [
                "Angular.png",
                "Docker.png",
                "Html.png",
                "Java.png",
                "JavaScript.png",
                "Css.png",
                "NodeJs.png",
                "Python.png",
                "Vue.png",
                "SpringBoot.png",
                "Kotlin.svg.png"
            ],
            animationsMap: new Map(),
        };
    },
    mounted() {
        this.initializeItems();
        this.updateMap();
        this.updateStyle();
        window.addEventListener("scroll", this.updateStyle);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.updateStyle);
    },
    methods: {
        getImageUrl(item) {
            console.log(item);

            return "/src/assets/icons/" + this.items[item];
        },
        createAnimation(scrollStart, scrollEnd, valueStart, valueEnd) {
            return function (scroll) {
                if (scroll <= scrollStart) {
                    return valueStart;
                }
                if (scroll >= scrollEnd) {
                    return valueEnd;
                }
                return (
                    valueStart +
                    ((valueEnd - valueStart) * (scroll - scrollStart)) / (scrollEnd - scrollStart)
                );
            };
        },
        getDomAnimation(scrollStart, scrollEnd, dom) {
            scrollStart = scrollStart + dom.dataset.order * 600;
            const opacityAnimation = this.createAnimation(scrollStart, scrollEnd, 0, 1);
            const opacity = function (scroll) {
                return opacityAnimation(scroll);
            };
            const scaleAnimation = this.createAnimation(scrollStart, scrollEnd, 0.5, 1);
            const xAnimation = this.createAnimation(
                scrollStart,
                scrollEnd,
                this.$refs.list.clientWidth / 2 - dom.offsetLeft - dom.clientWidth / 2,
                0
            );
            const yAnimation = this.createAnimation(
                scrollStart,
                scrollEnd,
                this.$refs.list.clientHeight / 2 - dom.offsetTop - dom.clientWidth / 2,
                0
            );
            const transform = function (scroll) {
                const result = `translate(${xAnimation(scroll)}px,${yAnimation(scroll)}px) scale(${scaleAnimation(scroll)})`;
                return result;
            };
            return {
                opacity,
                transform,
            };
        },
        initializeItems() {
            this.items = Array.from(this.$el.querySelectorAll(".list-item"));
        },
        updateMap() {
            this.animationsMap.clear();
            const playGroundRect = this.$refs.playground.getBoundingClientRect();
            const scrollStart = playGroundRect.top + window.scrollY;
            const scrollEnd = playGroundRect.bottom + window.scrollY - window.innerHeight;
            for (const item of this.items) {
                this.animationsMap.set(item, this.getDomAnimation(scrollStart, scrollEnd, item));
            }
        },
        updateStyle() {
            const scroll = window.scrollY;
            for (const [dom, value] of this.animationsMap) {
                for (const cssPro in value) {
                    dom.style[cssPro] = value[cssPro](scroll);
                }
            }
        },
    },
};
</script>
  