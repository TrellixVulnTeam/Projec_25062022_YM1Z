export interface IBookInfo {
  id: number;
  bookName:string;
  writerName:string;
  coverURL:string;
  price:any;

}

export class BookInfo implements IBookInfo {
  id: number;
  bookName:string;
  writerName:string;
  coverURL:string;
  price:any;
}
