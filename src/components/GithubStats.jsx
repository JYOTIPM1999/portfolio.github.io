import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/githubstats.css';
import { SiGithub } from 'react-icons/si';
import GithubCalender from 'react-github-calendar';

export const GithubStats = () => {
    const { light } = useContext(ThemeContext);

    return <div id='githubstats' style={{ '--bglightstats': light ? "#edf2f8" : "#0a192f", '--bglight2stats': light ? "white" : "#152235", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "#edf2f8" : "#0a192f" }}>
        <p>Sta<span>tis</span>tics <SiGithub id='gitStIc' fontSize={'25px'} style={{ transition: "none", '--icColor': light ? "black" : "white" }} /></p>
        <div id='statCont'>
            <div data-aos='zoom-in'>
                {!light ? <img src='https://github-readme-stats.vercel.app/api?username=surajkm24&theme=vue-dark&show_icons=true&hide_border=true&count_private=true&bg_color=0a192f' />
                    : <img src='https://github-readme-stats.vercel.app/api?username=surajkm24&theme=flag-india&show_icons=true&hide_border=true&count_private=true&title_color=blue&text_color=black&bg_color=edf2f8' />
                }
            </div>
            <div data-aos='zoom-in'>
                {light ? <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=surajkm24&theme=flag-india&show_icons=true&hide_border=true&layout=compact&title_color=blue&text_color=black&bg_color=edf2f8' />
                    : <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=surajkm24&theme=vue-dark&show_icons=true&hide_border=true&layout=compact&bg_color=0a192f' />
                }
            </div>
        </div>
        <div className='calender' data-aos='zoom-in'>
            <p>GitHub Calendar</p>
            <GithubCalender
                username='surajkm24'
                blockSize={17}
                blockRadius={8}
                style={{ color: light ? "black" : "white" }}
                theme={light ? {
                    level0: "#F0F0F0",
                    level1: "#C4EDDE",
                    level2: "#7AC7C4",
                    level3: "#F73859",
                    level4: "#384259"
                } : {
                    level0: "#282a36",
                    level1: "#44475a",
                    level2: "#6fc1ff",
                    level3: "#19f9d8",
                    level4: "#ff4b82"
                }}
                fontSize={17}
            />
        </div>
        <div className='contribution' data-aos='zoom-in'>
            {light ? <img src='https://activity-graph.herokuapp.com/graph?username=surajkm24&theme=minimal&bg_color=edf2f8' />
                : <img src='https://activity-graph.herokuapp.com/graph?username=surajkm24&theme=nord&hide_border=true&bg_color=0a192f' />
            }
        </div>
    </div>
}