import React from 'react';
import './first-react.css';
import { Row, Col } from 'antd';
import chimamanda from '../assets/chimamanda.jpg';
import chibooks1 from '../assets/Notes-on-Grief-Cover-Art-318x464-1.jpg';
import chibooks2 from '../assets/Dear-Ijeawele.jpg';
import chibooks3 from '../assets/We-Should-All-Be-Feminists.jpg';
import chibooks4 from '../assets/Americanah.jpg';


function NewStyle() {
    return (
        <div className='body'>
            <>
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={6}><div className='Head'>CHIMAMANDA NGOZI ADICHE</div></Col>
                            <Col span={12}>
                                <nav className='myNav'>
                                    <ul>
                                        <li><a href='#'>HOME<div className='underlineNav'></div></a></li>
                                        <li><a href='#'>ABOUT</a><div className='underlineNav'></div></li>
                                        <li><a href='#'>BOOKS</a><div className='underlineNav'></div></li>
                                        <li><a href='#'>MEDIA</a><div className='underlineNav'></div></li>
                                        <li><a href='#'>NEWS & EVENTS</a><div className='underlineNav'></div></li>
                                        <li><a href='#'>READ ONLINE</a><div className='underlineNav'></div></li>
                                        <li><a href='#'>CONTACT</a><div className='underlineNav'></div></li>
                                    </ul>
                                </nav>
                            </Col>
                            <Col span={6}>
                                <div className='fineContainer'>
                                    IFEMELU'S BLOG
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}><img src={chimamanda} alt='A picture of chimamanda ngozi' className='chimamanda' />
                    </Col>
                    <Col span={12}><div className='introduction'>
                        <div className='intro-inside'>
                            Chimamanda Ngozi Adichie was born in Enugu, Nigeria in 1977. She grew up on the
                            campus of the University of Nigeria, Nsukka, where her father was a professor
                            and her mother was the first female Registrar. She studied medicine for a year
                            at Nsukka and then left for the US at the age of 19 to continue her education
                            on a different path. She graduated summa cum laude from Eastern Connecticut
                            State University with a degree in Communication and Political Science.
                        </div>
                        <div className='intro-inside'>
                            She has a Master’s Degree in Creative Writing from Johns Hopkins University and
                            a Master of Arts degree in African History from Yale University. She was awarded a
                            Hodder fellowship at Princeton University for the 2005-2006 academic year, and a
                            fellowship at the Radcliffe Institute of Harvard University for the 2011-2012 academic
                            year. In 2008, she received a MacArthur Fellowship.
                        </div>
                        <div className='intro-inside'>
                            She has received honorary doctorate degrees from Eastern Connecticut State University,
                            Johns Hopkins University, Haverford College, Williams College, the University of Edinburgh,
                            Duke University, Amherst College, Bowdoin College, SOAS University of London, American
                            University, Georgetown University, Yale University, Rhode Island School of Design, and
                            Northwestern University.
                        </div>
                        <div className='intro-fine'>READ MORE</div>
                    </div>
                    </Col>
                </Row>
                <div className='bookSection'>
                    <Row>
                        <Col span={24}><h2 className='books-header'>Books</h2></Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className='chibooks1-box'>
                                <img src={chibooks1} alt='Notes on grief' className='chibooks1' />
                                <div className='overlay-b'>
                                    <div className='overlay-t'>Notes on Grief is an ... Book details</div>
                                </div>

                                <div className='chibooks1-note'>Notes on grief</div>
                            </div>
                        </Col>
                        <Col span={6} className='chibooks2-box'>
                            <img src={chibooks2} alt='Dear ijeawele' className='chibooks2' />
                            <div className='chibooks1-note'>Dear ijeawele</div>
                        </Col>
                        <Col span={6}>
                            <img src={chibooks3} alt='We should all be feminists' className='chibooks3' />
                            <div className='chibooks1-note'>We should all be feminists</div>
                        </Col>
                        <Col span={6}>
                            <img src={chibooks4} alt='Americanah' className='chibooks4' />
                            <div className='chibooks1-note'>Americanah</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><h2 className='explore'>EXPLORE MORE</h2></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={24}><h2 className='latest-news'>Latest News</h2></Col>
                    </Row>
                    <Row>
                        <Col span={8} className='news'>
                            <div className='news-h1'>African Freedom Price 2020</div>
                            <div className='news-h1-d'></div>
                            <p className='news-p1'>Chimamanda Ngozi Adichie is the long-lost, undogmatic voice
                                of liberal feminism in the 21st century. She represents the
                                success and self-image of a new generation of Africa</p>
                        </Col>
                        <Col span={8} className='news'>
                            <div className='news-h2'>Chimamanda Ngozi Adichie named on OOOM Magazine’s
                                World’s Most Inspiring People in 2019</div>
                            <div className='news-h2-d'></div>
                            <p className='news-p2'>Chimamanda Adichie has been named on OOOM Magazine’s
                                list of the World’s Most Inspiring People in 2019. Compiled by an
                                international jury, the annual list features inspire</p>
                        </Col>
                        <Col span={8} className='news'><div className='news-h3'>Chimamanda Ngozi Adichie Receives 2021 
                        Hurston/Wright Foundation’s North Star Award</div>
                            <div className='news-h3-d'></div>
                            <p className='news-p3'>Chimamanda Ngozi Adichie has been awarded the 2021
                             Hurston/Wright North Star Award. It is the foundation’s highest honor and
                              recipients are individuals whose writin</p>
                              </Col> 
                    </Row>
                    <Row>
                        <Col span={24}><h2 className='sen'>SEE ALL NEWS</h2></Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div  className='cna'><h2 className='footer'>CHIMAMANDA NGOZIE ADICHE</h2>
                            <p>© 2021 Chimamanda Ngozi Adichie | All Right Reserved

</p></div>
                            
                        </Col>
                    </Row>
                </div>

            </>
        </div>
    )
}
export default NewStyle