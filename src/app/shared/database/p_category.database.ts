import { Category } from './../model/category.model';

export const PCATEGORIES: Category[] = [
    {
        title: 'Doktorok',
        icon: 'person',
        value: 'orvos',
        url: '/homepage/orvos'
    },
    {
        title: 'Teszt',
        icon: 'edit',
        value: 'teszt',
        url: '/homepage/wcst'
    },
    {
        title: 'Teszteredmények',
        icon: 'class',
        value: 'eredmeny',
        url: '/homepage/eredmeny'

    }
];