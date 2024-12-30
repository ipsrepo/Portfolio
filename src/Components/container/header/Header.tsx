import React, {useContext} from 'react';
import Nav from './Nav';
import DataContext from '../../../Context/DataContext';

const Header = () => {
    const {data} = useContext(DataContext)
    return (
        <header
            className="bg-white w-screen text-primary h-20 border-b border-line flex flex-row items-center tracking-wide">
            <h1 className="text-l font-bolder border-r border-line px-8 h-full flex items-center uppercase">{data.name}</h1>
            <Nav />
        </header>

    );

}
export default React.memo(Header);
