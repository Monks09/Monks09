import SkillCard from '../SkillCard/SkillCard';
import './Skills.css';

function Skills(props) {
    return <div className="Skills">
        <h1>SKILLS</h1>
        <div className="skillsContainer">
            <SkillCard image="https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png" skill_name="HTML" />
            <SkillCard image="https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png" skill_name="CSS" />
            <SkillCard image="https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png" skill_name="JavaScript"/>
            <SkillCard image="https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png" skill_name="Git/Github" />
            <SkillCard image="https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png" skill_name="MongoDB" />
            <SkillCard image="https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png" skill_name="NodeJS" />
            <SkillCard image="https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png" skill_name="ReactJS" />
            <SkillCard image="https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png" skill_name="Redux" />
            <SkillCard image="https://mohitkss.github.io/static/media/mern.b58d81727b47466a7cda.png" skill_name="MERN" />
        </div>
    </div>
}

export default Skills;