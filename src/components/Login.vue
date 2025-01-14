<template>
  <div class="register-container">
    <div class="photo-side">
      <img src="../assets/photo/login.jpg" alt="Photo" />
    </div>
    <div class="form-side">
      <div style="font-size: 35px;">
        <span style="color: #022D5A;">EduMaterial</span>
        <span style="color: #FF6A00;">Shop</span>
      </div>
      <div style="font-size: 25px; color: #022D5A;">
        <span>Welcome to EduMaterialShop!👋🏻</span>
      </div>
      <div style="font-size: 15px; color: #022D5A; margin: 15px 0px;">
        <span>Please sign-in to your account and start the adventure</span>
      </div>
      <!-- Error Alert -->
      <div
        v-if="errorMessage"
        class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
        role="alert"
      >
        <span class="font-medium">Error!</span> {{ errorMessage }}
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="remember-me">
          <input type="checkbox" id="rememberMe" v-model="rememberMe" />
          <label for="rememberMe">Remember Me</label>
          <a href="/forgot-password" style="margin-left: auto;">Forgot Password?</a>
        </div>
        <button type="submit" class="text-[#ffffff] bg-[#022d5a] border-[#022d5a] border hover:bg-[#022d5a] hover:text-white transition duration-300 ease-in-out transform hover:scale-105">Login</button>
      </form>
      <p>New on our platform? <a href="/register">Create new account</a></p>
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
      email: "",
      password: "",
      rememberMe: false,
      errorMessage: null,
    };
  },
  methods: {
    login() {
      // Get user data from localStorage
      const storedUserData = JSON.parse(localStorage.getItem("userData"));

      // Check if user data exists and matches
      if (
        storedUserData &&
        storedUserData.email === this.email &&
        storedUserData.password === this.password
      ) {
        // Generate a token
        const token = this.generateToken();

        // Store the token in localStorage or sessionStorage
        if (this.rememberMe) {
          localStorage.setItem("authToken", token);
        } else {
          sessionStorage.setItem("authToken", token);
        }

        console.log("Login successful, token generated:", token);

        // Redirect to homepage or dashboard
        this.$router.push("/");
      } else {
        // Show error message
        this.errorMessage = "Invalid email or password. Please try again.";
      }
    },
    generateToken() {
      // Generate a random token (for demonstration purposes)
      return btoa(
        JSON.stringify({
          email: this.email,
          timestamp: new Date().toISOString(),
        })
      );
    },
  },
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
  border: none;
  cursor: pointer;
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

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 5px;
}
</style>
