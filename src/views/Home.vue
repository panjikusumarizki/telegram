<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 pt-4">
          <div>
            <div class="head-chat d-flex justify-content-between">
              <h5 id="title">Telegram</h5>

              <div class="d-flex">
                <button class="btn btn-resp">
                  <img src="../assets/img/plus.png">
                </button>

                <button class="btn btn-resp">
                  <img src="../assets/img/search-resp.png">
                </button>

                <button class="btn" @click="setMenu()">
                  <img src="../assets/img/menu.png">
                </button>
              </div>
            </div>

            <div id="menu-box" :class="display">
              <div class="mt-4 ml-5 d-flex" id="profile" v-b-toggle.sidebar>
                <div>
                  <img src="../assets/img/settings.png">
                </div>
                <p class="ml-3 text-white">Settings</p>
              </div>

              <div class="mt-2 ml-5 d-flex">
                <div>
                  <img src="../assets/img/Contacts.png">
                </div>
                <p class="ml-3 text-white">Contacts</p>
              </div>

              <div class="mt-2 ml-5 d-flex">
                <div>
                  <img src="../assets/img/save.png">
                </div>
                <p class="ml-3 text-white">Save messages</p>
              </div>

              <div class="mt-2 ml-5 d-flex">
                <div>
                  <img src="../assets/img/Invite.png">
                </div>
                <p class="ml-3 text-white">Invite friends</p>
              </div>

              <div class="mt-2 ml-5 d-flex logout-btn" @click="logout()">
                <div>
                  <img src="../assets/img/logout.png">
                </div>
                <p class="ml-3 text-white">Logout</p>
              </div>
            </div>

            <div class="justify-content-between mt-4" id="center-group">
              <div>
                <i><img src="../assets/img/search.png" id="img-search"></i>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Type your message..."
                  aria-label="Search"
                  id="search-box"
                />
              </div>

              <button class="btn">
                <img src="../assets/img/plus.png">
              </button>
            </div>

            <div class="list-status mt-3 d-flex justify-content-between pb-3">
              <button class="btn">All</button>
              <button class="btn btn-important">Important</button>
              <button class="btn">Unread</button>
            </div>

            <div class="message">
              <div v-for="(item, index) in listUsers" :key="index">
                <div class="w-100 btn p-0 btn-user">
                  <div v-if="item.email !== senderData" @click="selectUser(item,index)">
                    <div class="row no-gutters mt-1" id="fill">
                      <div class="col-2 user-image">
                        <img :src="`http://localhost:4000/${item.image}`" id="img-list">
                      </div>

                      <div class="col-7 text-left pl-4">
                        <p class="m-0 pt-2" id="user-name">{{item.name}}</p>
                        <p id="user-msg">Why did you do that?</p>
                      </div>

                      <div class="col-3 pr-2">
                        <p class="m-0 pt-2 text-right" id="clock">15.20</p>
                        <div id="total-msg">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- chat -->
        <div class="col-md-9" id="chat-msg" v-if="open" ref="hidden">
          <div class="row">
            <div class="col-md-12 bg-white d-flex flex-row justify-content-start align-items-center" id="top-bar">
              <div>
                <img src="../assets/img/back.png" class="d-block d-sm-none m-2 pr-2" @click="close" style="cursor: pointer;">
              </div>
              <div id="img-wrapper">
                <img :src="`http://localhost:4000/${images}`" id="user-picture">
              </div>

              <div class="text-left" id="namesta">
                <p id="name">{{userReceiver}}</p>
                <p id="status">Online</p>
              </div>

              <div id="menu-side">
                <div id="profile-menu">
                  <img src="../assets/img/profile-menu.png">
                </div>
              </div>
            </div>
          </div>

          <div id="middle" class="pt-3">
            <div v-for="(item, index) in historyMessages" :key="'a'+index">
              <div v-if="item.sender !== senderData" class="mt-4">
                <p class="text-left chat-txt mr-auto text-white">{{item.message}}</p>
              </div>

              <div v-else>
                <div class="text-right chat-txt-to ml-auto d-flex">
                  <div>
                    <b-dropdown variant="outline" menu-class="dropmenu" no-caret>
                      <template v-slot:button-content>
                        <img src="../assets/img/back.png" width="80%" id="btn-menu-delete"/>
                      </template>

                      <b-dropdown-item-button class="mt-2 mb-2" @click="deleteMsg(item.id)">
                        Delete Message
                      </b-dropdown-item-button>
                    </b-dropdown>
                  </div>

                  <p>{{item.message}}</p>
                </div>
              </div>
            </div>

            <div v-for="(item, index) in chatPrivates" :key="index">
              <div v-if="item.sender !== senderData" class="mt-4">
                <p class="text-left chat-txt mr-auto text-white">{{item.message}}</p>
              </div>

              <div v-else>
                <p class="text-right chat-txt-to ml-auto">{{item.message}}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-9 bg-white" id="type-msg">
              <form @submit.prevent="sendMessage()">
                <input type="text" v-model="message" class="form-control" placeholder="Type your message..." id="type-msg-box">
                <i class="img-type" id="plus"><img src="../assets/img/plus.png"></i>
                <i class="img-type" id="bald"><img src="../assets/img/bald.png"></i>
                <i class="img-type" id="rect"><img src="../assets/img/rect.png"></i>
              </form>
            </div>
          </div>
        </div>

        <div v-else>
          <div id="msg-default">
            <p>Please select a chat to start messaging</p>
          </div>
        </div>
        <Profile/>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { mapActions } from 'vuex'
