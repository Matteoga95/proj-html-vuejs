<script>

export default {

}
</script>

<template>
    <footer>
        <div class="container d-flex justify-content-between py-5">
            <p>© Copyright 2012 - 2020 &nbsp &nbsp| &nbsp &nbsp Avada Theme by Theme Fusion &nbsp &nbsp | &nbsp &nbsp
                All Right Reserved &nbsp &nbsp| &nbsp &nbsp
                Powered by WordPress</p>

            <div class="socials w-25 d-flex justify-content-center">
                <div class="red-block mx-2 ">
                    <i class="fa-regular fa-face-awesome "></i>
                </div>
                <div class="red-block mx-2">
                    <i class="fa-regular fa-face-awesome"></i>
                </div>
                <div class="red-block mx-2">
                    <i class="fa-regular fa-face-awesome"></i>
                </div>
            </div>


        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

footer {
    background-color: $blackFooter;
    color: $greyLightFont;
}

.red-block {
    height: 40px;
    width: 40px;
    background-color: $redMain;
    border-radius: 2px;
    color: white;
}

.socials {}
</style>
