import { css } from "@linaria/core";
import { Poppins } from "next/font/google";
import Button from "../(components)/Button";
import "../globals.scss";

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });


/* ------- headers -------*/
const title = css`
  padding: 0;
  margin: 10px 0;
  color: #f96e47;
  text-align: left;
  font-size: 96px;

  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 7vw;
  }
`;

const h3styles = css`
  padding: 0;
  margin-top: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const subheader = css`
  padding: 0;
  margin-top: 10px;
  text-align: right;
  padding-bottom: 15px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 0;
  }
`;

/* ------- info sections -------*/
const container = css`
  margin: 10% 0;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 0;
  }
`;

const item = css`
  margin: 10px;
  padding: 10px;
  text-align: left;

  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: 5px 5px 0px 5px;
    text-align: left;
    height: 100%;
    font-size: 14px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    padding: 0;
    margin: 5px 5px 0px 5px;
    height: 100%;
  }

  &:nth-child(1) {
    flex: 1.3;

    @media (min-width: 600px) and (max-width: 1024px) {
      padding-right: 15px;
    }
  }

  &:nth-child(2) {
    flex: 2;

    @media only screen and (max-width: 600px) {
      margin-bottom: 10px;
    }

    @media (min-width: 600px) and (max-width: 1024px) {
      font-size: 14px;
      line-height: 2vw;
      padding-bottom: 10px;
    }
  }
`;

/* ------- image section -------*/
const image = css`

  background-image: url("/about.svg");
  width: 100%;
  height: 60vw;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    background-image: url('/aboutMobile.svg');
    width: 100%;
    height: 120vw;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

/* ------- bullet point section -------*/
const box = css`
  padding: 30px;
  margin: 100px 0;
  flex: 1;
  outline: 1px solid black;
  background: white;
  box-shadow: 0px 3px 0px 2px #000000;

  @media only screen and (max-width: 600px) {
    margin: 60px 10px;
    padding: 10px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    margin: 10px;
    padding: 10px;
  }
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

  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: 1rem;
    font-size: 14px;
    line-height: 1.5rem;
    gap: 0.3rem;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 14px;
  }

  &:before {
    counter-increment: list-item;
    content: counter(list-item) ".";
    font-size: 96px;
    font-weight: 700;

    @media only screen and (max-width: 600px) {
    font-size: 75px;
  }

    @media (min-width: 600px) and (max-width: 1024px) {
      font-size: 80px;
    }
  }

  &:nth-child(1):before {
    color: #f96e47;
    margin-right: 22px;

    @media (min-width: 600px) and (max-width: 1024px) {
      margin-right: 4px;
    }
  }

  &:nth-child(2):before {
    color: #ffcc01;
    margin-right: 6px;
  }

  &:nth-child(3):before {
    color: #e992d7;

    @media only screen and (max-width: 600px) {
      margin-right: 5px;
    }

    @media (min-width: 600px) and (max-width: 1024px) {
      margin-right: 4px;
    }
  }
`;

const rootContainer = css`
  max-width: 1200px;
  margin: 50px auto 100px auto;
  padding: 0 50px;

  @media only screen and (max-width: 600px) {
    margin: 10px;
    max-width: 600px;
    padding: 0
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    margin: 10px;
    max-width: 1024px;
    padding: 0 20px;
  }
`;

export default function AboutPage() {
  return (
    <div className={rootContainer}>
      <h1 className={title}>OUR STORY</h1>
      <h3 className={h3styles}>
        Our Mission: Empowering Students to Succeed in the Tech Industry
      </h3>

      <div className={image}></div>

      <div className={container}>
        <div className={item}>
          <h1 className={title}>FOR THE LAST 10 YEARS...</h1>
        </div>
        <div className={item}>
          <p style={{margin: "0"}}>
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
          <h3 className={subheader}>
            How do we go about bridging the gap between university and
            employment?
          </h3>
        </div>
        <div className={item}>
          <p style={{margin: "0"}}>
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
