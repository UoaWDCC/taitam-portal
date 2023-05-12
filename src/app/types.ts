export interface ButtonInterface {
  text: string;
  type: string;
  href: string;
  width: string;
}

export interface CardInterface {
  title: string;
  imageUrl: string;
  body: string;
  btn: ButtonInterface;
}
