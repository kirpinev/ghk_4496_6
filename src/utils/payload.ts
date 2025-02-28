import { Service } from "../types.ts";

export const preparePayload = (selectedItems: Array<Service | null>) =>
  selectedItems.reduce((acc: { [key: string]: string }, curr) => {
    const service = curr as Service;

    if (!acc[service.gaSwiperText]) {
      acc[service.gaSwiperText] = `${service.gaServiceText}`;
    } else {
      acc[service.gaSwiperText] =
        acc[service.gaSwiperText] + `, ${service.gaServiceText}`;
    }

    return acc;
  }, {});
