import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import CartTotals from '../components/cart/CartTotals';

export default function HomePage() {
    return (
        <>
            <div className='home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24'>
                <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10 md:mr-0 -mr-[20px]">
                    <Categories />
                </div>
                <div className="products flex-[8] overflow-auto max-h-[calc(100vh_-_112px)] pb-10">
                    <Products />
                </div>
                <div className="cart-totals min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
                    <CartTotals />
                </div>
            </div>
        </>
    )
}
