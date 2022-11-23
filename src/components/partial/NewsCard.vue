<script>

export default {
    name: "NewsCard",
    props: {
        news: Object
    }
}
</script>

<template>
    <div class="news ">
        <div class="card m-3 ">

            <img class="img-fluid  " :src="'src/assets/img/' + this.news.imgSrc" alt="">

            <div class="testo p-3">

                <h5 class="text-start pt-3 ">{{ this.news.title }}</h5>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque corporis, natus aut eos
                    soluta consequuntur ipsa tenetur odit iusto!</p>

            </div>


        </div>
    </div>



</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.card {
    background-color: $greyDarker;
    margin: auto;

    height: min-content;
}

h5 {
    color: $greyFont;
    font-weight: 600;
    color: white;
}

.news {
    max-width: 350px;

}
</style>
