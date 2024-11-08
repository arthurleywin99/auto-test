import { Editor } from '@monaco-editor/react'
import { Button, Select, Spin } from 'antd'
import { useMemo, useState } from 'react'
import axios from 'axios'

function App() {
  const [result, setResult] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [load, setLoad] = useState<boolean>(false)
  const [lang, setLang] = useState('js')

  const options = useMemo(
    () => [
      {
        value: 'js',
        label: 'JS',
      },
      {
        value: 'python',
        label: 'Python',
      },
      {
        value: 'c++',
        label: 'C++',
      },
      {
        value: 'java',
        label: 'java',
      },
    ],
    []
  )

  const onRunClick = async () => {
    setLoad(true)
    const data = await axios.post('http://localhost:3000/code/run', {
      language: lang,
      code,
    })
    if (data.status === 201) {
      setResult(data.data.result)
    }
    setLoad(false)
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <Select
          style={{
            width: '200px',
            marginBottom: 10,
          }}
          value={lang}
          options={options}
          onChange={(value) => setLang(value)}
        />
        <Button onClick={() => onRunClick()}>Run</Button>
      </div>

      <Editor
        height='80vh'
        width='70%'
        language={lang}
        value={code}
        onChange={(value) => setCode(value ?? '')}
      />
      <div
        style={{
          backgroundColor: '#f1f9f3',
          width: '30%',
        }}
      >
        {load ? <Spin spinning={true} /> : result}
      </div>
    </div>
  )
}

export default App
