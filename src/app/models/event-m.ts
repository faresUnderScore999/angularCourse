/**
 * Event domain model: the shape of every event in the catalogue.
 */
export interface eventM {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  price: number;
  nbPlaces: number;
}