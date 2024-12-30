import React, {useContext} from 'react';
import ContentTitle from '../container/Utils/ContentTitle';
import DataContext from '../../Context/DataContext';
import ExperienceCard from '../container/Utils/ExperienceCard';
import SectionTitle from '../container/Utils/SectionTitle';

const Resume = () => {
    const {data} = useContext(DataContext);
    const experience = data.experience.map((exp, index) => (
        <ExperienceCard key={index} content={exp}/>
    ))
    return (
        <>
            <ContentTitle content={data.pageHeadings.resume}/>
            <SectionTitle>Experience</SectionTitle>
            {experience.length && experience}
        </>
    );

}
export default React.memo(Resume);
