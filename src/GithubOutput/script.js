// this component's data is an object that maps github usernames
// to the data received from the github API
// also stores the latest username input value

import bus from '../bus';
import Vue from 'vue';

export default {
  name: 'GithubOutput',
  data() {
  	return {
  	  currentUsername: null,
  	  githubData: {},
  	}
  },
  created() {
  	// created() and destroyed() are lifecycle hooks
  	// when GithubOutput component is created, it will
  	// listen for when the message bus emits the
  	//'new-username' event
    bus.$on('new-username', this.onUsernameChange)
  },
  destroyed() {
  	// when component is destroyed, it stops listening
  	// for the 'new-username' event
    bus.$off('new-username', this.onUsernameChange)
  },
  methods: {
  	onUsernameChange(name) {
  	  this.currentUsername = name;
  	  this.fetchGithubData(name);
  	},
  	fetchGithubData(name) {
  	  // if we have data alrady, don't request again
  	  if (this.githubData.hasOwnProperty(name)) return;

  	  const url = `https://api.github.com/users/${name}`;
  	  fetch(url)
  	    .then(r => r.json())
  	    .then(data => {
          // this sets the name property on the githubData
          // object with the value data, while also
          // notifying Vue of the change
          Vue.set(this.githubData, name, data);
  	    })
  	}
  }
}