<script>
import titleDiv from '../components/partial/TitleDivisorio.vue';

export default {
    components: {
        titleDiv
    }
}
</script>

<template>
    <main>
        <!-- //sezione semplice di testo -->
        <section class="simple-text  ">
            <div class="contenitore ">
                <titleDiv title="WORLD CLASS Fitness" />
                <p>At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped
                    to
                    help you reach your goals of a healty and fit lifesyle.</p>
            </div>

            <span class="triangle-down">&#9207</span>

        </section>

    </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";


.simple-text {
    text-align: center;
    background-color: $greyMain;
    position: relative;
}

.triangle-down {
    color: $greyMain ;
}

p {
    color: $greyFont;
}
</style>
