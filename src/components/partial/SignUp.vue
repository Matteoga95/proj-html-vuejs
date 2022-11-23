<script>

export default {
    name: "signUp",
}
</script>

<template>
    <div class="contenitore d-flex justify-content-center py-4">
        <img class="img-fluid" src="../../assets/img/home_img-compressor-400x222.jpg" alt="">
        <div class="mx-5">
            <h4>Sign Up For A Free Training Session!</h4>
            <p class="pt-4 mb-1">Name *</p>
            <input class="w-100" type="text">
            <p class="pt-4 mb-1">Email</p>
            <input class="w-100" type="text">

            <button class="mt-4 w-100 py-2">START NOW!</button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

h4 {
    color: white;
    font-weight: 400;
}

input {
    background-color: $greyDarker;
    border: 2px solid $greyMain;
    height: 15%;
    color: $greyFont ;
    padding: 0 8px;
}

button {
    background-color: $redMain;
    color: white;
    font-size: 14px;
    border-radius: 2px;
}
</style>
