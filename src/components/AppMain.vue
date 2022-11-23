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
                        <FeedbackCard name="Tara Smith" immagineSrc="review_1-compressor.jpg"
                            paragraph="'The trainers at Avada Gym have helped me reach my fitness goals beyond anything i could of hoped for. i love it!'" />
                        <FeedbackCard name="Simon Chel" immagineSrc="review_3-compressor-2.jpg"
                            paragraph="'The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.'" />
                        <FeedbackCard name="Jen Wirth" immagineSrc="review_2-compressor.jpg"
                            paragraph="'The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment..'" />
                        <FeedbackCard name="Jeff Glum" immagineSrc="review_4-compressor-2.jpg"
                            paragraph="'No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers..'" />
                    </div>
                </div>

                <!-- sezione facilities -->
                <div class="facilities">
                    <titleDiv title="HIGH PERFORMANCE FACILITIES" />

                    <div class="d-flex contenitore  p-0 justify-content-center flex-wrap">
                        <div>
                            <img class="p-3 " src="../assets/img/home-image1.jpg" alt="">
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
            <div class="contenitore">
                <titleDiv title="MEET OUR TRAINERS" />

                <div class="d-flex justify-content-center">
                    <TrainerCard name="Ann Baker" immagineSrc="trainer1.jpg" />
                    <TrainerCard name="Anne Warren" immagineSrc="trainer3.jpg" />
                    <TrainerCard name="Peter Rice" immagineSrc="trainer4.jpg" />

                </div>


                <div class="d-flex">
                    <button class="empty-button px-4 ">VIEW ALL TRAINERS</button>
                </div>
            </div>


        </section>

        <!-- sezione news  -->
        <section class="primario">
            <div class="contenitore">
                <titleDiv title="PERFORMANCE NEWS" />

                <div class="d-flex flex-wrap justify-content-center">
                    <NewsCard title="Train with free weights or your body weight?" immagineSrc="blog1.jpg" />
                    <NewsCard title="Nutritional advice that will keep you training" immagineSrc="blog6.jpg" />
                    <NewsCard title="Simple principles for your next workout" immagineSrc="trainer4.jpg" />
                    <NewsCard title="To be numbver one, train like your're number two" immagineSrc="blog4.jpg" />
                    <NewsCard title="Top 5 mistakes every gym member makes" immagineSrc="trainer3.jpg" />
                    <NewsCard title="The myths of shedding body fat explored" immagineSrc="trainer1.jpg" />

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
}

.triangle-down {
    color: $greyMain ;
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
