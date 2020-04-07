<template>
  <span id="app">
    <div class="buttons">
      <button class="say-hi-button" @click="swap">SAY HI!</button>
    </div>
  <a-scene embedded arjs>
    <a-marker  preset="hiro">
      <a-entity id="mclaren" position="0 0 0" :scale="model.mclaren.scale" :gltf-model="model.mclaren.url">
      </a-entity>
    </a-marker>

    <a-marker preset="kanji">
      <a-entity  id="dinosaur" position="0 0 0" :scale="model.dinosaur.scale"
        :gltf-model="model.dinosaur.url">
      </a-entity>
    </a-marker>

    <a-entity camera></a-entity>
  </a-scene>
  </span>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      model: {
        mclaren: {
          url: " /gITF/mclaren/scene.gltf",
          position: "0 0 0",
          scale: "0.005 0.005 0.005"
        },
        dinosaur: {
          url: "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",
          position: "0 0 0",
          scale: "0.05 0.05 0.05"
        }
      }
    };
  },
  methods: {
    swap() {
    var temp = this.model.mclaren 
    this.model.mclaren = this.model.dinosaur 
    this.model.dinosaur = temp
    }
  }
};
</script>

  <style>
.buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.say-hi-button {
  padding: 0.25em;
  border-radius: 4px;
  border: none;
  background: white;
  color: black;
  width: 4em;
  height: 2em;
}
</style>