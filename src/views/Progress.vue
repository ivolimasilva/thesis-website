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
    
        <!-- Progress : Start -->
        <section class="content elevation-12">
            <h2 class="display-2">Progress</h2>
            <v-stepper class="elevation-2" vertical>
                <v-stepper-step step="1">
                    Dataset collection
                    <small>Creation of hashtag graph</small>
                </v-stepper-step>
                <v-stepper-content step="1">
                    <v-card class="grey lighten-4">
                        <ul>
                            <li>
                                Obtaining access to Instagram API &emsp;
                                <v-progress-circular indeterminate v-bind:size="15" v-bind:width="7" class="primary--text"></v-progress-circular>
                            </li>
                            <li>
                                Perform a binary search using hashtags in a photo as new seeds &emsp;
                                <v-progress-circular indeterminate v-bind:size="15" v-bind:width="7" class="primary--text"></v-progress-circular>
                            </li>
                            <li>
                                Evaluate if the hashtag graph is enough spread to be considered a good set &emsp;
                                <v-progress-circular indeterminate v-bind:size="15" v-bind:width="7" class="primary--text"></v-progress-circular>
                            </li>
                        </ul>
                    </v-card>
                </v-stepper-content>
                <v-stepper-step step="2">
                    Dataset collection
                    <small>Gathering iamges for the classifier</small>
                </v-stepper-step>
                <v-stepper-content step="2">
                    <v-card class="grey lighten-4 elevation-12" height="100px">
                    </v-card>
                </v-stepper-content>
            </v-stepper>
        </section>
        <!-- Progress : End -->
    
    </div>
</template>

<script>
export default {
    name: 'Progress'
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

.stepper {
    box-shadow: none;
    border-radius: 5px;
}

.stepper__wrapper {
    height: auto;
}

@media screen and (max-width: 480px) {
    .stepper__wrapper {
        height: 150px;
    }
}

.stepper__content {
    background-color: #F5F5F5;
    border-radius: 5px;
}

.stepper--vertical .stepper__content {
    margin: -8px 36px -16px 36px;
}

.application--light .stepper--vertical .stepper__content:not(:last-child) {
    border: none;
}

.card {
    box-shadow: none;
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}

@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>