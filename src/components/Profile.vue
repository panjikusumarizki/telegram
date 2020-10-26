<template>
    <div>
        <b-sidebar id="sidebar">
            <div>
                <div>
                    <h4 class="text-center" id="username">@{{getUser[0].username}}</h4>
                </div>

                <div id="profile-pict">
                    <img :src="`${URL}/${getUser[0].image}`" id="img-profile">
                </div>

                <div class="img-upload">
                    <p class="text-center" id="chg">Change picture</p>
                    <input type="file" id="upload" @change="updateImg($event)">
                </div>

                <div class="input-container-name">
                  <form @submit.prevent="updateName()">
                    <input type="text" v-model="name" id="name-input">
                  </form>
                </div>

                <div>
                    <h5 class="text-center" id="username2">@{{getUser[0].username}}</h5>
                </div>

                <div class="pt-4 pl-2">
                    <div>
                        <h5 style="font-weight: bold;">Account</h5>
                    </div>

                    <div>
                      <form @submit.prevent="updateNumber()">
                        <input type="text" v-model="phone" id="phone-input">
                        <p style="color: #7E98DF; cursor: pointer;">Tap to change phone number</p>
                      </form>
                    </div>

                    <hr>

                    <div>
                      <form @submit.prevent="updateUser()">
                        <div style="font-weight: bold; font-size: 1rem;" class="d-flex">
                          <p style="margin: 0; padding: 0;">@</p>
                          <input type="text" v-model="username" id="user-input">
                        </div>
                      </form>
                        <h6 style="color: #848484;">Username</h6>
                    </div>

                    <hr>

                    <div>
                      <form @submit.prevent="updateBio()">
                        <input type="text" v-model="bio" id="bio-input">
                      </form>
                        <h6 style="color: #848484;">Bio</h6>
                    </div>
                </div>

                <div class="pt-4 pl-2">
                    <div>
                        <h5 style="font-weight: bold;">Settings</h5>
                    </div>

                    <div class="d-flex">
                        <div class="pr-3">
                            <img src="../assets/img/union.png">
                        </div>
                        <p>Notification and Sounds</p>
                    </div>

                    <div class="d-flex">
                        <div class="pr-3">
                            <img src="../assets/img/privacy.png">
                        </div>
                        <p class="pl-1">Privacy and Security</p>
                    </div>

                    <div class="d-flex">
                        <div class="pr-3">
                            <img src="../assets/img/data.png">
                        </div>
                        <p>Data and Storage</p>
                    </div>

                    <div class="d-flex">
                        <div class="pr-3">
                            <img src="../assets/img/chat.png">
                        </div>
                        <p>Chat Settings</p>
                    </div>

                    <div class="d-flex">
                        <div class="pr-3">
                            <img src="../assets/img/device.png">
                        </div>
                        <p>Devices</p>
                    </div>
                </div>
            </div>
        </b-sidebar>

        <div class="modal fade" id="modals" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { URL } from '../helpers/env'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      URL: URL,
      image: null,
      phone: null,
      name: null,
      username: null,
      bio: null
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },
  methods: {
    ...mapActions({
      actionGetDetail: 'user/getDetail',
      actionUpdate: 'user/update'
    }),
    updateImg (event) {
      const fd = new FormData()
      fd.append('image', event.target.files[0])

      const payload = {
        id: localStorage.getItem('id'),
        data: fd
      }

      this.actionUpdate(payload).then((response) => {
        // setTimeout(() => {
        //   window.location = '/home'
        // }, 1000)
        if (response === 'Image type must be jpg, jpeg, or png') {
          this.alertImagetype()
        } else if (response === 'File size max 2Mb') {
          this.alertSize()
        } else {
          Swal.fire(
            'Update Success',
            response
          )
          window.location = '/home'
        }
      })
    },
    updateNumber () {
      const fd = new FormData()
      fd.append('phone', this.phone)

      const payload = {
        id: localStorage.getItem('id'),
        data: fd
      }

      this.actionUpdate(payload).then((response) => {
        Swal.fire(
          'Update Success',
          response
        )
        window.location = '/home'
      })
    },
    updateName () {
      const fd = new FormData()
      fd.append('name', this.name)

      const payload = {
        id: localStorage.getItem('id'),
        data: fd
      }

      this.actionUpdate(payload).then((response) => {
        Swal.fire(
          'Update Success',
          response
        )
        window.location = '/home'
      })
    },
    updateUser () {
      const fd = new FormData()
      fd.append('username', this.username)

      const payload = {
        id: localStorage.getItem('id'),
        data: fd
      }

      this.actionUpdate(payload).then((response) => {
        Swal.fire(
          'Update Success',
          response
        )
        window.location = '/home'
      })
    },
    updateBio () {
      const fd = new FormData()
      fd.append('bio', this.bio)

      const payload = {
        id: localStorage.getItem('id'),
        data: fd
      }

      this.actionUpdate(payload).then((response) => {
        Swal.fire(
          'Update Success',
          response
        )
        window.location = '/home'
      })
    },
    alertImagetype () {
      Swal.fire({
        icon: 'error',
        title: 'Image Type Error',
        text: 'Image type must be jpg, jpeg, or png'
      })
    },
    alertSize () {
      Swal.fire({
        icon: 'error',
        title: 'Image Size Too Big',
        text: 'File size max 2Mb'
      })
    }
  },
  mounted () {
    this.actionGetDetail().then((result) => {
      this.phone = result[0].phone
      this.name = result[0].name
      this.username = result[0].username
      this.bio = result[0].bio
    })
  }
}
</script>

<style scoped>
#username {
    font-weight: bold;
    color: #7E98DF;
}
#profile-pict {
    text-align: center;
    margin-top: 50px;
}

#img-profile {
    width: 90px;
    height: 90px;
    border-radius: 30px;
}

.input-container-name {
  padding: 0 30px;
}

#name-input {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: #f8f9fa;
  border: none;
  outline: none;
}

#name-input:focus,#phone-input:focus,#user-input:focus,#bio-input:focus {
  display: block;
  border-bottom: 1px solid #a5a5a5;
}

#username2 {
    color: #848484;
}

.img-upload {
    position: relative;
    overflow: hidden;
}

#upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity= 0);
}

#chg {
    color: #7E98DF;
}

#phone-input {
  outline: none;
  border: none;
  background-color: #f8f9fa;
}

/* #phone-input:focus {
  border-bottom: 1px solid #a5a5a5;
} */

#user-input {
  outline: none;
  border: none;
  background-color: #f8f9fa;
}

#bio-input {
  width: 90%;
  outline: none;
  border: none;
  background-color: #f8f9fa;
  font-weight: bold;
  font-size: 1rem;
}
</style>
