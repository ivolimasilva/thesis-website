<template>
	<v-app>
		<main>
			<toolbar></toolbar>
			<router-view></router-view>
		</main>
	</v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';

export default {
	name: 'App',
	components: {
		'toolbar': Toolbar
	}
}
</script>

<style lang="stylus">
	@import './stylus/main'
</style>