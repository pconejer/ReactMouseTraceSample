import {BehaviorEntry, EmitterConfigV3} from '@pixi/particle-emitter'
import {Texture} from 'pixi.js'
import particle from './assets/particle.png'



const MOVE_SPEED = {
  type: 'movespeed', config: {
    speed: {list: [{time:0, value:24}, {time:1, value:0}]}
  }
}

const ALPHA = {
  type: 'alpha', config: {
    alpha: {list:[{time: 0, value:1},{ time:1, value: 0}]}
  }
}

const SCALE = {
  type: 'scale', config: {
    scale: {list: [{time: 0, value:1},{time:1, value:0}]}
  }
}

const COLOR = {
  type: 'color', config: {
    color: {list:[{time:0, value:'#ff6c10'},{time:1, value: '#ff0000'}]}
  }
}

const ROTATION = {
  type: 'rotation', config: {
    accel: 0, minSpeed: 0, maxSpeed: 0, minStart: 0, maxStart: 360
  }
}

const BLEND_MODE = {
  type: blendMode, config: {blendMode: 'screen'}
}

const TEXTURE = {
  type: 'textureRandom', config: {textures: [Texture.from(particle)]}
}


export const CONFIG = {
  lifetime: {min: 0.3, max: 0.6},
  frequency: 0.001,
  emitterLifetime = -1,
  maxParticles: 500,
  pos: {x: -100, y: -100},
  behaviors: [ALPHA, MOVE_SPEED, SCALE, COLOR, ROTATION, BLEND_MODE, TEXTURE]
}