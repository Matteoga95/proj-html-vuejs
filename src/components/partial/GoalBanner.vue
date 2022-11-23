<script>

export default {
    name: "GoalBanner"
}
</script>

<template>
    <div class="goal-banner">

        <div class="contenitore">
            <div class="d-flex justify-content-between">
                <div>
                    <h2>Achieve your Fitness Goals</h2>
                    <p>Flexible membership packages to suit all levels of athlete and achieve your fitness goals</p>
                </div>
                <div class="d-flex">
                    <button class="empty-button px-4 ">JOIN US</button>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.goal-banner {
    background-image: url("../../assets/img/home-parallax.jpg");
    background-size: cover;
    color: white;
}

p {
    color: white;
}

.empty-button {
    border-color: white;
    color: white;
}
</style>