import { URL } from '../helpers/env'
import Profile from '../components/Profile'

export default {
  components: {
    Profile
  },
  data () {
    return {
      // username: this.$route.query.username,
      URL: process.env.URL,
      socket: io(`${URL}`),
      senderData: localStorage.getItem('email'),
      listUsers: [],
      message: '',
      dataReceiver: '',
      chatRoom: [],
      chatPrivates: [],
      display: 'hidden',
      menu: false,
      userReceiver: '',
      historyMessages: [],
      images: null,
      open: false
    }
  },
  methods: {
    selectUser (receiver) {
      this.open = true
      this.chatRoom = []
      this.charPrivates = []
      this.userReceiver = receiver.name
      this.dataReceiver = receiver.email
      this.images = receiver.image
      this.setChatPrivate()
      this.socket.emit('get-history-message', {
        sender: this.senderData,
        receiver: this.dataReceiver
      })
      this.getHistory()
    },
    getHistory () {
      this.socket.on('historyMessage', (data) => {
        this.historyMessages = data
      })
    },
    sendMessage () {
      const message = {
        sender: this.senderData,
        receiver: this.dataReceiver,
        message: this.message
      }

      this.chatRoom = [...this.chatRoom, message]

      this.socket.emit('send-message', {
        sender: this.senderData,
        receiver: this.dataReceiver,
        message: this.message
      })

      this.message = ''
      this.setChatPrivate()
    },
    ...mapActions({
      onLogout: 'auth/logout'
    }),
    setChatPrivate () {
      const chatPrivate = this.chatRoom.filter((e) => {
        if (this.dataReceiver === '') {
          return e.sender === this.dataReceiver || e.sender === this.senderData
        } else {
          return (
            e.receiver === this.dataReceiver || e.sender === this.dataReceiver
          )
        }
      })
      this.chatPrivates = chatPrivate
    },
    logout () {
      this.onLogout().then((response) => {
        window.location = '/login'
      })
    },
    setMenu () {
      this.menu = !this.menu
      if (!this.menu === false) {
        this.display = 'hidden'
      } else {
        this.display = 'show'
      }
    },
    close () {
      this.open = false
    },
    deleteMsg (id) {
      this.socket.emit('delete-message', id)
      window.location = '/home'
    }
  },
  mounted () {
    this.socket.emit('get-all-users', [])
    this.socket.on('list-users', (data) => {
      this.listUsers = data
    })

    this.socket.emit('join-room', this.senderData)

    this.socket.on('private-messages', (data) => {
      this.chatRoom = [...this.chatRoom, data]
      if (this.dataReceiver !== null) {
        this.setChatPrivate()
      }
    })
  }
}
</script>

<style scoped>
#btn-menu-delete {
  transform: rotate(270deg);
  vertical-align: top;
}

