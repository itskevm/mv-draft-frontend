import React from 'react'
import { List, Avatar } from 'antd'
import { css } from '@emotion/react'

const pCss = css`
  margin: 1px 0 0 0;
`

const Movies = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://icons-for-free.com/iconfiles/png/512/movie+video+icon-1320087274946223173.png" />}
            title={<a href={`https://www.imdb.com/find?q=${item.title}`}>{item.title}</a>}
            description={item.content}
          />
          <div>
          <p css={pCss}>Added by <b>{item.author}</b></p>
          <p css={pCss}>{item.created_on}</p>
          </div>
        </List.Item>
      )}
    />
  )
}

export default Movies