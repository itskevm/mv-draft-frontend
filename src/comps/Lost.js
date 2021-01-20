import React from 'react'
import { css } from '@emotion/react'

const divCss = css`
  padding: 10px 0;
`

const Lost = (props) => {
  return (
    <div css={divCss}>
      <h1>Welcome</h1>
      <h3>Glad you're here, and we mean it.</h3>
      <img src="https://i.pinimg.com/474x/e2/eb/e6/e2ebe66d496c0c5d2936069ad36209f7.jpg" />
      <p>Someday, you'll see something great here. For now, 
        why not enjoy everything else? 
      </p>
    </div>
  )
}

export default Lost