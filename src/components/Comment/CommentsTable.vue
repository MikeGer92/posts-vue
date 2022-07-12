<template>
  <div class="comments-table">
    <div class="comments-table__header">
      <div class="comments-table__header_col" v-for="col in columns" :key="col">{{ capitalize(col) }}</div>
    </div>
    <div class="comments-table__body" v-for="com in bodyData" :key="com.id">
      <Comment :comment="com"
        @getId="sendComId"
        @getDelId="sendDelComId"
      />
    </div>

  </div>
</template>

<script>
import Comment from '@/components/Comment/Comment.vue'
export default {
  name: 'commentsTable',
  components: { Comment },
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
    },
    sendComId(id) {
      this.$emit('getComId', id)
    },
    sendDelComId(id) {
      this.$emit('getDelComId', id)
    }
  }
  
}
</script>

<style lang="scss">
.comments-table {
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