import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

function Home() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => {
                // Format the date values
                const formattedOrders = res.data.map(order => ({
                    ...order,
                    orderDate: new Date(order.orderDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    requiredDate: new Date(order.requiredDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    shippedDate: order.shippedDate ? new Date(order.shippedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
                }));
                setOrders(formattedOrders);
                setLoading(false);
            })
            .catch(err => {
                console.log('Error:', err);
                setLoading(false);
            });
    }, []);

    const columns = [
        {
            title: 'Customer ID',
            dataIndex: 'customerId',
            key: 'customerId',
            sorter: (a, b) => a.customerId.localeCompare(b.customerId),
            filters: [...new Set(orders.map(order => order.customerId))].map(customerId => ({ text: customerId, value: customerId })),
            onFilter: (value, record) => record.customerId === value,
        },
        {
            title: 'Freight',
            dataIndex: 'freight',
            key: 'freight',
            sorter: (a, b) => a.freight - b.freight,
        },
        {
            title: 'Ship City',
            dataIndex: 'shipAddress.city',
            key: 'shipCity',
        },
        {
            title: 'Ship Country',
            dataIndex: 'shipAddress.country',
            key: 'shipCountry',
        },
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            key: 'orderDate',
            sorter: (a, b) => new Date(a.orderDate) - new Date(b.orderDate),
        },
        {
            title: 'Required Date',
            dataIndex: 'requiredDate',
            key: 'requiredDate',
            sorter: (a, b) => new Date(a.requiredDate) - new Date(b.requiredDate),
        },
        {
            title: 'Shipped Date',
            dataIndex: 'shippedDate',
            key: 'shippedDate',
            sorter: (a, b) => new Date(a.shippedDate) - new Date(b.shippedDate),
        },
    ];

    const delayedOrders = orders.filter(order => order.requiredDate && order.shippedDate && new Date(order.requiredDate) < new Date(order.shippedDate));

    const rowClassName = record => delayedOrders.some(order => order.orderId === record.orderId) ? 'delayed-order' : '';

    return (
        <div>
            <Table
                dataSource={orders}
                columns={columns}
                loading={loading}
                rowKey="orderId"
                rowClassName={rowClassName}
            />
        </div>
    );
}

export default Home;
