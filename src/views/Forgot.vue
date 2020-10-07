<template>
    <div>
        <div id="wrapper">
            <form>
                <div id="header-title">
                    <router-link to="/login"><a href="#"><img src="../assets/img/back.png"></a></router-link>
                    <h2 id="title" class="mx-auto">Forgot Password</h2>
                </div>

                <p id="you">You’ll get messages soon on your e-mail</p>

                <div class="input-group">
                    <label for="email-input">Email</label>
                    <input type="email" id="email-input" autocomplete="off" required lang="en">
                </div>

                <button type="submit" class="btn-block" id="btn-send">Send</button>
            </form>
        </div>
    </div>
</template>

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

#you {
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

#btn-send {
    border-radius: 70px;
    border: none;
    height: 50px;
    background: #7E98DF;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
}

#btn-send:hover {
    background: #5172ce;
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
