import React from 'react'
import Switch, { SwitchProps } from '@material-ui/core/Switch'
import * as S from './styles'

const ThemeSwitch: React.FC<SwitchProps> = ({ ...props }: SwitchProps): JSX.Element => {
  return (
    <S.Container>
      <S.SwitchContainer>
        <S.Label htmlFor="switch">🌙</S.Label>
        <Switch
          id="switch"
          color='default'
          disableRipple
          {...props}
        />
      </S.SwitchContainer>
    </S.Container>
  )
}

export default ThemeSwitch
