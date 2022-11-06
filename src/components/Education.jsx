import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/education.css';
import { MdCastForEducation } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

export const Education = () => {
    const { light } = useContext(ThemeContext);

    return <div id='education' style={{ '--bglighted': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
        <p>Educ<span>a</span>ti<span>o</span>n <MdCastForEducation style={{ fontSize: "25px" }} /></p>
        <div className='educard' data-aos='zoom-in'>
            <div id='edu1'><GoTriangleLeft className='ic21' /><FaUserGraduate  className='ic' /><GoTriangleRight className='ic22' /></div>
            <div class='educardDet edd1'>
                <p>Full Stack Web Development</p>
                <p>Masai School, Bangalore</p>
                <p>Developing both frontend and backend skills as a <span>MERN Stack </span>developer. </p>
                <p>February 2022 - Present</p>
            </div>
            <div className='date d1'>
            </div>
        </div>
        <div className='educard' data-aos='zoom-in'>
            <div id='edu2'><GoTriangleLeft className='ic21' /><FaUserGraduate className='ic' /><GoTriangleRight className='ic22' /></div>
            <div class='educardDet edd2'>
                <p>Class 12 (Higher Secondary)</p>
                <p>Brilliant Academy, Mangaldai, Assam</p>
                <p>Science Stream</p>
                <p>2019 - 2021</p>
            </div>
            <div className='date d2'>
            </div>
        </div>
        <div className='educard' data-aos='zoom-in'>
            <div id='edu3'><GoTriangleLeft className='ic21' /><FaUserGraduate className='ic' /><GoTriangleRight className='ic22' /></div>
            <div class='educardDet edd3'>
                <p>Class 10 (Secondary education)</p>
                <p>North East Academy, Mangaldai, Assam</p>
                <p>2019</p>
            </div>
            <div className='date d3'>
            </div>
        </div>
    </div>
}