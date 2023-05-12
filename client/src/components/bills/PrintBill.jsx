import { Button, Modal } from 'antd'

export default function PrintBill({ isModalOpen, setIsModalOpen }) {

    return (
        <Modal title="Fatura Yazdır" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)} width={800}>
            <section className="py-20 bg-black">
                <div className="max-w-5xl mx-auto bg-white px-6">
                    <article className='overflow-hidden'>
                        <div className="logo my-6">
                            <h2 className="text-4xl text-slate-700">LOGO</h2>
                        </div>
                        <div className="bill-details">
                            <div className='grid sm:grid-cols-4 grid-cols-3 gap-12'>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold text-slate-700'>Fatura Detayı</p>
                                    <p>Unwrapped</p>
                                    <p>Fake Street 123</p>
                                    <p>San Javier</p>
                                    <p>CA 1234</p>
                                </div>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold text-slate-700'>Fatura</p>
                                    <p>The Boring Company</p>
                                    <p>Tesla Street 123</p>
                                    <p>Frisco</p>
                                    <p>CA 1234</p>
                                </div>
                                <div className='text-md text-slate-500'>
                                    <div>
                                        <p className='font-bold text-slate-700'>Fatura Numarası</p>
                                        <p>00041</p>
                                    </div>
                                    <div>
                                        <p className='font-bold text-slate-700 mt-2'>Veriliş Tarihi</p>
                                        <p>2012-11-21</p>
                                    </div>
                                </div>
                                <div className='text-md text-slate-500  sm:block hidden'>
                                    <div>
                                        <p className='font-bold text-slate-700'>Vade</p>
                                        <p>0 Days</p>
                                    </div>
                                    <div>
                                        <p className='font-bold text-slate-700 mt-2'>Due</p>
                                        <p>00:00:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bill-table-area mt-8">
                            <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                <thead>
                                    <tr className='border-b border-slate-200'>
                                        <th scope='col' className='py-3.5 text-left text-sm font-normal text-slate-700 sm:table-cell hidden'>Görsel</th>
                                        <th scope='col' className='py-3.5 sm:w-0 w-full text-left text-sm font-normal text-slate-700 sm:table-cell'>Başlık</th>
                                        <th scope='col' className='text-center py-3.5 text-sm font-normal text-slate-700 sm:table-cell hidden'>Fiyat</th>
                                        <th scope='col' className='text-center py-3.5 text-sm font-normal text-slate-700 sm:table-cell hidden'>Adet</th>
                                        <th scope='col' className='text-end py-3.5 text-sm font-normal text-slate-700 sm:table-cell'>Toplam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b border-slate-200'>
                                        <td className='py-4 pr-3 sm:table-cell hidden'>
                                            <img className='w-12 h-12 object-cover' src="data:image/jpeg;base64,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" alt="" />
                                        </td>
                                        <td className='py-4 text-left'>
                                            <div className='flex flex-col'>
                                                <span className='font-medium'>Şalgam</span>
                                                <span className='font-light sm:hidden inline-block text-xs'>Birim Fiyatı 5.00₺</span>
                                            </div>
                                        </td>
                                        <td className='py-4 text-center sm:table-cell hidden'><span className='font-medium'>5.00₺</span></td>
                                        <td className='py-4 text-center sm:table-cell hidden'><span className='font-medium'>1</span></td>
                                        <td className='py-4 text-end'><span className='font-medium'>5.00₺</span></td>
                                    </tr>

                                </tbody>

                                <tfoot >
                                    <tr >
                                        <th className='text-right pt-4 font-normal sm:table-cell hidden' colSpan={4} scope='row'><span>Ara Toplam:</span></th>
                                        <th className='text-left pt-4 font-normal sm:hidden' scope='row'><p>Ara Toplam:</p></th>
                                        <td className='text-right pt-4'><span>61.00₺</span></td>
                                    </tr>

                                    <tr >
                                        <th className='text-right pt-4 font-normal sm:table-cell hidden' colSpan={4} scope='row'><span>Ara Toplam:</span></th>
                                        <th className='text-left pt-4 font-normal sm:hidden' scope='row'><p>KDV:</p></th>
                                        <td className='text-right pt-4 text-red-700'><span>+4.00₺</span></td>
                                    </tr>

                                    <tr >
                                        <th className='text-right pt-4 font-bold sm:table-cell hidden' colSpan={4} scope='row'><span>Ara Toplam:</span></th>
                                        <th className='text-left pt-4 font-bold sm:hidden' scope='row'><p>Toplam:</p></th>
                                        <td className='text-right pt-4'><span>61.00₺</span></td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className='my-9'>
                                <div className='border-t pt-9 border-slate-200'>
                                    <p className='text-sm font-light text-slate-700'>
                                        Ödeme Koşulları 14 gündür. Paketlenmemiş Borçların Geç Ödenmesi Yasası 0000'e göre, serbest çalışanların
                                        bu süreden sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti talep etme hakkına sahip olduklarını  ve bu
                                        noktada bu ücrete ek olarak yeni bir fatura sunulacağını lütfen unutmayın. Revize faturanın 14 iş günü içinde
                                        ödenmemesi durumunda, vadesi geçmiş hesaba ek faiz ve %8 yasal oran artı %0.5  Bank of England tabanı olmak üzere
                                        toplam %8.5 uygulanacaktır. Taraflar kanun hükmü dışında sözleşme yapamazlar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <div className='flex justify-end mt-4'>
                <Button type='primary' size='large'>Yazdır</Button>
            </div>
        </Modal>
    )
}
