<template>
  <div class="container">
    <ClientOnly>
      <Renderer class="renderer" ref="renderer" :resize="true" :orbit-ctrl="{autoRotate : true, enabled: true}">
        <Camera :position="{ z: 0, y:0 }"/>
        <Scene background="white">
          <SpotLight :position="{x: 0, y: -10, z: 20}" :intensity="1"/>
          <FbxModel
              @load="fixLight"
              src="/models/Robot5_02.FBX"
              :position="{x: 0, y: -10, z: 0}"
              />
        </Scene>
      </Renderer>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

import {Box, Camera, FbxModel, LambertMaterial, PointLight, Renderer, Scene, GltfModel} from 'troisjs';
import {MeshStandardMaterial, TextureLoader} from 'three';

const renderer = ref(null);



const fixLight = (model) => {
  model.traverse(o => {
    if (o.isMesh){
      // handle both multiple and single materials
      const asArray = Array.isArray(o.material) ? o.material : [o.material]
      // 0 works for matte materials - change as needed
      asArray.forEach(mat => mat.metalness = 0)
    }
  })
}

</script>

<style scoped lang="scss">

.container {
  width: 100vw;
  height: 40vh;
  .renderer {
    width: 100%;
    height: 100%;
  }
}

</style>