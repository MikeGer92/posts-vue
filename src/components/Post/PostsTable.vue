<template>
  <div class="posts-table">
    <div class="posts-table__header">
      <div class="posts-table__header_col" v-for="col in columns" :key="col">{{ capitalize(col) }}</div>
    </div>
    <div class="posts-table__body" v-for="item in bodyData" :key="item.id">
      <Post :post="item"/>
    </div>

  </div>
</template>

<script>
import Post from '@/components/Post/Post.vue'
export default {
  name: 'UsersTable',
  components: { Post },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    bodyData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
  
}
</script>

<style lang="scss">
.posts-table {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1600px;
  border: 1px solid black;
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background: #e9e9e9;
    border-bottom: 5px double #000;
    font-weight: 800;
    &_col {
      margin: 0 20px;
      display: flex;
      flex-basis: 22%;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      font-size: 20px;
      &:first-child {
        flex-basis: 5%;
      }
      &:nth-child(4){
        margin: 0 20px 0 50px;
      }
      &:last-child {
        flex-basis: 7%;
      }
    }
  }
  &__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    &_row {
      display: flex;
      width: 100%;
    }
  }
}

</style>