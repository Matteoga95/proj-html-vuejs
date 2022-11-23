<script>

export default {
    name: "Info"
}
</script>

<template>
    <div class="contenitore d-flex justify-content-around">

        <div class="info-col">
            <h4>COME FIND US</h4>
            <p class="pt-4 m-0">12345 North Main street</p>
            <p class="p-0 m-0">New York, NY 555555</p>
            <p class="p-0 m-0">Phone: 1.800.555.6789</p>
            <p>Email: info@your-domain.com</p>
        </div>

        <div class="info-col">
            <h4>RECENT POSTS</h4>
            <p class="pt-4 m-0">&#62 Train with freee weights or your body weight? </p>

            <p class="p-0 m-0">&#62 Nutritional advice that will keep you training</p>

        </div>

        <div class="info-col">
            <h4>OPENING TIMES</h4>
            <p class="pt-4 m-0">Weekdays Mopnday - Friday</p>

            <h5 class="py-1">09:00 - 19:00</h5>
            <p class=" pt-4 m-0">Weekends Saturday - Sunday</p>
            <h5 class="py-1">09:00 - 21:00</h5>
        </div>

        <div>
            <img src="../../assets/img/gym_ad-compressor.jpg" alt="">
        </div>

    </div>


</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

h4 {
    color: #4f575a;
    font-size: 16px;
}

h5 {
    color: #4f575a;
    font-size: 12px;
}

hr {
    color: #4f575a;
}

.info-col {
    max-width: 250px;
}
</style>
