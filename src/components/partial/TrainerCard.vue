<script>

export default {
    name: "TrainerCard",
    props: {
        name: String,
        immagineSrc: String
    }
}
</script>

<template>
    <div class="py-5">
        <div class="card w-75">

            <img class="img-fluid " :src="'src/assets/img/' + this.immagineSrc" alt="">

            <div class="testo p-3">

                <h5 class="text-start pt-3 ">{{ this.name }}</h5>
                <h5 class="text-start pb-3">Personal Trainer</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorum exercitationem saepe quod
                    magni totam!</p>

            </div>

            <div class="socials d-flex px-2">
                <div class="red-block mb-4 mx-2 ">
                    <i class="fa-regular fa-face-awesome "></i>
                </div>
                <div class="red-block mb-4 mx-2 ">
                    <i class="fa-regular fa-face-awesome"></i>
                </div>
                <div class="red-block mb-4 mx-2 ">
                    <i class="fa-regular fa-face-awesome"></i>
                </div>
            </div>



        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.card {
    background-color: $greyMain;
    margin: auto;
}

h5 {
    color: $greyFont;
    font-weight: 600;
    color: white;
}

.red-block {
    height: 40px;
    width: 40px;
    background-color: $greyDarker;
    border-radius: 2px;
    color: white;
}
</style>
