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
// import {onErrorCaptured, ref} from "vue";
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
      deleteBtn: false,
      errors: []
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
    ...mapGetters(['USERS', 'ERRORS'])
  },
  methods: {
    ...mapActions(['GET_USERS']),
    async getPostComments() {
      await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`)
        .then(res => { 
          this.postComments = res.data
        })
        .catch(err => { 
          if (err.response) { 
            console.log(err.message)
            alert('Ошибка запроса. Проверьте данные запроса!')
            
          } else if (err.request) { 
            console.log(err)
          } else { 
            console.log(err)
          }
          this.$store.commit('SET_ERRORS', err) 
        }
      )
    },
    async getAllComments() {
      await axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => { 
          this.allComments = res.data
          this.newComId = String(this.allComments.length + 1)

        })
        .catch(err => { 
          if (err.response) { 
            console.log(err.message)
            alert('Ошибка запроса. Проверьте данные запроса!')
            
          } else if (err.request) { 
            console.log(err)
          } else { 
            console.log(err)
          }
          this.$store.commit('SET_ERRORS', err) 
        }
      )
    },
    addComment(body) {
      axios.post(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`, JSON.stringify({...body}))
        .then(res => { 
          console.log(res)
          this.postComments.push({...body})
          this.allComments.push({...body})
          console.log(this.allComments.length)
          this.showModal = false
        })
        .catch(err => { 
          if (err.response) { 
            console.log(err.message)
            alert('Ошибка запроса. Проверьте данные запроса!')
            
          } else if (err.request) { 
            console.log(err)
          } else { 
            console.log(err)
          }
          this.$store.commit('SET_ERRORS', err) 
          this.showModal = false 
        })
    },
    editModal(id) {
      this.addBtn = false
      this.deleteBtn = false
      this.showModal = true
      this.editBtn = true
      this.editingComment = this.postComments.find(item => item.id === id)
    },
    editComment(body) {
      axios.post(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`, JSON.stringify({...body}))
        .then(res => { 
          console.log(res)
          this.editingComment = {...body}
          this.showModal = false 
        }
        )
        .catch(err => { 
          if (err.response) { 
            console.log(err.message)
            alert('Ошибка запроса. Проверьте данные запроса!')
            
          } else if (err.request) { 
            console.log(err)
          } else { 
            console.log(err)
          }
          this.$store.commit('SET_ERRORS', err) 
          this.showModal = false 
        })
    },
    delModal(id) {
      this.addBtn = false
      this.deleteBtn = true
      this.showModal = true
      this.editBtn = false
      this.editingComment = this.postComments.find(item => item.id === id)
    },
    deleteComment(body) {
      axios.delete(`https://jsonplaceholder.typicode.com/comments/${body.id}`)
        .then(res => { 
          console.log(res)
          this.postComments = this.postComments.filter(item => item.id != body.id)
          this.showModal = false
        }
        )
        .catch(err => { 
          if (err.response) { 
            console.log(err.message)
            alert('Ошибка запроса. Проверьте данные запроса!')
            
          } else if (err.request) { 
            console.log(err)
          } else { 
            console.log(err)
          }
          this.$store.commit('SET_ERRORS', err) 
          this.showModal = false 
        })
    },
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
