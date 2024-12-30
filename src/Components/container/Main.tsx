import React from 'react';
import Profile from './Profile';
import Content from './Content';

const Main = () => {
    return (
        <div className="flex flex-row h-full overflow-auto">
            <Profile/>
            <Content/>
        </div>
    );

}
export default React.memo(Main);
