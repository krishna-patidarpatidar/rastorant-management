import React from 'react';
import MenuList from './MenuList';
import { useGetMenuQuery } from '../redux/apiS/MenuApi';  

const MenuWrapper = () => {
    const {data: menuItems , isLoading, isError } = useGetMenuQuery();  

    console.log(menuItems);
    console.log(isLoading);
    console.log(isError);

    return <MenuList  data={menuItems}/>;
};

export default MenuWrapper;
