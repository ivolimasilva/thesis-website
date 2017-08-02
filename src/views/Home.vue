<template>
    <div>
    
        <!-- Toolbar : Start -->
        <v-toolbar fixed :class="[toolbar ? 'toolbar--home' : 'transparent elevation-0']" dark>
            <img src="public/logo.png" height="32px">
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat column dark to="#">Progress</v-btn>
                <v-btn flat column dark to="#">Privacy Policy</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <!-- Toolbar : End -->
    
        <!-- Hero : Start -->
        <section class="elevation-12" id="hero">
            <v-parallax src="/public/night_plane.jpg" height="650">
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
        <!-- Description : End -->

        <!-- Methodology : Start -->
        <section class="elevation-12" id="content">
            <h1 class="display-3">Methodology</h1>
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
                        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
                    </v-stepper-content>
                </v-stepper>
            </div>
        </section>
        <!-- Methodology : End -->

    </div>
</template>

<script>
export default {
    name: 'Home',
    data: function () {
        return {
            toolbar: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll, { passive: true });
    },
    methods: {
        onScroll() {
            this.toolbar = window.scrollY > 0;
        }
    }
}
</script>

<style scoped>
.toolbar,
#content {
    padding-left: 10%;
    padding-right: 10%;
}

#content {
    padding-top: 50px;
}

.application .theme--dark.toolbar {
    background-color: rgba(19, 37, 99, 0.9);
}

.toolbar--home {
    background: #132563
}

.stepper {
    box-shadow: none;
}

.stepper__content {
    padding: 16px 0px;
}
</style>