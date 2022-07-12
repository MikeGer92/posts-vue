<template>
  <div class="users">
    <Loader v-if="showLoader" />
    <div class="users__wrapper">
      <div class="users__search">
        <label class="users__search_label">Search By Phone</label>
        <input class="users__search_input" v-model="search" placeholder="enter number"/>
      </div>
      <h1>ГЛАВНАЯ</h1>
      <UsersTable v-if="search" :columns="usersColumns" :bodyData="filteredList" :phone="search"></UsersTable>
      <UsersTable v-else :columns="usersColumns" :bodyData="USERS" @clickUp="sortByColumnUp" @clickDown="sortByColumnDown"></UsersTable>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loader from '@/components/app/Loader.vue'
import UsersTable from '@/components/User/UsersTable.vue'
export default {
  name: 'Users',
  components: { Loader, UsersTable },
  data() {
    return {
      showLoader: false,
      usersColumns: ['id', 'username', 'email', 'address', 'phone', 'goTo'],
      search: '',
      usersList: this.filteredList
    }
  },

  mounted() {
    this.GET_USERS()
  },
  computed: {
    ...mapGetters(['USERS']),
    filteredList(){
      let num = this.search;
      return this.USERS.filter(item => {
        if(num ==='') return true;
          else return item.phone.includes(num);
      })
    }
        
  },
  methods: {
    ...mapActions(['GET_USERS']),
    sortByColumnUp(col) {
      if(col === 'address') {
        this.USERS.sort((a,b) => a.address.city.localeCompare(b.address.city))
      } else if(col === 'username') {
        this.USERS.sort((a,b) => a.username.localeCompare(b.username))
      } else if (col === 'email'){
        this.USERS.sort((a,b) => a.email.localeCompare(b.email))
      } else {
        this.USERS.sort((a,b) => a.id - (b.id))
      }
    },
    sortByColumnDown(col) {
      if(col === 'address') {
        this.USERS.sort((a,b) => b.address.city.localeCompare(a.address.city))
      } else if(col === 'username') {
        this.USERS.sort((a,b) => b.username.localeCompare(a.username))
      } else if (col === 'email'){
        this.USERS.sort((a,b) => b.email.localeCompare(a.email))
      } else {
        this.USERS.sort((a,b) => b.id - (a.id))
      }
    },
  },
}
</script>
<style lang="scss">
.users {
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
  &__search {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &_label {
      font-size: 20px;
      font-weight: 600px;
      margin-right: 50px;
    }
    &_input {
      margin-right: 150px;
      padding: 0 30px;
      width: 250px;
      height: 100%;
      font-size: 22px;
    }

  }
}


</style>