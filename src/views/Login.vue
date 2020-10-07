<template>
    <div>
        <div id="wrapper">
            <form @submit.prevent="onLogin">
                <h2 id="title">Login</h2>

                <p id="hi">Hi, Welcome back!</p>

                <div class="input-group" id="inpg1">
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

                <router-link to="/forgetPassword"><a href="#"><h6 id="forgot">Forgot password?</h6></a></router-link>

                <button type="submit" class="btn-block" id="btn-login">Login</button>

                <h6 id="breaker">Login With</h6>

                <button type="button" class="btn-block" id="btn-google">
                    <span><img src="../assets/img/google.png"></span>
                    Google
                </button>

                <div class="register-group">
                    <h6>Don't have an account?</h6>
                    <router-link to="/register"><a href="#" class="register-page">Sign Up</a></router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      actionLogin: 'auth/login'
    }),
    onLogin () {
      this.actionLogin(this.form).then((response) => {
        if (response === 'Login successful') {
        //   this.$router.push({ path: '/home', query: { username: results.data.username } })
          window.location = '/home'
        } else {
          alert(response)
        }
      }).catch((err) => {
        alert(err)
      })
      //   axios.post('http://localhost:4000/users/login', {
      //     email: this.email,
      //     password: this.password
      //   }).then((result) => {
      //     const status = result.data.status

    //     if (status === 500) {
    //       alert(result.message)
    //     } else {
    //       const results = result.data.data
    //       localStorage.setItem('token', results.token)
    //       this.$router.push({ path: '/home', query: { username: results.username } })
    //     }
    //   }).catch((err) => {
    //     console.log(err.message)
    //   })
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

#title {
    font-size: 22px;
    color: #7E98DF;
    text-align: center;
    padding-bottom: 25px;
    margin: 0;
    font-weight: 600;
}

#hi {
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

#forgot {
    text-align: right;
    color: #7E98DF;
    font-size: 16px;
    margin-bottom: 30px;
}

#btn-login {
    border-radius: 70px;
    border: none;
    height: 50px;
    background: #7E98DF;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
}

#btn-login:hover {
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
    width: 100px;
    border: 0.5px solid #a1a1a1;
    left: 0;
    top: 50%;
    position: absolute;
}

#breaker::after {
    content: '';
    display: block;
    width: 100px;
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

#btn-google:hover img {
    color: #fff;
}

.register-group {
    display: flex;
    justify-content: center;
    font-size: 14px;
    line-height: 17px;
    padding-top: 25px;
}

.register-group h6 {
  padding-right: 5px;
  color: #555;
  font-size: 14px;
  margin: 0;
}

.register-page {
    color: #7E98DF;
    font-weight: 500;
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
