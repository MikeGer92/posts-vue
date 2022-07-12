<template>
  <div class="modal-comment">
    <EmptyLayout />
    <div class="modal-comment__form">
      <div class="modal-comment__form_header">
        <h1 v-if="addedCom" class="modal-comment__form_header-title">Add Comment {{ commentNum }} For Post {{ postNum }}</h1>
        <h1 v-if="editedCom" class="modal-comment__form_header-title">Edit Comment {{ comData.id }} For Post {{ postNum }}</h1>
        <h1 v-if="deletedCom" class="modal-comment__form_header-title">Delete Comment {{ comData.id }} For Post {{ postNum }}</h1>
        <div class="modal-comment__form_header-close" @click="closeModal">
          <span></span>
          <span></span>
        </div>
        
      </div>
      <input class="modal-comment__form_post"
       v-model="comment.postId"
       :disabled="1"
       :placeholder="postNum" 
      />
      <input v-if="addedCom" class="modal-comment__form_comment"
        v-model="comment.id"
        :disabled="1"
        :placeholder="commentNum"  
      />
      <input v-else class="modal-comment__form_comment"
        v-model="comData.id"
        :disabled="1"
        :placeholder="commentNum"  
      />
      <input v-if="addedCom" class="modal-comment__form_name"
        v-model="comment.name"
        placeholder="Enter comment's name" 
      />
      <input v-else class="modal-comment__form_name"
        v-model="comData.name"
        placeholder="Enter comment's name" 
      />
      <input v-if="addedCom" class="modal-comment__form_email" 
        v-model="comment.email"
        placeholder="Enter Your Email"
      />
      <input v-else class="modal-comment__form_email" 
        v-model="comData.email"
        placeholder="Enter Your Email"
      />
      <textarea v-if="addedCom" class="modal-comment__form_body"
        v-model="comment.body"
      >
      </textarea>
        <textarea v-else class="modal-comment__form_body"
        v-model="comData.body"
      >
      </textarea>
      <div class="modal-comment__form_btn">
        <button v-if="addedCom" @click="addComm" class="modal-comment__form_btn-add">Add Comment</button>
        <button v-if="editedCom" @click="editComm" class="modal-comment__form_btn-edt">Edit Comment</button>
        <button v-if="deletedCom" @click="delComm" class="modal-comment__form_btn-del">Confirm Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyLayout from '../layouts/EmptyLayout.vue'
export default {
  name: 'ModalComment',
  components: { EmptyLayout },
  props: {
    comData: {
      type: Object,
      default: () => {}
    },
    postNum: {
      type: String,
      default: ''
    }, 
    commentNum: {
      type: String,
      default: ''
    },
    addedCom: {
      type: Boolean,
      default: false
    },
    editedCom: {
      type: Boolean,
      default: false
    },
    deletedCom: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      comment: {
        postId: this.postNum,
        id: this.commentNum,
        name: '',
        email: '',
        body: ''
      },
    }
  }, 
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    addComm() {
      this.$emit('addComm', this.comment)
    },
    editComm() {
      this.$emit('editComm', this.comment)
    },
    delComm() {
      this.$emit('delComm', this.comData)
    }
  }
}
</script>

<style lang="scss">

.modal-comment {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  &__form {
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -360px 0 0 -250px;
    background: #FFF;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    &_header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px;
      &-title {
        max-width: 70%;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-left: 30px;
      }
      &-close {
        display: block;
        padding: 10px 10px 20px 0;
        width: 40px;
        height: 40px;
        cursor: pointer;
        & span {
          display: block;
          width: 45px;
          height: 1px;
          margin: 20px 0 0 -20px;
          background: #000;
          transform: rotate(45deg);
          &:last-child {
            transform: rotate(-45deg);
            margin: 0px 0px 0 -20px;
          }
        }
      }
    }
    &_post, &_comment, &_name, &_email {
      width: 400px;
      height: 50px;
      margin: 15px 0;
      padding: 0 10px;
      font-size: 24px;
    }
    &_body {
      width: 500px;
      height: 220px;
      margin: 15px 0;
      padding: 0 10px;
      font-size: 22px;
    }
    &_btn {
      display: flex;
      margin: 15px 0;
      &-add, &-edt, &-del {
        width: 150px;
        height: 50px;
        border-radius: 20px;
        border: none;
        color: #FFF;
        font-size: 18px;
        cursor: pointer;
      }
      &-add {
          background: #3EA749;
        }
      &-edt {
        background: #1AA3D5;
      }
      &-del {
        background: #f7422e;
      }
    }
  }
}
</style>