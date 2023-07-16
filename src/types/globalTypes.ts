export type IReview = {
  message?: string;
};

export type IBookList = {
  category: string;
  paragrap: string;
  title: string;
  bookPhoto : string;
  language : string;
  author: string;
  genre: string;
  publicationDate?: Date;
  userEmail: string;
  userPhoto?: string;
  year: string;
  review?: IReview[];
  like ?: string;
};

export type reviewType ={
  message : string
}