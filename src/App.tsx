import React from 'react'
import { Table } from 'antd'
import type { TableColumnsType, TableProps } from 'antd'

interface DataType {
  key: React.Key
  idx: string
  name: string
  chinese: number
  math: number
  english: number
  status: string
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Idx',
    dataIndex: 'idx',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
]

const data: DataType[] = [
  {
    key: '1',
    idx: '122',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
    status: 'Pending',
  },
  {
    key: '2',
    idx: '123',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
    status: 'Pending',
  },
  {
    key: '3',
    idx: '124',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
    status: 'Pending',
  },
  {
    key: '4',
    idx: '125',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
    status: 'Passed',
  },
]

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}

const App: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
)

export default App
