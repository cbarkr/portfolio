import styled, {createGlobalStyle} from 'styled-components'
import {animated} from 'react-spring'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #191b21;
    overflow: hidden;
    font-family: 'monospace','Roboto Mono', 'Helvetica Neue', sans-serif monospace;
    font-size: 14px;
    line-height: 21px;
  }
  html,
  body,
  div,
  a,
  i,
  button,
  select,
  option,
  optgroup,
  hr,
  br {
    user-select: none;
    cursor: default;
  }
  #root {
    padding: 30px;
  }
`
const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: lightgrey;
  fill: lightgrey;
`
const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow-x: hidden;
  overflow-y: hidden;
`
const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'cell',
  verticalAlign: 'middle'
}

export {Global, Frame, Content, toggle}