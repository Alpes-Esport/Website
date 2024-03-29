<template>
    <Header :current_link="element" />

    <router-view v-slot="{ Component }" @navbar="elements">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>

    <Footer />
</template>

<script>
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            element: "home",
            prevHeight: 0,
        };
    },
    methods: {
        elements(payload) {
            if (payload.elements.contact) {
                this.element = "contact";
            } else if (payload.elements.association) {
                this.element = "association";
            } else {
                this.element = "home";
            }
        },
    },
};
</script>

<style lang="scss">
@font-face {
    font-family: "Lemon Milk";
    src: url("~@/assets/font/lemonmilk/normal/medium.woff2") format("woff2"),
        url("~@/assets/font/lemonmilk/normal/medium.woff") format("woff");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Lemon Milk";
    src: url("~@/assets/font/lemonmilk/normal/bold.woff2") format("woff2"),
        url("~@/assets/font/lemonmilk/normal/bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Open Sans";
    src: url("~@/assets/font/opensans/normal/regular.woff2") format("woff2"),
        url("~@/assets/font/opensans/normal/regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Open Sans";
    src: url("~@/assets/font/opensans/normal/bold.woff2") format("woff2"),
        url("~@/assets/font/opensans/normal/bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
}

:root {
    --bg-color: rgb(26, 26, 26);
    --bg-color-alt: rgb(24, 29, 51);
    --text-color: #ffffff;
    --subtext-color: #e6e6e6;
    --footer-text-color: #b9b9b9;
    --special-color: rgb(205, 79, 74);
    --special-color-alt: rgb(173, 54, 44);

    --title-font: "Lemon Milk", "Georgia", "Arial", sans-serif;
    --text-font: "Open Sans", "Helvetica", "Arial", sans-serif;
}

::-webkit-scrollbar {
    width: 14px;
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px white;
    border: solid 4px transparent;
    border-radius: 14px;
}

::-webkit-scrollbar-button {
    display: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-color);
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    color: var(--text-color);
    font-family: var(--text-font);
    overflow: overlay;

    main:first-of-type {
        margin-top: -90px;
    }

    img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--title-font);
        text-transform: uppercase;
    }

    h2 {
        font-size: 1.6em;
        margin-bottom: 20px;
    }
}

.content {
    width: min(100% - 2rem, 1350px);
    margin-inline: auto;
    padding: 40px 0;
}

.btn {
    margin-inline: auto;
    padding: 8px 16px;
    width: 180px;
    display: block;
    font-weight: bold;
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    background-color: var(--special-color-alt);
    box-shadow: rgba(0, 0, 0, 0.15) 0 8px 16px 0;
    border-radius: 8px;
    transition: transform 150ms;
    transform: scale(1);

    &:hover {
        transform: scale(1.05);
    }

    @media only screen and (max-width: 450px) {
        width: 100% !important;
        padding: 10px 12px !important;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.splide .splide__pagination {
    bottom: 40px !important;
    gap: 6px;

    .splide__pagination__page {
        background: var(--text-color) !important;
        opacity: 1;
        padding: 5px !important;
        margin: 0 4px;

        &.is-active {
            background: var(--special-color) !important;
        }
    }
}

.banner-content {
    position: sticky;
    margin-top: -120px;
}

#teaser {
    text-align: center;
    border-radius: 6px;

    iframe {
        border-radius: 6px;
    }
}

#presentation {
    padding-bottom: 1rem;
    text-align: justify;

    p {
        font-size: 1.05em;
    }
}

#sponsors {
    padding: 1rem;
    width: min(100% - 2rem, 1100px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    background-color: var(--bg-color-alt);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;

    @media (max-width: 650px) {
        width: 100%;
    }

    img {
        max-width: 150px;
        max-height: 110px;
        padding: 8px;

        @media only screen and (max-width: 650px) {
            max-width: 120px;
            max-height: 90px;
        }
    }
}

#ranking {
    display: flex;
    gap: 0 2rem;
    padding: 0;
    margin-bottom: -1rem;

    @media (max-width: 950px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: unset;
    }
}

@media only screen and (max-width: 650px) {
    h2 {
        text-align: center;
    }
}
</style>
