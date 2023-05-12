import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, LineChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Input, Badge } from 'antd';
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className='border-b mb-6 py-4 px-6 flex justify-between items-center gap-20'>
      <div className="logo ">
        <NavLink to='/'><div className='md:text-4xl text-2xl font-bold'>Logo</div></NavLink>
      </div>
      <div className="header-search flex-1 flex justify-center">
        <Input size="large" placeholder="Ürün Ara..." prefix={<SearchOutlined />} className='rounded-full max-w-[800px]' /> </div>
      <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-full md:bg-transparent bg-white md:border-t-0 border-t md:px-4 px-2 md:py-0 py-2 left-0">

        <NavLink to='/' className='menu-link flex flex-col gap-2 hover:text-[#40a9ff] transition-all'>
          <HomeOutlined className='md:text-2xl text-xl' />
          <span className='md:text-xs text-[10px]'>Anasayfa</span>
        </NavLink>

        <Badge count={5} offset={[0, 6]} className='md:block hidden'>
          <NavLink to='/cart' className='menu-link flex flex-col gap-2 hover:text-[#40a9ff] transition-all'>
            <ShoppingCartOutlined className='md:text-2xl text-xl' />
            <span className='md:text-xs text-[10px]'>Sepet</span>
          </NavLink>
        </Badge>

        <NavLink to='/bills' className='menu-link flex flex-col gap-2 hover:text-[#40a9ff] transition-all'>
          <CopyOutlined className='md:text-2xl text-xl' />
          <span className='md:text-xs text-[10px]'>Fatura</span>
        </NavLink>

        <a href='/customer' className='menu-link flex flex-col gap-2 hover:text-[#40a9ff] transition-all'>
          <UserOutlined className='md:text-2xl text-xl' />
          <span className='md:text-xs text-[10px]'>Müşteriler</span>
        </a>

        <a href='/statistics' className='menu-link flex flex-col gap-2 hover:text-[#40a9ff] transition-all'>
          <LineChartOutlined className='md:text-2xl text-xl' />
          <span className='md:text-xs text-[10px]'>İstatistikler</span>
        </a>

        <a href='/' className='menu-link flex flex-col gap-2 hover:text-[#40a9ff] transition-all'>
          <LogoutOutlined className='md:text-2xl text-xl' />
          <span className='md:text-xs text-[10px]'>Çıkış</span>
        </a>
      </div>

      <Badge count={5} offset={[0, 6]} className='md:hidden flex'>
        <a href='/' className='menu-link flex flex-col gap-2 hover:text-[#40a9ff] transition-all'>
          <ShoppingCartOutlined className='text-2xl' />
          <span className='md:text-xs text-[10px]'>Sepet</span>
        </a>
      </Badge>
    </header>
  )
}