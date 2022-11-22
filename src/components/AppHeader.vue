<script>

export default {

}
</script>

<template>
    <header>
        <div class="d-flex justify-content-between p-2 pt-5">
            <div class="logo px-5">
                <img class="img-fluid w-50" src="../assets/img/gym_logo_2x.png" alt="">
            </div>
            <nav class="px-3 py-5 navbar-expand-lg ">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">

                    <li class="nav-item px-4">
                        <a class="nav-link " href="#">HOME</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link " href="#">ABOUT US</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link " href="#">FACILITIES</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link " href="#">MEMBERSHIP</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link " href="#">TESTIMONIALS</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link " href="#">BLOG</a>
                    </li>

                </ul>
            </nav>
        </div>

        <div class="titolo ">
            <h1>NO PAIN NO GAIN</h1>
            <p>Motivation is what gets you started. Habit is what keeps you going.</p>
        </div>

        <div class="call-to-action d-flex justify-content-center py-2">
            <button class="empty-button">JOIN US TODAY</button>
        </div>



    </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

header {
    background-image: url("../assets/img/home-banner.jpg");
    height: 1100px;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
}

.titolo {

    margin-top: 300px;
    text-align: center;

    h1 {
        font-weight: 600;
        font-size: $titleFSize;
    }

    p {
        font-weight: 300;
    }

}


a {
    font-size: $navFSize;
    font-weight: 400;

}

a:hover {
    color: #e3817c;
}
</style>
