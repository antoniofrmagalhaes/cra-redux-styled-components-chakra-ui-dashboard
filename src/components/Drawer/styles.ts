import styled, { css, keyframes } from 'styled-components'

interface IContainerProps {
  open: boolean
  orientation?: string
  main?: boolean
}

const fromRight = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0);
  }
`

const fromLeft = keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0);
  }
`

export const Container = styled.div<IContainerProps>`
  z-index: 3;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80%;
  height: 100%;
  color: #232323;
  background: #ffffff;
  ${({ orientation, open }) =>
    orientation === 'right'
      ? css`
          right: 0;
          border-left: 1px solid #dddddd;
          transform: translateX(100%);
          ${open &&
          css`
            animation: ${fromRight} 350ms ease forwards;
          `};
        `
      : css`
          left: 0;
          border-right: 1px solid #dddddd;
          transform: translateX(-100%);
          ${open &&
          css`
            animation: ${fromLeft} 350ms ease forwards;
          `};
        `}

  @media (min-width: 420px) {
    width: 260px;
  }

  @media (min-width: 1600px) {
    width: 300px;
  }
`
