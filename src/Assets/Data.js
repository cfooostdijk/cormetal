import hero1 from './hero1.jpg'
import hero2 from './hero2.png'
import hero3 from './hero3.png'

import welding from './welding.png'
import cutting from './cutting.png'
import bending from './bending.png'
import punching from './punching.png'
import engineer from './engineer.png'
import plasma from './plasma.png'

import iconwelding from './welding.svg'
import iconcutting from './cutting.svg'
import iconbending from './bending.svg'
import iconpunching from './punching.svg'
import iconengineer from './engineer.svg'
import iconplasma from './plasma.svg'

import cargill from './cargill.png'
import moreno from './moreno.png'
import sitiocero from './sitiocero.png'
import puertoqqn from './puertoqqn.png'
import renova from './renova.png'
import terminal from './terminal.png'


export const categoriesData = {
  categories: [
    {
      name: "Quienes somos?",
      subname1: 'Nostros',
      subname2: 'Nuestro origen',
      route: "Us"
    },
    {
      name: "Que hacemos?",
      subname1: 'Servicios',
      subname2: 'Productos',
      route: "Services"
    },
    {
      name: "Clientes?",
      subname1: 'Campo',
      subname2: 'Puerto',
      route: "Clients"
    },
    {
      name: "Galeria",
      subname1: 'Campo',
      subname2: 'Puerto',
      route: "Gallery"
    },
    {
      name: "Contactenos",
      route: "ContactUs"
    }
  ]
}

export const servicesData = {
  services: [
    {
      name: "Soldaduras",
      paragraph: 'Soldaduras',
      image: welding,
      icon: iconwelding
    },
    {
      name: "Corte",
      paragraph: 'Corte',
      image: cutting,
      icon: iconcutting
    },
    {
      name: "Plegado",
      paragraph: 'Plegado',
      image: bending,
      icon: iconbending
    },
    {
      name: "Punzonado",
      paragraph: 'Punzonado',
      image: punching,
      icon: iconpunching
    },
    {
      name: "Ingenieria",
      paragraph: 'Ingenieria',
      image: engineer,
      icon: iconengineer
    },
    {
      name: "Plasma",
      paragraph: 'Plasma',
      image: plasma,
      icon: iconplasma
    }
  ]
}

export const clientsData = [
  {
    name: "Cargill",
    image: cargill
  },
  {
    name: "SitioCero",
    image: sitiocero
  },
  {
    name: "Puerto",
    image: puertoqqn
  },
  {
    name: "Renova",
    image: renova
  },
  {
    name: "Moreno",
    image: moreno
  },
  {
    name: "Terminal",
    image: terminal
  }
]

export const herosData = [
  {
    name: "Hero1",
    image: hero1,
    title: "Somos Fabricantes, somos Diseñadores, somos Cormetal"
  },
  {
    name: "Hero2",
    image: hero2,
    title: "Para el Agro, para el Puerto, para la Industria"
  },
  {
    name: "Hero3",
    image: hero3,
    title: "Por las innovaciones que tanto nos apasionan"
  }
]
