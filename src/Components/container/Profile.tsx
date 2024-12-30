import React, {useContext} from 'react';
import DataContext from '../../Context/DataContext';
import {ISocial} from '../../Context/data.interface';

const Profile = () => {
    const {data} = useContext(DataContext)
    const mainSkills = data.skills.mainSkills.map((skill:string,index:number)=> <span key={index} className={`${index !== 0 ? "border-l border-line" : ""} px-2 text-sm text-pri-font`}>{skill}</span> )
    const socialLinks = data.social.map((link:ISocial,index:number)=> (
        <a href={link.url} key={index} className={`${index !== 0 ? "border-l border-line" : ""} px-2 text-sm hover:text-pri-font text-sec-font`}>{link.title}</a>
    ));
    return (
        <div className="flex-none flex flex-col items-center md:w-1/3 xl:w-1/4 min-w-80 h-full pt-20 px-8 md:px-4">
            <img src={`${process.env.PUBLIC_URL}/assets/profile.jpg`} alt="Logo" className="rounded-full object-contain w-80" />
            <h2 className="text-xxl tracking-wide font-bolder uppercase pt-8 pb-1 text-center">{data.name}</h2>
            <h3 className="text-sm text-sec-font italic">{data.title}</h3>
            <p className="text-dark mt-2 w-full flex flex-wrap">
                {mainSkills}
            </p>
            <p className="mt-4 text-sm text-justify">
                {data.about.summary}
            </p>
            <p className="mt-4">{socialLinks}</p>
        </div>
    );

}
export default React.memo(Profile);
