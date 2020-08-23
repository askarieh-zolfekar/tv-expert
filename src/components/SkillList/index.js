import React from 'react';
import './style.css';
import Text from "../Text";
import Skill from "../SkillItem";

const skills = ['تطوير الأعمال', 'المشاريع الصغيرة', 'مشاركة العملاء', 'الإعلام', 'التحدث أمام الجمهور', 'الدعاية والإعلان', 'ريادة الأعمال', 'القيادة', 'التسويق الرقمي'];

const SkillList = (props) => {
    return (
        <div className="skills-list" {...props}>
            <Text id={'title'}>
                الخبرات
            </Text>
            <div className={'skills'}>
                {skills.map((skill, idx) => <Skill key={idx} text={skill}/>)}
            </div>
        </div>
    );
};

export default SkillList;
