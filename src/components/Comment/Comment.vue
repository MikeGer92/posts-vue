<template>
  <div class="comment">
    <div class="comment__data">
      <div class="comment__data_col post__data_id">{{ comment.id }}</div>
      <div class="comment__data_col post__data_name">{{ comment.name }}</div>
      <div class="comment__data_col post__data_email">{{ comment.email }}</div>
      <div class="comment__data_col post__data_body">{{comment.body }}</div>
      <div class="comment__data_col comment__data_btn" 
       
      >
        <button type="button" class="comment__data_btn-delete"
          @click="showDelCommentId(comment.id)"
        >
          Delete</button>
                <button type="button" class="comment__data_btn-edit"
          @click="showCommentId(comment.id)"
        >
          Edit</button>
      </div>
    </div>
  </div>

  
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
    showCommentId(id) {
      this.$emit('getId', id)
    },
    showDelCommentId(id) {
      this.$emit('getDelId', id)
    }
  }
  
}
</script>

<style lang="scss">
.comment {
  display: flex;

  &__data {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 160px;
    border-bottom: 1px solid #000;
    &_col {
      flex-basis: 36%;
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
        flex-basis: 23%;
      }
    }
    &_btn {
      display: flex;
      & button {
        width: 70%;
        height: 40%;
        border-radius: 10%;
        font-size: 18px;
        cursor: pointer;
        color: #FFF;
        margin: 0 10px;
      }
      &-edit {
        background: #1AA3D5;
      }
       &-delete {
         background: #f7422e;
      }
    }
  }
}

</style>