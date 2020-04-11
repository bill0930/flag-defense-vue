
import Vue from 'vue'
import Toasted from 'vue-toasted';
import 'material-design-icons/iconfont/material-icons.css';

Vue.use(Toasted,{
    iconPack : 'material' // set your iconPack, defaults to material. material|fontawesome|custom-class
  })

// options to the toast
let options = {
    type : 'success',
    icon : {
      name: 'check'
    },
    position: "bottom-center", 
    theme: 'toasted-primary' ,
    duration : 3000,
    fitToScreen: true
  };
  
  // register the toast with the custom message
  Vue.toasted.register('makeDecision',
    (payload) => {
        if (payload.action == 'build'){
            return `
            <h5> <span class="text-primary">${payload.winner.name}</span>  
            has just built  
            <span class="text-warning">${payload.item}</span> </h5>
            `;
        }
        else if (payload.action == 'destroy'){
            return `
            <h5> <span class="text-primary">${payload.winner.name}</span>  
            has just destroyed 
            <span class="text-warning">${payload.item}</span> of <span class="text-danger">${payload.loser.name}</span></h5>
            `
        }
        else {
          return `
          <h5>No action could be made </h5>
          `
        }
        // if there is a message show it with the message
    },
    options
  )