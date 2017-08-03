<template>
    <div id="home">
    
        <!-- Hero : Start -->
        <section class="elevation-12" id="hero">
            <v-parallax src="/public/banner.jpg" height="650">
                <v-layout row align-vert-center align-horiz-center>
                    <v-flex class="text-xs-center" xs12>
                        <h1 class="grey--text text--lighten-4 display-2">
                            Hashtag recommendation and popularity
                            <br> prediction for social network images
                        </h1>
                        <h2 class="grey--text text--lighten-4 display-1">Ivo Lima da Silva</h2>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum malesuada blandit. Ut varius placerat scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec luctus, sem vitae imperdiet ultrices, dui arcu convallis mi, non egestas massa nisl eu magna. Nunc fringilla, augue volutpat pellentesque ornare, est eros lacinia nibh, a euismod diam urna non justo. Cras at congue neque. Phasellus vel quam vitae mi imperdiet sodales non in eros. Integer sed lacus ornare urna rhoncus vestibulum. Proin porttitor magna eleifend arcu placerat laoreet.
                </p>
                <p>
                    Phasellus elit sem, ultricies commodo nibh at, malesuada efficitur massa. Morbi scelerisque ligula vel nulla ullamcorper, ac lacinia libero placerat. Vestibulum vel quam at justo ultrices porta. Integer luctus et nibh sed suscipit. Proin ultrices quam ante, quis porta ex bibendum in. Aliquam erat volutpat. Vestibulum id tellus sed tellus facilisis venenatis. Duis at tortor eu velit consequat sodales. Donec feugiat euismod sagittis. Etiam in scelerisque nibh, in condimentum est.
                </p>
            </div>
            <!-- Description : End -->
    
            <!-- Methodology : Start -->
            <h2 class="display-2">Methodology</h2>
            <div class="section-text body-1">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum malesuada blandit. Ut varius placerat scelerisque.
                </p>
            </div>
            <div class="stepper">
                <v-stepper>
                    <v-stepper-header>
                        <v-stepper-step step="1" editable>Dataset collection</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" editable>Development</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3" editable>Validation</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-content step="1">
                        <div class="section-text body-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum malesuada blandit. Ut varius placerat scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec luctus, sem vitae imperdiet ultrices, dui arcu convallis mi, non egestas massa nisl eu magna. Nunc fringilla, augue volutpat pellentesque ornare, est eros lacinia nibh, a euismod diam urna non justo.
                            </p>
                        </div>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <div class="section-text body-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum malesuada blandit. Ut varius placerat scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec luctus, sem vitae imperdiet ultrices, dui arcu convallis mi, non egestas massa nisl eu magna. Nunc fringilla, augue volutpat pellentesque ornare, est eros lacinia nibh, a euismod diam urna non justo.
                            </p>
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
        <!-- Methodology : End -->
    
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
    padding-bottom: 50px;
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