// object that components can emit events on and use to 
// listen to other events
// we use an empty Vue instance as a message bus
import Vue from 'vue';
const bus = new Vue();

export default bus;