<script>

export default {
    name: "ServiceCard",
    props: {
        title: String,
        immagineSrc: String
    }
}
</script>

<template>
    <div class="text-center col">
        <img class=" circle p-3 mb-3 img-fluid rounded-circle  " src="../../assets/img/divider-x-red.png" alt="">


        <h4 class="py-2">{{ this.title }}</h4>

        <img src="../../assets/img/divider-x-red.png" alt="">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sit odio sed voluptates.</p>
    </div>

</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

h4 {
    font-weight: 600;
    color: white;
}

.circle {
    border: 1px solid $redMain;

    margin: auto;
}

img {}
</style>
