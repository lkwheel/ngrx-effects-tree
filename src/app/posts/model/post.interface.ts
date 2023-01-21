export interface PostInterface {
  id: string;
  title: string;
  children?: PostInterface[];
  url?: string;
}
