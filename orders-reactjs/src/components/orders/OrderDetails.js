import React from 'react'
import { Descriptions, Badge } from 'antd';
import Items from './Items';

function OrderDetails( {order} ) {
    return (
        <div>
            <Descriptions title="Detalles del Pedido" bordered>
                <Descriptions.Item label="No Orden">{ order.order_id }</Descriptions.Item>
                <Descriptions.Item label="Cliente">{ order.client_name }</Descriptions.Item>
                <Descriptions.Item label="Telefono del cliente">{ order.client_phone }</Descriptions.Item>
                <Descriptions.Item label="Status">{ order.status }</Descriptions.Item>
                <Descriptions.Item label="Metodo de Pago">
                    { order.payment_method }
                </Descriptions.Item>
                <Descriptions.Item label="Cupon de Descuento">
                    <Badge status="processing" text={ order.promo_code } />
                </Descriptions.Item>
                <Descriptions.Item label="Artículos" span={3}>
                    <Items items={ order.items }></Items>
                </Descriptions.Item>
                <Descriptions.Item label="Total">${ order.total }</Descriptions.Item>
                <Descriptions.Item label="Subtotal">${ order.subtotal }</Descriptions.Item>
                <Descriptions.Item label="Descuento">${ order.discount }</Descriptions.Item>
                <Descriptions.Item label="Repartidor">{ order.delivery_man }</Descriptions.Item>
                
            </Descriptions>
        </div>
    )
}

export default OrderDetails
