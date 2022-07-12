<template>
  <div class="post">
    <div class="post__data">
      <div class="post__data_col post__data_id">{{ post.id }}</div>
      <div class="post__data_col post__data_title">{{ post.title }}</div>
      <div class="post__data_col post__data_body">{{ post.body }}</div>
      <!-- <div class="post__data_col post__data_btn"><button type="button" class="post__data_posts">Detail</button></div> -->
      <router-link :to="`/posts/${post.id}/comments`" :style="{'textDecoration': 'none', 'display': 'contents'}">
        <div class="post__data_col post__data_btn" ><button type="button" class="post__data_posts">Detail</button></div>
      </router-link>
    </div>
  </div>

  
</template>

<script>
export default {
  name: 'User',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.post {
  display: flex;

  &__data {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #000;
    &_col {
      flex-basis: 44%;
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