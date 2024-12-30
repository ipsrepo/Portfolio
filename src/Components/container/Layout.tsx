import React, {useContext} from 'react';
import Header from './header/Header';
import Main from './Main';
import DataContext from '../../Context/DataContext';
import SuspensePage from '../pages/Suspense';

const Layout = () => {
    const {loading} = useContext(DataContext);

    console.log(loading)

    if(loading) {
        return  <SuspensePage />
    }
    return (
        <div className="h-screen overflow-hidden">
            <Header/>
            <Main/>
        </div>
    );

}
export default React.memo(Layout);
