<template>
    <article class="content">
        <h2>{{ $t("contact.us") }}</h2>
        <section>
            <a href="mailto:alpes.esport@gmail.com">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                <p>alpes.esport@gmail.com</p>
            </a>
            <a href="tel:+33601225350">
                <font-awesome-icon icon="fa-solid fa-phone" />
                <p>+33 (0)6 01 22 53 50</p>
            </a>
            <div>
                <font-awesome-icon icon="fa-solid fa-share-nodes" />
                <span>
                    <a href="https://discord.gg/invite/ENY2nV6" title="Discord">
                        <font-awesome-icon icon="fa-brands fa-discord" />
                    </a>
                    <a href="https://twitter.com/AlpesEsport" title="Twitter">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </a>
                    <a
                        href="https://www.facebook.com/AlpesEsport"
                        title="Facebook"
                    >
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </a>
                    <a
                        href="https://www.instagram.com/alpes_esport/"
                        title="Instagram"
                    >
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>
                </span>
            </div>
            <a href="https://forms.gle/X6teynN1wJKRerPD9">
                <font-awesome-icon icon="fa-solid fa-clipboard-list" />
                <p>{{ $t("contact.join-us") }}</p>
            </a>
        </section>
    </article>
</template>

<script>
export default {
    name: "contactComponent",
};
</script>

<style lang="scss" scoped>
article {
    background-color: var(--bg-color);
    border-radius: 8px 8px 0 0;
    box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;
    overflow: hidden;
    padding: 1.5rem;
    position: relative;
    width: min(100% - 2rem, 1200px);

    &::after {
        backdrop-filter: brightness(1.3);
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
    }

    section {
        display: grid;
        gap: 2.5rem 1.5rem;
        grid-template-columns: repeat(4, 1fr);

        & > * {
            color: white;
            display: inline-grid;
            gap: 1rem;
            justify-items: center;
            text-decoration: none;

            & > svg {
                color: var(--bg-color);
                height: 46px;
                stroke: var(--special-color);
                stroke-width: 26px;
            }

            span a {
                color: white;
                padding: 12px;

                & > svg {
                    height: 22px;
                    transform: scale(1);
                    transition: all 150ms;
                }

                &:hover {
                    svg {
                        color: var(--subtext-color);
                        transform: scale(1.1);
                    }
                }
            }
        }

        @media (min-width: 551px) and (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);

            & > a:first-of-type {
                grid-column: 1;
            }
        }

        @media (max-width: 550px) {
            grid-template-columns: 1fr;

            span a {
                padding: 16px;
            }
        }
    }
}

@media (max-width: 650px) {
    .content {
        width: 100%;
    }
}
</style>
