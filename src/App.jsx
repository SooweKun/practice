import { Catalog } from './components/Catalog/catalog'
import { Filter } from './components/Filter/filter'
import { Header } from './components/Header/header'
import { HeaderMenu } from './components/HeaderMenu/headerMenu'
import { Text1 } from './components/HeaderMenu/Text1/text1'
import { List } from './components/List/list'
import React, { useMemo } from 'react';
import './index.css'
import { Footer } from './components/Footer/footer'
import { Menu } from './components/Menu/menu'

export const App = () => {

  const catalogItems = useMemo(() => {
    return Array.from({ length: 12 }).map((_, index) => (
        <Catalog key={index} />
    ));
  }, []);

  return(
    <div className='main'>
        <div className='main__inner'>
            <Header />
            <div className='Header__menu'>
                <HeaderMenu />
            </div>
            <div className="main__Text">
                <Text1 />
            </div>
            <div className='main__Filters'>
                <Filter />
            </div>
        </div>
        <div className='main__Catalog'>
            {catalogItems}
        </div>
        <div className='main__List'>
          <List />
        </div>
        <div className='main__Footer'>
          <Footer />
        </div>
        <div className='main__Menu'>
          <Menu />
        </div>
    </div>
  );
};
