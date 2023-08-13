import React from 'react'
import Title from "../Title/Title";
import './skill.css'
import SkillCards from '../SkillCards/SkillCards';

const Skills = () => {
  return (
    <div className='container'>
        <Title title="مهارت ها"/>

        <SkillCards/>
        
    </div>
  )
}

export default Skills