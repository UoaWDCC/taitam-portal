import { css } from "@linaria/core";
import { Poppins } from "next/font/google";
import Button from "../(components)/Button";
import Image from "next/image";
import "../globals.scss";

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });

/* ------- headers -------*/
const title = css`
  padding: 0;
  margin: 10px 0;
  color: #f96e47;
  text-align: left;
  font-size: 96px;
`;

const h3styles = css`
  padding: 0;
  margin-top: 10px;
`;

/* ------- info sections -------*/
const container = css`
  margin: 10% 0;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const item = css`
  margin: 10px;
  padding: 10px;
  text-align: left;

  &:nth-child(1) {
    flex: 1.3;
  }

  &:nth-child(2) {
    flex: 2;
  }
`;

/* ------- image section -------*/
const imageContainer = css`
  display: grid;
  grid-template-columns: auto;
  position: relative;
  border: 1px black;
  margin: 5% 0;
`;

const bubbleImg1 = css`
  grid-row: 1;
  grid-column: 1/2;
  z-index: 1;
  padding-top: 120px;
  text-align: left;
`;

const bubbleImg2 = css`
  grid-row: 1;
  grid-column: 1/2;
  z-index: 1;
  text-align: center;
  padding-right: 5%;
  padding-top: 20px;
`;

const bubbleImg3 = css`
  grid-row: 1;
  grid-column: 1/2;
  z-index: 1;
  padding-top: 120px;
  text-align: right;
`;

const text1 = css`
  width: 20%;
  grid-row: 1;
  grid-column: 1/2;
  z-index: 1;
  padding-top: 190px;
  padding-left: 70px;
  text-align: center;
`;

const text2 = css`
  width: 25%;
  grid-row: 1;
  grid-column: 1/2;
  z-index: 1;
  padding-right: 50%;
  padding-left: 35%;
  padding-top: 6%;
  text-align: center;
`;

const text3 = css`
  width: 21%;
  grid-row: 1;
  grid-column: 1/2;
  z-index: 1;
  padding-top: 15%;
  padding-left: 70%;
  text-align: center;
`;

const image = css`
  grid-row: 1;
  grid-column: 1/2;
  text-align: center;
  padding-top: 300px;
`;

/* ------- bullet point section -------*/
const box = css`
  padding: 30px;
  margin: 100px 0;
  flex: 1;
  outline: 1px solid black;
  background: white;
  box-shadow: 0px 3px 0px 2px #000000;
`;

const listheading = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const listindividual = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  margin: 0.5rem;
  font-size: 16px;
  width: 100%;

  &:before {
    counter-increment: list-item;
    content: counter(list-item) ".";
    font-size: 96px;
    font-weight: 700;
  }

  &:nth-child(1):before {
    color: #f96e47;
    margin-right: 22px;
  }

  &:nth-child(2):before {
    color: #ffcc01;
    margin-right: 6px;
  }

  &:nth-child(3):before {
    color: #e992d7;
  }
`;

/* ------- contact us -------*/
const button = css`
  display: block;
  margin: 0 auto;
  text-align: center;
  background-color: #ffcc01;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 19px;
  line-height: 24px;
  width: 35%;
  border: none;
  box-shadow: 0px 2px 0px 1px #000000;
`;

const rootContainer = css`
  max-width: 1200px;
  margin: 50px auto 100px auto;
`;

export default function AboutPage() {
  return (
    <div className={rootContainer}>
      <h1 className={title}>OUR STORY</h1>
      <h3 className={h3styles}>
        Our Mission: Empowering Students to Succeed in the Tech Industry
      </h3>

      <div className={imageContainer}>
        <div className={bubbleImg1}>
          <Image
            src={"/cloudText.png"}
            width={363}
            height={308}
            alt={"cloud bubble text"}
          />
        </div>
        <div className={text1}>
          <p>
            It feels like the tech industry is constantly changing. Will my
            university coursework be enough to keep up with the latest trends
            and technologies?
          </p>
        </div>
        <div className={bubbleImg2}>
          <Image
            src={"/roundText.png"}
            width={400}
            height={282}
            alt={"round bubble text"}
          />
        </div>
        <div className={text2}>
          <p>
            I have spent years learning technical skills in school, but what about
            the soft skills that employers are looking for? Will I be able to
            find a job after graduation?
          </p>
        </div>
        <div className={bubbleImg3}>
          <Image
            src={"/spikyText.png"}
            width={420}
            height={320}
            alt={"spiky bubble text"}
          />
        </div>
        <div className={text3}>
          <p>
            I am just starting out my career, but it seems like recruitment
            agencies only want people with years of experience. How am I
            supposed to get my foot in the door?
          </p>
        </div>
        <div className={image}>
          <Image src={"/maze.png"} width={694} height={512} alt={"maze"} />
        </div>
      </div>

      <div className={container}>
        <div className={item}>
          <h1 className={title}>FOR THE LAST 10 YEARS...</h1>
        </div>
        <div className={item}>
          <p>
            For the last ten years, we’ve been heavily involved with local
            universities and higher institutions, not only through our annual
            Computer Science Scholarship, but also through various sponsorships
            with local university clubs and societies such as DEVS, the Data
            Science Club and the WDCC. While these initiatives have done an
            amazing job at helping to influence, direct and guide students into
            New Zealand’s tech sector, it was never going to be enough.
          </p>
        </div>
      </div>

      <div className={box}>
        <h3 className={h3styles} style={{ textAlign: "center" }}>
          Over the years, three key issues have been repeatedly raised by
          students and employers:
        </h3>
        <ol className={listheading}>
          <li className={listindividual}>
            While universities and high institutions do a great job in getting
            students up to speed with technical skills, student employability is
            often lacking at graduation – particularly around the soft skills
            that modern Kiwi employers are looking for.
          </li>
          <li className={listindividual}>
            In a sector that is constantly evolving, keeping coursework
            contemporary is almost impossible. Listening to hiring managers,
            while they respect university learnings, by the time new programs
            and papers are accredited, they’re often already out of date.
          </li>
          <li className={listindividual}>
            Too often, students coming out of university feel like they are
            completely ignored by recruitment agencies – purely because they
            aren’t as monetizable as someone with a few years’ experience under
            their belt.
          </li>
        </ol>
      </div>

      <div className={container} style={{ marginBottom: "0" }}>
        <div className={item}>
          <h3
            className={h3styles}
            style={{ textAlign: "right", paddingBottom: "15px" }}
          >
            How do we go about bridging the gap between university and
            employment?
          </h3>
        </div>
        <div className={item}>
          <p>
            Together, these issues have created one overarching challenge. To
            tackle this, we’d need to go about things in a way that the
            recruitment world has never seen. This meant supporting and
            investing in our student communities – empowering young people to
            navigate the challenges associated with breaking into Aotearoa’s
            tech sector. No other motives, no short term gains...for us, it is
            all about supporting a disenfranchised community that is so critical
            to the future success of our sector. And that is how Taitamariki
            Potentia was born...
          </p>
        </div>
      </div>
      <div className={poppinsMedium.className}>
        <Button
          text="Contact Us"
          href="/contact"
          type="primary"
          width="largeButton"
        ></Button>
      </div>
    </div>
  );
}
