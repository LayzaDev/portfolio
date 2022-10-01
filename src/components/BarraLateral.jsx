import "./barraLateral.css";

import {GoLocation} from "react-icons/go";
import {RiSuitcaseLine} from "react-icons/ri";
import {FiGithub, FiLinkedin, FiTwitter, FiGlobe} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import { TechIcon } from "./TechIcon";


export function BarraLateral(){
   return(
    <>
        <aside className="sidebar">
            <div className="profile">
                <img className="photoAuthor" src="../assets/photo-author.jpeg" alt="mulher parda de cabelos cacheados e blusa amarela" />
                <h3>Layza Nauane</h3>
                <span>Estudante</span>
            </div>

            <nav className="links">
                <ul>
                    <li>
                        <GoLocation className="icons" />
                        <a href="https://www.google.com/maps/place/Brazil/@-14.4086569,-51.3166799,4z/data=!3m1!4b1!4m5!3m4!1s0x9c59c7ebcc28cf:0x295a1506f2293e63!8m2!3d-8.5049702!4d-55.7226563" target="_blank">Brasil</a>
                    </li>
                    <li>
                        <RiSuitcaseLine className="icons" />
                        <a href="https://ufu.br/" target="_blank">UFU</a>
                    </li>
                    <li>
                        <FiGithub className="icons" />
                        <a href="https://github.com/LayzaDev" target="_blank">GitHub</a>
                    </li>
                    <li>
                        <FiLinkedin className="icons" />
                        <a href="https://www.linkedin.com/in/layza-nauane-dev12/" target="_blank">Linkedin</a>
                    </li>
                    <li>
                        <FiTwitter className="icons" />
                        <a href="https://twitter.com/LNauane" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <FiGlobe className="icons" />
                        <a href="https://www.instagram.com/layza.nauane/" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <HiOutlineMail className="icons" />
                        <a href="mailto: layzanauanedev@gmail.com">E-mail</a>
                    </li>
                </ul>
            </nav>

            <div className="tecnologies">
                <h3>Tecnologias</h3>
                <div className="techMain">
                   <TechIcon name="JavaScript"/>
                   <TechIcon name="ReactJS"/>
                   <TechIcon name="NodeJS"/>
                   <TechIcon name="GIT"/>
                   <TechIcon name="GitHub"/>
                   <TechIcon name="HTML"/>
                   <TechIcon name="CSS"/>
                   <TechIcon name="Elixir"/>
                   <TechIcon name="React Native"/>
                </div>
            </div>  

            <div className="experiences">
                <h3>Experiences</h3>
                <div className="list">
                    <ul>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - Atualmente <br/> <strong>
                                    Community Experience
                                </strong>
                            </span>
                        </li>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - Atualmente <br/> <strong>
                                    Community Experience
                                </strong>
                            </span>
                        </li>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - Atualmente <br/> <strong>
                                    Community Experience
                                </strong>
                            </span>
                        </li>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - Atualmente <br/> <strong>
                                    Community Experience
                                </strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="education">
                <h3>Education</h3>
                <div className="list">
                    <ul>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - 2019 <br/>
                                <strong>GoStack</strong>
                            </span>

                        </li>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - 2020 <br/>
                                <strong>Ignite</strong>
                            </span>
                        </li>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - 2021 <br/>
                                <strong>Ignite Pro</strong>
                            </span>
                        </li>
                        <li>
                            <h4>Rocketseat</h4>
                            <span>
                                2019 - 2021 <br/>
                                <strong>Ignite Pro</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>   
    </>
   ) 
}