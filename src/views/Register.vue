<template>
    <div id="wrapper">
        <form @submit.prevent="register">
            <div id="header-title">
                <router-link to="/login"><a href="#"><img src="../assets/img/back.png"></a></router-link>
                <h2 id="title" class="mx-auto">Register</h2>
            </div>

            <p id="lets">Let’s create your account!</p>

            <div class="input-group">
                <label for="name-input">Name</label>
                <input type="text" id="name-input" v-model="form.name" autocomplete="off" required lang="en">
            </div>

            <div class="input-group">
                <label for="email-input">Email</label>
                <input type="email" id="email-input" v-model="form.email" autocomplete="off" required lang="en">
            </div>

            <div class="input-group">
                <label for="pass-input">Password</label>
                <div class="input-container">
                    <input type="password" id="pass-input" v-model="form.password" autocomplete="off" required lang="en">
                    <b-icon icon="eye-fill" class="ikon"></b-icon>
                </div>
            </div>

            <button type="submit" class="btn-block" id="btn-reg">Register</button>

            <h6 id="breaker">Register With</h6>

            <button type="button" class="btn-block" id="btn-google">
                <span><img src="../assets/img/google.png"></span>
                Google
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.actionRegister(this.form).then((response) => {
        if (response === 'Register success') {
          window.location = '/login'
        } else {
          this.alertExist()
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    ...mapActions({
      actionRegister: 'auth/register'
    }),
    alertExist () {
      Swal.fire({
        icon: 'error',
        title: 'Email Already Exist',
        text: 'Please change your email for register'
      })
    }
  }
}
</script>

<style scoped>
#wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F6F6F6;
}

a {
    text-decoration: none;
}

#header-title {
    display: flex;
}

#title {
    font-size: 22px;
    color: #7E98DF;
    text-align: center;
    padding-bottom: 25px;
    margin: 0;
    font-weight: 600;
}

#lets {
    font-size: 14px;
    margin: 0;
}

form {
    width: 450px;
    height: 90vh;
    padding: 30px 70px;
    position: relative;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
}

.input-group {
    margin: 25px 0;
}

.input-group label {
    display: block;
    color: #848484;
    font-size: 14px;
    margin: 0;
}

.input-group input {
    position: relative;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
    border-bottom: 1px solid #232323;
}

.input-container {
    position: relative;
    width: 100%;
}

.ikon {
    position: absolute;
    right: 5px;
}

#btn-reg {
    border-radius: 70px;
    border: none;
    height: 50px;
    background: #7E98DF;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
}

#btn-reg:hover {
    background: #5172ce;
    transition: 0.3s ease-in;
}

#breaker {
    text-align: center;
    font-size: 16px;
    color: #848484;
    padding: 25px 0;
    position: relative;
}

#breaker::before {
    content: '';
    display: block;
    width: 80px;
    border: 0.5px solid #a1a1a1;
    left: 0;
    top: 50%;
    position: absolute;
}

#breaker::after {
    content: '';
    display: block;
    width: 80px;
    border: 0.5px solid #a1a1a1;
    right: 0;
    top: 50%;
    position: absolute;
}

#btn-google {
    border-radius: 70px;
    border: 1px solid #7E98DF;
    background: #fff;
    height: 50px;
    color: #7E98DF;
    font-size: 16px;
    font-weight: 600;
}

#btn-google:hover {
    background: #ebeaea;
    transition: 0.3s ease-in;
}

@media only screen and (max-width: 576px) {
    form {
        width: 100%;
    }

    #wrapper {
        background-color: #fff;
    }
}
</style>
