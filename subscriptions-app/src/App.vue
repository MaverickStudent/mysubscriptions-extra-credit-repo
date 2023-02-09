<template>
  <div class="app">
    <header>
      <nav class="container navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <h1><span>Subscriptions</span>App</h1>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks"
                aria-controls="navbarLinks" aria-expanded="false" aria-label="Navigation Toggle">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="justify-content-end collapse navbar-collapse" id="navbarLinks">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link pr-3" to="/create">Add Subscription</router-link>
            <router-link class="nav-item nav-link" to="/">View Subscriptions</router-link>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <router-view class="modify"></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', san-serif;

  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}

body {
  background-color: #35495B;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #FFF;
    font-size: 28px;

    span {
      color: #42B883;
    }
  }
}

h3 {
  padding-top: 10px;
}

.modify {
  padding: 10px;
}
</style>