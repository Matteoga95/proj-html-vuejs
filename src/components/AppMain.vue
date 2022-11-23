<script>
import titleDiv from '../components/partial/TitleDivisorio.vue';
import signUp from '../components/partial/SignUp.vue';
import ServiceCard from '../components/partial/ServiceCard.vue';
import FeedbackCard from '../components/partial/FeedbackCard.vue';
import BruceLeeQuotation from '../components/partial/BruceLeeQuotation.vue';


export default {
    components: {
        titleDiv,
        signUp,
        ServiceCard,
        FeedbackCard,
        BruceLeeQuotation
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
