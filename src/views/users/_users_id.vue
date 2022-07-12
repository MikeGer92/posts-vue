<template>
  <div class="user">
    <div class="user__wrapper">
      <h1>{{ USERS[`${this.userId-1}`].name }}'s Posts</h1>
      <PostsTable :columns="postsColumns" :bodyData="userPosts"></PostsTable>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import PostsTable from '@/components/Post/PostsTable.vue'
export default {
  name: 'UsersPost',
  components: { PostsTable },
  data() {
    return {
      showLoader: false,
      postsColumns: ['id', 'title', 'body', 'detail'],
      userId: this.$route.params.id,
      userPosts: [],
      errors: []
    }
  },
  beforeMount() {
    this.getUserPosts()
  },
  mounted() {
    this.GET_USERS()
  },
  computed: {
    ...mapGetters(['USERS'])
  },
  methods: {
    ...mapActions(['GET_USERS']),
    async getUserPosts() {
      try {
        const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}` ,        {
          method: 'GET'
        })
          this.userPosts = response.data
      } catch (e) {
        this.errors.push(e)
      }
    }
    },
}
</script>

<style lang="scss">
.user {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #faf7f7;
  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
