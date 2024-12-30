import React from 'react';
import {IExperience} from '../../../Context/data.interface';

const ExperienceCard: React.FC<{content: IExperience}> = ({content}) => {
    const {role, company, period} = content;

    const responsibilities = <ul className="list-disc pl-4 text-pri-font"> {content.responsibilities.map((response:string, index:number) => {
        return <li className="text-sm py-1" key={index}>{response}</li>
    })}</ul>;

    return (
        <div className="p-6">
            <h3 className="text-md"><span className="font-bolder uppercase tracking-wide">{role}</span> - {company}</h3>
            <p className="text-sm text-sec-font py-1">{period.from} -  {period.to}</p>
            {responsibilities}
        </div>
    );

}
export default React.memo(ExperienceCard);
