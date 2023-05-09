import welder from './welder.png'
import corte from './corte.png'
import plegado from './plegado.png'
import punzonado from './punzonado.png'
import ingenieria from './ingenieria.png'
import plasma from './plasma.png'

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
      image: welder
    },
    {
      name: "Corte",
      paragraph: 'Corte',
      image: corte
    },
    {
      name: "Plegado",
      paragraph: 'Plegado',
      image: plegado
    },
    {
      name: "Punzonado",
      paragraph: 'Punzonado',
      image: punzonado
    },
    {
      name: "Ingenieria",
      paragraph: 'Ingenieria',
      image: ingenieria
    },
    {
      name: "Plasma",
      paragraph: 'Plasma',
      image: plasma
    }
  ]
}
