<template>
    <div id="home">
    
        <!-- Hero : Start -->
        <section class="elevation-12" id="hero">
            <v-parallax src="/public/banner.jpg" height="650">
                <v-layout row align-vert-center align-horiz-center>
                    <v-flex class="text-xs-center" xs12>
                        <div class="hidden-sm-and-down">
                            <h1 class="grey--text text--lighten-4 display-2">
                                Hashtag recommendation and popularity
                                <br> prediction for social network images
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
            <h2 class="display-2">Description</h2>
            <div class="section-text body-1">
                <p>
                    Currently, in social networks, labeling images with hashtags is used to make content reachable to more visualizations. The ones who do use this marketing method to promote their products, vary from big companies like worldwide brands or individuals, such as freelancers or photographers, since it usually involves low costs.
                </p>
                <p>
                    However, a real time analysis of the ecosystem of what hashtags should be used and which are more popular is a complex task, whose eciency is hard to evaluate. This is because, literally any user can create an hashtag and trends change very often and, without some kind of automation, this task is impossible.
                </p>
                <p>
                    The proposed solution consist on a tool that will use computer vision methods, more specifically image classification, to identify which of the saved hashtags can be applied to that image. With those identified hashtags, the specified tool will perform a data analysis and retrieve a popularity coecient for each hashtag. This information can be incredibly useful to support the decision of what hashtags to use. This project will focus on Instagram, since it is a social network that focus on visual static content which makes possible the image classification and has been more and more used within the described context of brand promoting and marketing. However, the result tool can work as a proof of concept and later be applied to other social networks.
                </p>
                <p>
                    With this proposed tool it’s possible, for any type of user - businesses or individuals - to know what hashtags to use when publishing an image in a social network with the goal of obtaining more likes or visualizations than the same image with other or no hashtags.
                </p>
                <p>
                    This project is part of my master thesis in the Master in Informatics and Computing Engineering of
                    <a target="_blank" href="https://fe.up.pt">Faculdade de Engenharia da Universidade do Porto</a>.
                </p>
            </div>
            <!-- Description : End -->
    
            <!-- Solution : Start -->
            <h2 class="display-2">Solution</h2>
            <div class="section-text body-1">
                <p>
                    The proposed solution to solve the identified problem consists in two aspects:
                </p>
            </div>
            <div class="stepper">
                <v-stepper>
                    <v-stepper-header>
                        <v-stepper-step step="1" editable>Image classification</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" editable>Popularity Analysis</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-content step="1">
                        <div class="section-text body-1">
                            <h1 class="display-1">Image classification</h1>
                            <ul>
                                <li class="headline">Create a graph-based model of hashtags with a maximum degree for each node;</li>
                                <li class="headline">For each saved hashtag, save a collection of images to train the classifier;</li>
                                <li class="headline">For each saved image, perform a popularity analysis;</li>
                            </ul>
                        </div>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <div class="section-text body-1">
                            <h1 class="display-1">Popularity Analysis</h1>
                            <ul>
                                <li class="headline">Retrieve image’s author history;</li>
                                <li class="headline">Calculate user’s trend curve;</li>
                                <li class="headline">When the image’s life span ends, check the number of likes;</li>
                                <li class="headline">Register a new popularity index, based on the number of likes, after the image’s life span, and its relation with the trend curve;</li>
                                <li class="headline">Predict the next value of an hashtag’s popularity index based on past indexes;</li>
                            </ul>
                        </div>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <div class="section-text body-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum malesuada blandit. Ut varius placerat scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec luctus, sem vitae imperdiet ultrices, dui arcu convallis mi, non egestas massa nisl eu magna. Nunc fringilla, augue volutpat pellentesque ornare, est eros lacinia nibh, a euismod diam urna non justo.
                            </p>
                        </div>
                    </v-stepper-content>
                </v-stepper>
            </div>
        </section>
        <!-- Solution : End -->
    
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.content {
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 150px;
}

.content h2 {
    padding-top: 50px;
}

.section-text p {
    font-size: 24px;
}

.stepper {
    box-shadow: none;
}

.stepper__content {
    padding: 16px 0px;
    background-color: #FAFAFA;
}
</style>