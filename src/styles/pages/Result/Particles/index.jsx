/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import particlesConfig from '../../../../assets/animations/particles.json'
import { ParticlesBase } from './styles'

const ParticlesBackground = () => {
  return (
    <ParticlesBase params={particlesConfig} />
  )
}

export default ParticlesBackground
