import {Poppins} from 'next/font/google';
import {Card} from "@/app/components/bigCard";
import stockImg1 from "./images/events1.png";
import stockImg2 from "./images/events2.png";
import stockImg3 from "./images/events3.png";

const poppinsBlack = Poppins({weight: "900", subsets: ['latin']});
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
            <Card title={"Launch Your Tech Career at Our Career Fair"} 
                  date={"30 APR 6pm @ OGGB Building, UOA"}
                  paragraph={"Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."}
                  image={stockImg1}/>
            <Card title={"Launch Your Tech Career at Our Career Fair"} 
                  date={"30 APR 6pm @ OGGB Building, UOA"}
                  paragraph={"Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."}
                  image={stockImg2}/>
            <Card title={"Launch Your Tech Career at Our Career Fair"} 
                  date={"30 APR 6pm @ OGGB Building, UOA"}
                  paragraph={"Connect with top employers, recruiters, and other talented students at our annual Tech Career Fair. Explore job opportunities, receive professional CV advice, and network with industry leaders."}
                  image={stockImg3}/>
        </div>
    );
}
