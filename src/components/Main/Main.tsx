import React, { FC } from 'react'
import { Wrapper, Title } from './Main.style'

interface IProps {}

const Main: FC<IProps> = () => (
  <Wrapper>
    <Title>My webpack</Title>
  </Wrapper>
)

export default Main
