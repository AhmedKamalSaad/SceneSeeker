export interface Data {
  total_pages: number;
  results: Result[];
}
export interface Result {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date:string
  overview:string
  original_title:string

}
