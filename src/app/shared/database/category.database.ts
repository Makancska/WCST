import { Category } from './../model/category.model';

export const CATEGORIES: Category[] = [
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

    },
    {
        title: 'Páciensek',
        icon: 'people',
        value: 'paciens',
        url: '/homepage/paciens'
    }
];