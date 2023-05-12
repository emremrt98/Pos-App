import { Modal, Form, Input, Select, Card, Button } from 'antd'

export default function CreateBill({ isModalOpen, setIsModalOpen }) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Modal title="Fatura Oluştur" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
            <Form layout='vertical' onFinish={onFinish} name="complex-form">
                <Form.Item label="Müşteri Adı" name="customerName"
                    rules={[
                        {
                            required: true,
                            message: 'Username is required',
                        },
                    ]}>
                    <Input placeholder='Müşteri adı yazınız' />
                </Form.Item>
                <Form.Item label="Telefon Numarası" name="customerPhoneNumber"
                    rules={[{ required: true, },]}
                >
                    <Input placeholder='Telefon numarası yazınız' maxLength={11} />
                </Form.Item>
                <Form.Item label="Ödeme Yöntemi" name="customerPaymentMethod"
                    rules={[{ required: true, },]}>
                    <Select placeholder="Ödeme yöntemi seçiniz">
                        <Select.Option value="Nakit">
                            Nakit
                        </Select.Option>
                        <Select.Option value="Kredi Kartı">
                            Kredi Kartı
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Card className='mt-4'>
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
                    <div className='text-right'>
                        <Button htmlType="submit"
                            className='mt-4'
                            type="primary"
                        >Sipariş Oluştur
                        </Button>
                    </div>
                </Card>
            </Form>



        </Modal>
    )
}
