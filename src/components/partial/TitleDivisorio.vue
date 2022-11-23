<script>

export default {
    name: "titleDiv",
    props: {
        title: String
    }
}
</script>

<template>
    <h2 class="py-4">{{ this.title }}</h2>
    <div class="d-flex justify-content-center">
        <img class="pb-4" src="../../assets/img/divider-xx-red.png" alt="">

    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

h2 {
    font-weight: 600;
    font-size: $titleSectionFSize;
    color: white;
}
</style>
