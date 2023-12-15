import {Bloc} from "./bloc";
import {Reservation} from "./reservation";
import {Image} from "./Image";


export interface Chambre {
    idChambre?: number;
    numeroChambre?: number;
    typeC?: string;
    bloc?: Bloc;
    reservations?: Reservation[];
    imagebyte? : string ;
    image?: Image | null;

}