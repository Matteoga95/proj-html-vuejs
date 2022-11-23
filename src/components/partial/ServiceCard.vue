<script>
import { icon } from '@fortawesome/fontawesome-svg-core';


export default {
    name: "ServiceCard",
    props: {
        servizio: Object

    }
}
</script>

<template>
    <div class="text-center col">

        <div class=" ico p-3 circle rounded-circle  ">
            <font-awesome-icon :icon="this.servizio.iconString" />
        </div>



        <h4 class="py-2">{{ this.servizio.title }}</h4>

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

.ico {
    color: $redMain ;
}

.circle {
    border: 1px solid $redMain;
    width: 20%;
    margin: auto;
}
</style>
