<script>

export default {
    name: "BruceLeeQuotation"
}
</script>

<template>
    <div class="quotation py-5">

        <h4 class="py-5 ">"I fear not the man who has practiced 10,000 kicks once, but i fear the man who
            has
            pacticed one kick 10,000
            times "</h4>

        <h5 class="py-5">BRUCE LEE &#8226 QUOTE OF THE DAY</h5>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.quotation {
    color: white;
    background-image: url("../../assets/img/home-testimonial-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
}

h4,
h5 {
    margin: auto;
    width: 26%;

}

h5 {
    font-size: 12px;
    font-weight: 600;
}
</style>
