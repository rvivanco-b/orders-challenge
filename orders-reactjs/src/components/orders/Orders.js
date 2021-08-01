import React, { useContext } from 'react'
import { Table, Tag, Space } from 'antd';
import Layout from '../layout/Layout';
import OrderDetails from './OrderDetails';

function Orders() {

    const columns = [
    {
        title: 'No Pedido',
        dataIndex: 'order_id',
        key: 'order_id',
        render: text => <a href='/orders/'>{text}</a>,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (value) => {
            let color = 'default'
            if (value.toUpperCase() === 'NUEVO')
                color = '#87d068'
            else if (value.toUpperCase() === 'PREPARANDO')
                color = 'orange'
            else if (value.toUpperCase() === 'RECHAZADO')
                color = 'red'
            else if (value.toUpperCase() === 'CANCELADO')
                color = 'volcano'
            return (<Tag color={ color }>{ value.toUpperCase() }</Tag>)
        }
    },
    {
        title: 'Medio de pago',
        dataIndex: 'payment_method',
        key: 'payment_method',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Subtotal',
        dataIndex: 'subtotal',
        key: 'subtotal',
    },
    {
        title: 'Descuento',
        dataIndex: 'discount',
        key: 'discount',
    },
    {
        title: 'Cliente',
        dataIndex: 'client_name',
        key: 'client_name',
    },    
    {
        title: 'Teléfono',
        dataIndex: 'client_phone',
        key: 'phone',
    },  
    {
        title: 'Plataforma',
        dataIndex: 'platform',
        key: 'platform',
        render: (value) => {
            let color = 'default'
            if (value.toUpperCase() === 'UBER')
                color = 'green'
            else if (value.toUpperCase() === 'DIDI')
                color = 'orange'
            else if (value.toUpperCase() === 'RAPPI')
                color = 'magenta'
            return (<Tag color={ color }>{ value.toUpperCase() }</Tag>)
        }
    },
    ];

    const data = [
        {
            key: 1002,
            order_id: 1002,
            status: 'Nuevo',
            payment_method: 'card',
            total: 102.30,
            subtotal: 82.30,
            discount: 20.30,
            client_name: 'Raul Vivanco',
            client_phone: '5554771045',
            delivery_man: 'Juan Perez',
            promo_code: 'AUGUSTMX2021',
            platform: 'uber',
            items: [
                {
                    product_id: 'D023',
                    item_name: 'Dona de Chocolate',
                    modifier: 'Sin chispas',
                    extra: 'Chocolate',
                    count: 2
                }
            ]
        },
        {
            key: 1003,
            order_id: 1003,
            status: 'Nuevo',
            payment_method: 'card',
            total: 102.30,
            subtotal: 82.30,
            discount: 20.30,
            client_name: 'Raul Vivanco',
            client_phone: '5554771045',
            delivery_man: 'Juan Perez',
            promo_code: 'AUGUSTMX2021',
            platform: 'uber',
            items: [
                {
                    product_id: 'D023',
                    item_name: 'Dona de Chocolate',
                    modifier: 'Sin chispas',
                    extra: 'Chocolate',
                    count: 2
                },
                {
                    product_id: 'D023',
                    item_name: 'Dona de Chocolate',
                    modifier: 'Con chispas',
                    extra: 'Chocolate',
                    count: 2
                }
            ]
        },
        {
            key: 1004,
            order_id: 1004,
            status: 'Nuevo',
            payment_method: 'card',
            total: 102.30,
            subtotal: 82.30,
            discount: 20.30,
            client_name: 'Raul Vivanco',
            client_phone: '5554771045',
            delivery_man: 'Juan Perez',
            promo_code: 'AUGUSTMX2021',
            platform: 'uber',
            items: [
                {
                    product_id: 'D023',
                    item_name: 'Dona de Chocolate',
                    modifier: 'Sin chispas',
                    extra: 'Chocolate',
                    count: 2
                },
                {
                    product_id: 'D027',
                    item_name: 'Cafe Expresso',
                    modifier: null,
                    extra: 'Shot extra',
                    count: 1
                }
            ]
        },
        {
            key: 1005,
            order_id: 1005,
            status: 'Nuevo',
            payment_method: 'card',
            total: 102.30,
            subtotal: 82.30,
            discount: 20.30,
            client_name: 'Raul Vivanco',
            client_phone: '5554771045',
            delivery_man: 'Juan Perez',
            promo_code: 'VERANOMX2021',
            platform: 'uber',
            items: [
                {
                    product_id: 'D027',
                    item_name: 'Cafe Expresso',
                    modifier: null,
                    extra: 'Shot extra',
                    count: 1
                }
            ]
        },
    ];


    return (
        <Layout>
            <Table columns={columns} dataSource={data} size='large' expandable={{
                expandedRowRender: record => <OrderDetails order={record}></OrderDetails>
            }}/>
        </Layout>
    )
}

export default Orders