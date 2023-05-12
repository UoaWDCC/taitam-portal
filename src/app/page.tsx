import { css } from "@linaria/core";

const styleContainer = css`
  font-family: sans-serif;
`;

export default function Home() {
  return <div className={styleContainer}>Index page</div>;
}
