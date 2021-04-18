import React, { useState } from 'react'
import { Lottie, ReactLottiePlayingState } from '@crello/react-lottie'
import { Div } from './styles'
import { FaSun, FaMoon } from 'react-icons/fa'

import toggleAnimation from '../../assets/animations/toggle.json'

interface IThemeSwitch {
  onChange(value: string): void;
  actualTheme: string;
}
interface IAnimationState {
  playingState: ReactLottiePlayingState,
  direction: 1 | -1
}

const ThemeSwitch = ({ onChange, actualTheme }: IThemeSwitch): JSX.Element => {
  const [animationState, setAnimationState] = useState<IAnimationState>({
    playingState: 'stopped',
    direction: 1
  })

  return (
    <Div onClick={() => {
      if (animationState.playingState === 'stopped') {
        setAnimationState({ ...animationState, playingState: 'playing' })
      }

      if (animationState.playingState === 'playing') {
        setAnimationState({ ...animationState, direction: animationState.direction === 1 ? -1 : 1 })
      }

      actualTheme === 'light' ? onChange('dark') : onChange('light')
    }}>
      <Lottie
        width="50px"
        height="50px"
        className="lottie-container basic lottie"
        playingState={animationState.playingState}
        direction={animationState.direction}
        speed={2}
        config={{
          animationData: toggleAnimation,
          loop: false,
          autoplay: false
        }}
      />

      {actualTheme === 'light'
        ? <FaSun className='sun icon'/>
        : <FaMoon className='moon icon'/>}
    </Div>
  )
}

export default ThemeSwitch
