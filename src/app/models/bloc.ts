import { Foyer } from 'app/models/foyer'; 
import { Chambre } from 'app/models/chambre'; 
export class Bloc {
    idBloc: number;
    nomBloc: string;
    capaciteBloc: number;
    foyer?: Foyer; 
    chambres?: Chambre[]; }
    