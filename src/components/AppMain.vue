<script>
import titleDiv from '../components/partial/TitleDivisorio.vue';
import signUp from '../components/partial/SignUp.vue';
import ServiceCard from '../components/partial/ServiceCard.vue';

export default {
    components: {
        titleDiv,
        signUp,
        ServiceCard
    }
}
</script>

<template>
    <main>
        <!-- //sezione semplice di testo -->
        <section class="primario simple-text  ">
            <div class="contenitore ">
                <titleDiv title="WORLD CLASS Fitness" />
                <p>At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped
                    to
                    help you reach your goals of a healty and fit lifesyle.</p>
            </div>

            <span class="triangle-down">&#9207</span>

        </section>


        <!-- sezione sign up -->
        <section class="secondario  py-5">
            <signUp />
        </section>


        <!-- sezione service card  -->
        <section class="service-card ">
            <div class="contenitore d-flex">
                <ServiceCard title="Strenght & Conditioning" />
                <ServiceCard title="Fitness & Cardio" />
                <ServiceCard title="Flexibility & Rest" />
                <ServiceCard title="Health & Diet" />
            </div>

        </section>

    </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.primario {
    background-color: $greyMain;
}

.secondario {
    background-color: $greyDarker;
}

.simple-text {
    text-align: center;

    position: relative;
}

.triangle-down {
    color: $greyMain ;
}

.service-card {
    background-image: url("../assets/img/gym_bkgd_bw-compressor.jpg");
    background-size: cover;
    background-repeat: no-repeat;

}
</style>
