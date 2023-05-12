import { useState } from 'react'
import CreateBill from '../components/cart/CreateBill';
import { Button, Card, Table } from 'antd';
export default function CartPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <>
            <div className='px-6'>
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
                <div className='cart-total flex justify-end mt-4'>
                    <Card className='w-72 '>
                        <div className='flex justify-between'>
                            <span>Ara Toplam:</span>
                            <span>579.00₺</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>KDV Toplam %8:</span>
                            <span className='text-red-700'>+43.92₺</span>
                        </div>
                        <div className='flex justify-between mt-4 border-t py-2'>
                            <span className='font-bold'>Toplam</span>
                            <span className='font-bold'>620.00₺</span>
                        </div>
                        <Button
                            className='w-full mt-4'
                            type="primary"
                            size='large'

                            onClick={() => setIsModalOpen(true)}
                        >Sipariş Oluştur
                        </Button>
                    </Card>
                </div>
                <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
        </>
    )
}
