import {Foyer} from 'app/models/foyer';

export interface Universite {
    idUniversite?: number;
    nomUniversite: string;
    adresse: string;
    ville: string;
    telephone: string;
    foyer?: Foyer; 
    
  }
  