#img-list {
  width: 55px;
  height: 55px;
  border-radius: 20px;
}

#profile {
  cursor: pointer;
}

#center-group {
  display: flex;
}

.btn-resp {
  display: none;
}

.show {
  display: block;
}

.hidden {
  display: none;
}

.logout-btn {
  cursor: pointer;
}

#menu-box {
  width: 250px;
  height: 270px;
  position: absolute;
  right: 20px;
  border-radius: 35px 10px 35px 35px;
  z-index: 1;
  background: #7E98DF;
}

#title {
  font-size: 25px;
  font-weight: bold;
  color: #7E98DF;
}

.head-chat {
  position: relative;
}

#search-box {
  width: 250px;
  height: 55px;
  background: #FAFAFA;
  border-radius: 15px;
  border: none;
  padding-left: 45px;
}

#img-search {
  position: absolute;
  padding-top: 16px;
  margin-left: 15px;
}

.list-status .btn {
  font-weight: bold;
}

.list-status .btn-important {
  height: 50px;
  background: #7E98DF;
  border-radius: 20px;
  color: #FFFFFF;
}

#chat-msg {
  height: 100vh;
  background: #FAFAFA;
}

#msg-default {
  margin: 0 auto;
  top: 50%;
  left: 50%;
  position: absolute;
  color: #848484;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#img-wrapper {
  padding-top: 15px;
  padding-bottom: 15px;
  /* padding-left: 35px; */
}

#user-picture {
  width: 55px;
  height: 55px;
  border-radius: 20px;
}

#namesta {
  padding-top: 18px;
  padding-left: 20px;
}

#name {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

#status {
  font-size: 13px;
  color: #7E98DF;
}

#profile-menu {
  margin: 0;
  top: 50%;
  position: absolute;
  right: 30px;
  color: #848484;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

#middle {
  height: calc(100vh - 195px);
  overflow: auto;
}

.user-chat-img {
  width: 45px;
  height: 45px;
}

.chat-txt {
  width: fit-content;
  background: #7E98DF;
  padding: 15px 20px;
  margin-left: 10px;
  border-radius: 10px 35px 35px 35px;
}

.chat-txt-to {
  width: fit-content;
  background: #FFFFFF;
  padding: 15px 20px;
  margin-right: 10px;
  border-radius: 35px 10px 35px 35px;
}

.chat-txt p {
  margin: 0;
  color: #FFFFFF;
  font-size: 15px;
}

.chat-txt-to p {
  margin: 0;
  font-size: 15px;
}

#type-msg {
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  padding-top: 20px;
}

#type-msg-box {
  height: 55px;
  border-radius: 15px;
  border: none;
  background: #FAFAFA;
  padding-right: 140px;
}

.img-type {
  position: absolute;
  top: 38%;
}

#plus {
  right: 120px;
  cursor: pointer;
}

#bald {
  right: 80px;
  cursor: pointer;
}

#rect {
  right: 40px;
  cursor: pointer;
}

.message {
  height: calc(100vh - 235px);
  overflow: auto;
}

#clock {
  font-size: 14px;
  color: #848484;
}

.btn-user {
  margin-top: 10px;
  margin-left: 0;
}

.btn-user:focus {
  outline: none;
  box-shadow: none;
}

#user-name {
  font-size: 18px;
  font-weight: bold;
}

#total-msg {
  border-radius: 10px;
  background: #7e98df;
  color: white;
  float: right;
  padding: 4px 6px;
  align-items: center;
  line-height: 14px;
}

#total-msg p {
  font-size: 12px;
  margin: 0;
}

#checked {
  float: right;
  padding: 4px 6px;
  align-items: center;
  line-height: 14px;
}

#user-msg {
  font-size: 14px;
  color: #7e98df;
  white-space: nowrap;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-image img {
  width: 60px;
  height: 60px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: rgba(184, 184, 184, 0.466);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(156, 156, 156);
}

@media only screen and (max-width: 576px) {
    #namesta {
      padding-left: 35px;
    }

    .btn-resp {
      display: block;
    }

    #center-group {
      display: none;
    }

    #msg-default {
      display: none;
    }

    #chat-msg {
      position: absolute;
      height: 100vh;
    }
}
</style>
