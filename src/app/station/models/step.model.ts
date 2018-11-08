import { Beacon } from './beacon.model';
import { Cap } from './cap.model';


export class Step {
    public place: string; // Lieu sur lequel se trouve le step
    public beacon: Beacon; // Balise du step courant
    public placesCaps: Array<Cap>; // Tableau contenant les directions vers les destinations possibles
    public beaconsCaps: Array<Cap>; // Tableau contenant les directions vers les balises à proximité immédiate

    constructor() { }
}


/* Exemple d'instense

let myStep: Step;

myStep.place = "Quai C";

myStep.beacon = {uuid: '4242424242424242', major: '3', minor: '31};

myStep.placesCaps = [
{direction: '1', item: ''},
{direction: '2', item: ''},
{direction: '3', item: ''},
{direction: '4', item: '' },
{direction: '5', item: '' },
{direction: '6', item: '' },
{direction: '7', item: ''},
{direction: '8', item: ''},
{direction: '9', item: ''},
{direction: '10', item: ''},
{direction: '11', item: ''},
{direction: '12', item:
    [
        {id: '0', name: 'Quai A'},
        {id: '1', name: 'Quai B'},
        {id: '3', name: 'Quai D'},
        {id: '4', name: 'Quai E'},
        {id: '5', name: 'Quai F'}
    ]}
];

myStep.beaconsCaps = [
{direction: '1', item: ''},
{direction: '2', item: ''},
{direction: '3', item: ''},
{direction: '4', item: ''},
{direction: '5', item: ''},
{direction: '6', item: {uuid: '4242424242424242', major: '3', minor: '30'}},
{direction: '7', item: ''},
{direction: '8', item: ''},
{direction: '9', item: ''},
{direction: '10', item: ''},
{direction: '11', item: ''},
{direction: '12', item: {uuid: '4242424242424242', major: '3', minor: '32'}}
];



*/