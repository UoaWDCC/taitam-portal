import {Poppins} from 'next/font/google';
import heart from "../images/heart.svg";
import React from 'react';
import Image, {StaticImageData} from "next/image";

type CardProps = {
    title: string,
    date: string,
    paragraph: string,
    image: StaticImageData
}
 
const poppinsMedium = Poppins({weight: "500", subsets: ['latin']});
const poppinsRegular = Poppins({weight: "400", subsets: ['latin']});

export const Card = ({ title, date, paragraph, image }: CardProps) => <aside>
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
                src={image}
                alt="Stockholder image 1"
                fill={true}/>
        </div>
        <div style={{gridColumnStart: "2", margin: "20px 25px", position: "relative"}}>
            <p className={poppinsMedium.className}
               style={{margin: "0", fontSize: "16pt"}}>
                {title}
            </p>
            <p className={poppinsRegular.className}
               style={{margin: "5px 0", fontSize: "12pt", color: "#056DFA"}}>
                {date}
            </p>
            <p style={{lineHeight: "30px"}}>
                {paragraph}
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
</aside>