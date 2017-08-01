<template>
    <div class="white">
        <v-toolbar fixed :class="[toolbar ? 'toolbar--home' : 'transparent elevation-0']" dark>
            <img src="https://vuetifyjs.com/static/v.png" height="38px">
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat column dark to="#">Progress</v-btn>
                <v-btn flat column dark to="#">Privacy Policy</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <section class="elevation-12" id="hero">
            <v-parallax src="https://vuetifyjs.com/static/doc-images/vbanner.jpg">
                <v-layout row align-vert-center align-horiz-center>
                    <v-flex class="text-xs-center" xs12>
                        <h1 class="grey--text text--lighten-4 display-2">Master Thesis</h1>
                        <div class="grey--text text--lighten-4 headline hidden-xs-only">Hashtag recommendation and popularity prediction for social network images</div>
                    </v-flex>
                </v-layout>
            </v-parallax>
        </section>
        <div style="height: 1000px">
        </div>
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
.toolbar {
    padding-left: 10%;
    padding-right: 10%;
}

.hero {
    height: 100%;
}

.application .theme--dark.toolbar {
    background-color: rgba(19, 37, 99, 0.9);
}

.toolbar--home {
    background: #132563
}
</style>