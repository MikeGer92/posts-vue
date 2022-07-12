<template>
	<div class="main-layout">
      <router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'mainLayout',
}

</script>


<style lang="scss">
.main-layout{
	display: flex;
  flex-direction: column;
  width: 100%;
	max-width: 1920px;
}
	
</style>