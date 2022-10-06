import "./Styles/Front.css";
import "./Styles/Back.css";
import "./Styles/Library.css";
import "./Styles/Framework.css";
import styled from "styled-components";

/* Style */
const SKILL_TEXT = styled.text`
    font-weight: 700;
    text-anchor: middle;
    text-shadow: 0 0 2.5px #000000;
`;

export default function Skill({name, parameter}) {
    /** RETURN **/
    return (
        <svg height={parameter.height} width={parameter.width}>
            <rect data-skill={name} fill={parameter.backgroundColor} height={parameter.height} rx={parameter.borderRadius} ry={parameter.borderRadius} width={parameter.width} />
            <SKILL_TEXT dominantBaseline="middle" fill={parameter.color} x="50%" y="50%">{name}</SKILL_TEXT>
        </svg>
    );
}