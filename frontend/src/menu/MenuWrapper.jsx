import React from 'react';
import MenuList from './MenuList';
import { useGetMenuQuery } from '../redux/apiS/MenuApi';  

const MenuWrapper = () => {
    const { data, isLoading, isError } = useGetMenuQuery();  

    console.log(data);
    console.log(isLoading);
    console.log(isError);

    return <MenuList />;
};

export default MenuWrapper;
