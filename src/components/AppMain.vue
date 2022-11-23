<script>
import titleDiv from '../components/partial/TitleDivisorio.vue';
import signUp from '../components/partial/SignUp.vue';
import ServiceCard from '../components/partial/ServiceCard.vue';
import FeedbackCard from '../components/partial/FeedbackCard.vue';
import BruceLeeQuotation from '../components/partial/BruceLeeQuotation.vue';
import TrainerCard from '../components/partial/TrainerCard.vue';
import NewsCard from '../components/partial/NewsCard.vue';
import GoalBanner from '../components/partial/GoalBanner.vue';
import Info from '../components/partial/Info.vue';
import { store as state } from '../Store.js'

export default {
    components: {
        titleDiv,
        signUp,
        ServiceCard,
        FeedbackCard,
        BruceLeeQuotation,
        TrainerCard,
        NewsCard,
        GoalBanner,
        Info
    },
    data() {
        return {
            state
        }
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
                <ServiceCard v-for="servizio in state.services" :servizio="servizio" />
            </div>

        </section>

        <!-- sezione risultati feedback e facilities -->
        <section class="primario ">
            <div class="contenitore">

                <!-- sezione feedback -->
                <div class="pb-5">
                    <titleDiv title="REAL WORLD RESULTS " />

                    <div class="d-flex flex-wrap mb-5">

                        <FeedbackCard v-for="feedback in state.feedbacks" :feedback="feedback" />

                    </div>
                </div>

                <!-- sezione facilities -->
                <div class="facilities">
                    <titleDiv title="HIGH PERFORMANCE FACILITIES" />

                    <div class="d-flex contenitore  p-0 justify-content-center flex-wrap">
                        <div>
                            <img class="p-3 w-100" src="../assets/img/home-image1.jpg" alt="">
                        </div>
                        <div>
                            <img class="p-3" src="../assets/img/home-image2.jpg" alt="">
                        </div>
                        <div>
                            <img class="p-3 " src="../assets/img/home-image3.jpg" alt="">
                        </div>
                        <div>
                            <img class="p-3 " src="../assets/img/home-image4.jpg" alt="">
                        </div>
                        <div>
                            <img class="p-3 " src="../assets/img/home-image54.jpg" alt="">
                        </div>
                        <div>
                            <img class="p-3 " src="../assets/img/home-image6.jpg" alt="">
                        </div>

                    </div>
                </div>



            </div>
        </section>

        <!-- sezione bruce lee quotation -->
        <section>
            <BruceLeeQuotation />
        </section>

        <!-- sezione trainers -->
        <section class="secondario  py-5">
            <div class="contenitore trainer">
                <titleDiv title="MEET OUR TRAINERS" />

                <div class="d-flex justify-content-center">

                    <TrainerCard v-for="trainer in state.trainers" :trainer="trainer" />

                </div>


                <div class="d-flex">
                    <button class="empty-button px-4 ">VIEW ALL TRAINERS</button>
                </div>


                <span class="triangle-down ">&#9207</span>
            </div>


        </section>

        <!-- sezione news  -->
        <section class="primario">
            <div class="contenitore">
                <titleDiv title="PERFORMANCE NEWS" />

                <div class="d-flex flex-wrap justify-content-center">

                    <NewsCard v-for="news in state.news" :news="news" />

                </div>

                <div class="d-flex">
                    <button class="empty-button px-4 my-5 ">READ ALL ARTICLES</button>
                </div>
            </div>

        </section>

        <!-- sezione goals banner  -->
        <GoalBanner />

        <!-- sezione informazioni -->
        <section class="primario">

            <Info />

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

    .triangle-down {
        color: $greyMain ;
        bottom: -30%;
        left: 47%
    }
}

.trainer {
    .triangle-down {
        color: $greyDarker ;
        bottom: -16%;
        left: 44%
    }
}







.service-card {
    background-image: url("../assets/img/gym_bkgd_bw-compressor.jpg");
    background-size: cover;
    background-repeat: no-repeat;

}

.facilities {
    img {
        max-width: 400px;
    }
}
</style>
