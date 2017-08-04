<template>
    <div id="progress">
    
        <!-- Hero : Start -->
        <section class="elevation-12" id="hero">
            <v-parallax src="/public/banner.jpg" height="350">
                <v-layout row align-vert-center align-horiz-center>
                    <v-flex class="text-xs-center" xs12>
                        <div class="hidden-sm-and-down">
                            <h1 class="grey--text text--lighten-4 display-2">
                                Hashtag recommendation and popularity prediction for social network images
                            </h1>
                            <h2 class="grey--text text--lighten-4 display-1">Ivo Lima da Silva</h2>
                        </div>
                        <div class="hidden-sm-and-up">
                            <h1 class="grey--text text--lighten-4 headline">
                                Hashtag recommendation and popularity prediction for social network images
                            </h1>
                            <h2 class="grey--text text--lighten-4 title">Ivo Lima da Silva</h2>
                        </div>
                    </v-flex>
                </v-layout>
            </v-parallax>
        </section>
        <!-- Hero : End -->
    
        <!-- Description : Start -->
        <section class="content elevation-12">
            <h2 class="display-2">Privacy Policy</h2>
            <ul>
                <li class="headline">Collected information</li>
                <ul>
                    <li class="subheading">All collected information used will be public at the time of collection</li>
                    <li class="subheading">The saved information will consist on users' profile (if public) containing publications and its metadata (likes, hashtags, comments) throught time</li>
                </ul>
                <li class="headline">Methods to be used</li>
                <ul>
                    <li class="subheading">The images will be used, using its hashtags as labels, to train an image classifier</li>
                    <li class="subheading">The publications metadata will be used to train a time series prediction model</li>
                </ul>
            </ul>
        </section>
        <!-- Description : End -->
    
    </div>
</template>

<script>
export default {
    name: 'Privacy'
}
</script>

<style scoped>
.content {
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 50px;
    min-height: calc(100vh - 350px);
}

.content h2 {
    padding-top: 50px;
}

.section-text p {
    font-size: 24px;
}
</style>