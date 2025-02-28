export interface Service {
  title: string;
  image: string;
  modalTitle: string;
  modalText: string[];
  swiperText: string;
  gaSwiperText: string;
  gaServiceText: string;
}

export interface Services {
  swiperText: string;
  halfWithCount: number;
  items: Service[];
}
