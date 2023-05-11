import {css} from "@linaria/core";
import {Poppins} from 'next/font/google';

import Image from 'next/image';
import stockImg1 from "./events1.png";
import heart from "./heart.png";

const body = css`
  font-family: sans-serif;
  background-color: #FFF;
  padding: 100px 160px;
`;

const poppinsBlack = Poppins({weight: "900", subsets: ['latin']});
const poppinsMedium = Poppins({weight: "500", subsets: ['latin']});
const poppinsRegular = Poppins({weight: "400", subsets: ['latin']});
const poppinsLight = Poppins({weight: "300", subsets: ['latin']});


export default function Home() {
    return (
        <div className={poppinsLight.className} style={{padding: '100px 160px', backgroundColor: '#FFFDF6'}}>
            <div className={poppinsBlack.className} style={{fontSize: 96 + 'pt', color: '#F96E47'}}>OUR EVENTS</div>
            <div style={{fontSize: 16 + 'pt', marginBottom: '25px'}}>
                We regularly host meetups and events in Auckland, providing a vibrant and diverse community for students
                of all backgrounds who are studying technical disciplines. Our events offer direct access to resources,
                connections, and advice that can help you take your next career step. Whether you're looking to connect
                with experienced tech professionals, employers, or recruiters, or simply want to meet other students
                facing similar challenges, we have something for everyone.
            </div>
            <div style={{
                border: "solid black 1px",
                boxShadow: "0 3px 0 4px",
                display: "grid",
                gridTemplateColumns: "53% 47%",
                gridTemplateRows: "auto",
                backgroundColor: "white",
                margin: "50px 0"
            }}>
                <div style={{
                    margin: "auto 0",
                    gridColumnStart: "1",
                    width: "100%",
                    position: "relative",
                    paddingTop: "50.7%"
                }}>
                    <Image
                        src={stockImg1}
                        alt="Stockholder image 1"
                        fill={true}/>
                </div>
                <div style={{gridColumnStart: "2", margin: "20px 25px", position: "relative"}}>
                    <p className={poppinsMedium.className}
                       style={{margin: "0", fontSize: "16pt"}}>
                        Launch Your Tech Career at Our Career Fair
                    </p>
                    <p className={poppinsRegular.className}
                       style={{margin: "5px 0", fontSize: "12pt", color: "#056DFA"}}>
                        30 APR 6pm @ OGGB Building, UOA
                    </p>
                    <p style={{lineHeight: "30px"}}>
                        Connect with top employers, recruiters, and other talented students at our annual Tech Career
                        Fair. Explore job opportunities, receive professional CV advice, and network with industry
                        leaders.
                    </p>
                    <div style={{position: "absolute", bottom: "0", width: "100%"}}>
                        <div className={poppinsMedium.className}
                             style={{
                                 float: "left",
                                 backgroundColor: "#FFCC01",
                                 boxShadow: "0 2px 0 1px",
                                 width: "137px",
                                 height: "40px",
                                 borderRadius: "20px",
                                 fontSize: "19px",
                                 textAlign: "center",
                             }}><p style={{margin: "8px 0"}}>Sign Up</p>
                        </div>
                        <div className={poppinsMedium.className} style={{float: "right", margin: "4px 0"}}>
                            <Image src={heart} alt="heart"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
