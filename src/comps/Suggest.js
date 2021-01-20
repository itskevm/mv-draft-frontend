import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'

const divCss = css`
  padding: 10px 0;
`

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional')

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark)
  }

  return (
    <div css={divCss}>
      <h1>Submission</h1>
      <p>It's true, it happens to all of us. One day, we realize that we haven't 
        done much in a day, and so we want to make it worse by putting something on 
        binge on Netflix. I may not be the biggest movie watcher, but that shouldn't 
        stop you from giving me ideas of what to watch when that eventual feeling overcomes me.
        And in that day, I will give you thanks, all because you took the time to fill out this form.
        I will review it and add it to the list if I end up seeing it.
      </p>
      <hr />
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item label="Type of Submission" name="requiredMark">
          <Radio.Group>
            <Radio.Button value="optional">Optional</Radio.Button>
            <Radio.Button value={true}>Recommendation</Radio.Button>
            <Radio.Button value={false}>Overhyped</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Movie title" required tooltip="This allows for quick look up later">
          <Input placeholder="eg. Titanic" />
        </Form.Item>
        <Form.Item
          label="Added by"
          tooltip={{
            title: 'I want to keep track of who tells me what so that I can update them later',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit for Review</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormLayoutDemo