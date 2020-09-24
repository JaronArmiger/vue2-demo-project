<template>
  <!-- v-on to bind event -->
  <form v-on:submit.prevent="onSubmit">
  	<!-- v-model creates two-way data binding between
      a form and a piece of data
  	 -->
  	<input type="text" v-model="username" placeholder="enter github username" >
  	<button type="submit">Go!</button>
  </form>
</template>

<script src='./script.js'></script>
<style scoped src='./style.css'></style>