<template>
  <div class="comment">
    <div class="comment__wrapper">
      <ModalComment 
        v-if="showModal" 
        :postNum="postId" 
        :commentNum="newComId" 
        @closeModal="showModal = false" 
        @addComm="addComment"
        @editComm="editComment"
        @delComm="deleteComment"
        :addedCom="addBtn"
        :editedCom="editBtn"
        :deletedCom="deleteBtn"
        :comData="editingComment"
      />
      <h1>Comments for Post {{ this.postId }}</h1>
      <CommentsTable 
        :columns="commentsColumns" 
        :bodyData="postComments"
        @getComId="editModal"
        @getDelComId="delModal"
      >
      </CommentsTable>
      <div class="comment__add">
        <button type="button" @click="showModal = true; editBtn = false; deleteBtn = false; addBtn = true">Add New Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import CommentsTable from '@/components/Comment/CommentsTable.vue'
import ModalComment from '@/components/ModalComment.vue'
export default {
  name: 'UsersPost',
  components: { CommentsTable, ModalComment },
  data() {
    return {
      showLoader: false,
      commentsColumns: ['id', 'name', 'email', 'body', 'edit'],
      usersList: this.$store.state.users,
      postId: this.$route.params.id,
      postComments: [],
      editingComment: {},
      allComments: [],
      newComId: '',
      delCommentId: '',
      showModal: false,
      addBtn: false,
      editBtn: false,
      deleteBtn: false
    }
  },
  beforeMount() {
    this.getPostComments()
  },
  mounted() {
    this.GET_USERS()
    this.getAllComments()
  },
  computed: {
    ...mapGetters(['USERS'])
  },
  methods: {
    ...mapActions(['GET_USERS']),
    async getPostComments() {
      try {
        const response = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}` ,        {
          method: 'GET'
        })
          this.postComments = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getAllComments() {
      try {
        const response = await axios(`https://jsonplaceholder.typicode.com/comments` ,{
          method: 'GET'
        })
          this.allComments = response.data
          this.newComId = String(this.allComments.length + 1)
      } catch (e) {
        console.log(e)
      }
    },
    addComment(body) {
      try {
        axios(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}` ,{
          method: 'POST',
          body: JSON.stringify({...body}),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
          this.postComments.push({...body})
          // console.log(this.allComments[500])
          this.showModal = false
      } catch (e) {
        console.log(e)
      }
    },
    editModal(id) {
      this.addBtn = false
      this.deleteBtn = false
      this.showModal = true
      this.editBtn = true
      this.editingComment = this.postComments.find(item => item.id === id)
      console.log(this.editingComment)
    },
    editComment(body) {
      try {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}` ,{
          method: 'POST',
          body: JSON.stringify({...body}),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
        this.editingComment = {...body}
        console.log(this.editingComment)
        this.showModal = false
      } catch (e) {
        console.log(e)
      }
    },
    delModal(id) {
      this.addBtn = false
      this.deleteBtn = true
      this.showModal = true
      this.editBtn = false
      this.editingComment = this.postComments.find(item => item.id === id)
    },
    deleteComment(body) {
      try {
        fetch(`https://jsonplaceholder.typicode.com/comments/${body.id}` ,{
          method: 'DELETE',
        })
      this.postComments = this.postComments.filter(item => item.id != body.id)
      this.showModal = false
      } catch (e) {
        console.log(e)
      }
    }
  },
}
</script>

<style lang="scss">
.comment {
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
  &__add {
    display: flex;
    margin-top: 30px;
    & button {
      width: 300px;
      height: 50px;
      border-radius: 20px;
      border: none;
      background: #E78837;
      color: #FFF;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
