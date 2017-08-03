<template>
    <v-toolbar fixed :class="[toolbar ? 'toolbar--home' : 'toolbar--top elevation-0']" dark>
        <v-btn icon to="/">
            <img src="public/logo.png" height="32px">
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat column dark to="progress">Progress</v-btn>
            <v-btn flat column dark to="privacy">Privacy Policy</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'Toolbar',
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
.application .theme--dark.toolbar--home {
    background-color: rgba(19, 37, 99, 0.75);
}

.application .theme--dark.toolbar--top {
    background-color: rgba(25, 25, 50, 0.5);
    border-color: transparent !important;
}

.toolbar {
    padding-left: 10%;
    padding-right: 10%;
}
</style>