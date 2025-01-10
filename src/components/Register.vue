<template>
  <div class="register-container">
    <div class="photo-side">
      <img src="../assets/photo/register.png" alt="Photo" />
    </div>
    <div class="form-side">
      <div style="font-size: 35px;">
        <span style="color: #022D5A;">EduMaterial</span>
        <span style="color: #FF6A00;">Shop</span>
      </div>
      <div style="font-size: 25px; color: #022D5A;">
        <span>Adventure in Learning Here 🚀</span>
      </div>
      <div style="font-size: 15px; color: #022D5A; margin: 15px 0px;">
        <span>Revolutionizing School Supply Management</span>
      </div>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Sign in instead</a></p>
      <p style="text-align: center;">or</p>
      <div class="platform">
        <img src="../assets/icons/facebook.png" alt="Facebook" />
        <img src="../assets/icons/google.png" alt="Google" />
        <img src="../assets/icons/twitter.png" alt="Twitter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Prepare user data
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      // Store data in localStorage
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log('User registered:', userData);

      // Redirect to homepage or login page
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  align-items: center;
  padding: 20px;
}

.photo-side {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-side img {
  width: 75%;
  height: auto;
}

.form-side {
  flex: 1;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #8C8C8C;
}

.form-group input {
  width: 100%;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid #8C8C8C;
  box-sizing: border-box;
}

button {
  margin-top: 30px;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 25px;
  text-align: center;
  color: #8C8C8C;
}

a {
  color: #0056b3;
  text-decoration: none;
}

.platform {
  display: flex;
  padding-top: 30px;
  justify-self: center;
  gap: 30px;
}

.platform img {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>
