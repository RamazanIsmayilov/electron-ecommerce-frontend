import { Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

const Sorting: React.FC = () => {
    return (
        <>
            <Select defaultValue='default'>
                <Option value='default'>Default sorting</Option>
                <Option value='1'>Sort by price: low to high</Option>
                <Option value='2'>Sort by price: high to low</Option>
                <Option value='3'>Sort by price: high to low</Option>
                <Option value='4'>Sort by price: high to low</Option>
            </Select>
        </>
    )
}

export default Sorting