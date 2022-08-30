export interface Help {
    id: number;
    title: string;
    description: string;
    image: string
}

export interface Ejercicio {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  nivel: number
}

export interface Medicamento {
  id: number;
  nombre: string;
  composicion: string
}

export interface Documento {
  id: number;
  nombre: string;
  id_user: string;
  url: string
}

export interface Usuario {
  id?: string;
  nombre: string;
  apellido: string;
  imagen: string;
  edad: number;
  sexo: string;
  email: string
}

export interface Evento {
  id?: number;
  title: string;
  start: Date;
  description: string;
}

export interface User_event {
  id?: number;
  id_user: string;
  id_event: number;
}

export interface User_medicamento {
  id?: number;
  id_user: string;
  id_medicamento: number;
}
