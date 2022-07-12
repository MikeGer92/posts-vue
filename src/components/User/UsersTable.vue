<template>
  <div class="table">
    <div class="table__header">
      <div class="table__header_col" 
          v-for="col in columns" 
          :key="col" 
          
        >
        {{ capitalize(col) }}
        <div class="table__header_col-img">
          <div class="table__header_col-img--up" @click="sendClickUp(col)"><img :src="require(`/src/assets/images/sortDown.png`)" /></div>
          <div class="table__header_col-img--down" @click="sendClickDown(col)"><img :src="require(`/src/assets/images/sortDown.png`)" /></div>
        </div>
      </div>
    </div>
    <div class="table__body" v-for="user in bodyData" :key="user.id">
      <User :man="user"/>
    </div>

  </div>
</template>

<script>
import User from '@/components/User/User.vue'
export default {
  name: 'UsersTable',
  components: { User },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    bodyData: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {

    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    sendClickUp(col) {
      this.$emit('clickUp', col)
    },
    sendClickDown(col) {
      this.$emit('clickDown', col)
    },
  }
  
}
</script>

<style lang="scss">
.table {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1600px;
  border: 1px solid black;
  &__header {
    display: flex;
    justify-content: space-around;
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
      &-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        width: 25px;
        height: 30px;
        margin-left: 10px;
        &--up, &--down {
          display: flex;
          width: 20px;
          height: 20px;
          & img {
            width: 20px;
            height: auto;
          }
        }
        &--up {
          transform: rotate(180deg);
        }
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