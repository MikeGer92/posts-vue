<template>
  <div class="user">
    <div class="user__data">
      <div class="user__data_col user__data_id">{{ man.id }}</div>
      <div class="user__data_col user__data_username">{{ man.username }}</div>
      <div class="user__data_col user__data_email">{{man.email }}</div>
      <div class="user__data_col user__data_address">
        <div class="user__data_col user__data_address-city">{{man.address.city }}</div>
      </div>
      <div class="user__data_col user__data_phone">{{ man.phone }}</div>
      <router-link :to="`/users/${man.id}/posts`" :style="{'textDecoration': 'none', 'display': 'contents'}">
        <div class="user__data_col user__data_btn"><button type="button" class="user__data_posts">Posts</button></div>
      </router-link>
    </div>
  </div>

  
</template>

<script>
export default {
  name: 'User',
  props: {
    man: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  }
  
}
</script>

<style lang="scss">
.user {
  display: flex;

  &__data {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #000;
    &_col {
      flex-basis: 22%;
      margin: 0 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      font-size: 20px;
      &:first-child {
        flex-basis: 5%;
      }
      &:last-child {
        flex-basis: 7%;
      }
    }
    &_btn {
      & button {
        width: 70%;
        height: 40%;
        border-radius: 10%;
       cursor: pointer;
      }
    }
  }
}

</style>