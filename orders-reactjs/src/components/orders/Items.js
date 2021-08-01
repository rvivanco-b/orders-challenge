import React from 'react'
import { Table, Tag, Space } from 'antd';

const Items = ({items}) => {
    const columns = [
        {
            title: 'Clave Item',
            dataIndex: 'product_id',
            key: 'product_id'
        },
        {
            title: 'Item',
            dataIndex: 'item_name',
            key: 'item_name'
        },
        {
            title: 'Cantidad',
            dataIndex: 'count',
            key: 'count'
        },
        {
            title: 'Modificador',
            dataIndex: 'modifier',
            key: 'modifier',
        },
        {
            title: 'Extra',
            dataIndex: 'extra',
            key: 'extra',
        },
    ];

    items.forEach((e, index) => e.key = index)

    return (
        <Table columns={columns} dataSource={items} size='large'/>
    )
}

export default Items
