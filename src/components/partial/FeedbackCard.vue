<script>

export default {
    name: "FeedbackCard",
    props: {
        feedback: Object
    }
}
</script>

<template>
    <div class="text-center col-6 ">
        <div class="card m-3">
            <div class="d-flex p-3 ">
                <img :src="'src/assets/img/' + this.feedback.imgSrc" alt="">

                <div class="testo px-3">
                    <p class="text-start fst-italic">{{ this.feedback.paragraph }}</p>
                    <h5 class="text-start ">- {{ this.feedback.name }}</h5>
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.card {
    background-color: $greyDarker;
}

h5 {
    color: $greyFont;
    font-weight: 600;
}
</style>
