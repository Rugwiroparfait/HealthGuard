<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
    <p class="description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <div class="actions">
      <router-link to="/" class="btn">Go to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 8rem;
  margin: 0;
  color: #42b983;
}

p {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

.description {
  font-size: 1rem;
  color: #7f8c8d;
  max-width: 500px;
  margin-bottom: 30px;
}

.btn {
  padding: 10px 25px;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #3aa876;
}
</style>