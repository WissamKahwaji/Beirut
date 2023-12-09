export type ContactUsInfo = {
  _id: string;
  img: string;
  title: string;
  description: string;
  content: Content[];
  __v: number;
};

export type Content = {
  _id: string;
  img: string;
  title: string;
  text: string;
};
