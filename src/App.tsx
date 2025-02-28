import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import React, { useState } from "react";
import car from "./assets/car.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { StatusBadge } from "@alfalab/core-components/status-badge";
import { Grid } from "@alfalab/core-components/grid";

interface Service {
  name: string;
  descriptions: string[];
}

interface Category {
  name: string;
  services: Service[];
}

const one: Category = {
  name: "Обслуживание авто",
  services: [
    {
      name: "Сервис “Заправки”",
      descriptions: ["Поиск и оплата заправок в два клика с кэшбэком от банка"],
    },
    {
      name: "Запись на шиномонтаж",
      descriptions: ["Поможем найти, выбрать и записаться на шиномонтаж"],
    },
    {
      name: "Вызов эвакуатора",
      descriptions: ["Поможем перевезти ваш авто в любую точку по городу"],
    },
    {
      name: "Запись в автосервис",
      descriptions: ["Поможем найти, выбрать и записаться в автосервис"],
    },
  ],
};

const two: Category = {
  name: "Контроль расходов",
  services: [
    {
      name: "Календарь событий",
      descriptions: [
        "Все напоминания об обслуживании, страховках и покупках в одном месте",
      ],
    },
    {
      name: "Оспорить штраф ГАИ",
      descriptions: ["Поможем оспорить штраф ГАИ, с которым вы не согласны"],
    },
    {
      name: "Продлить страховку",
      descriptions: ["Продлить страховку по лучшим условиям за два клика"],
    },
    {
      name: "Кэшбэк от партнеров",
      descriptions: [
        "Компании партнеры с повышенным кэшбэком от банка на авто-товары",
      ],
    },
  ],
};

const three: Category = {
  name: "Покупка и продажа авто",
  services: [
    {
      name: "Оценка стоимости",
      descriptions: [
        "Следите за изменением рыночной стоимости вашего автомобиля",
      ],
    },
    {
      name: "Покупка авто",
      descriptions: ["Поможем найти, подобрать и купить новый автомобиль"],
    },
    {
      name: "Заявка на авто-кредит",
      descriptions: ["Узнать условия и подать заявку на авто-кредит"],
    },
  ],
};

const variants: Array<Category> = [three, two, one];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const toggleService = (service: Service) => {
    const find = selectedServices.find(
      (savedService) => savedService.name === service.name,
    );

    if (find) {
      setSelectedServices([
        ...selectedServices.filter(
          (savedService) => savedService.name !== service.name,
        ),
      ]);
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
            style={{ padding: "0 1rem" }}
          >
            Сервисы для вашего авто
          </Typography.TitleResponsive>
          <Typography.Text view="primary-large" color="secondary">
            Выберите сервисы, которые помогут заботиться о вашей машине и делать
            поездки комфортнее.
          </Typography.Text>
          <img src={car} alt="Картинка машины" />
        </div>

        <Gap size={8} />

        <div>
          {variants.map((variant, index, array) => {
            return (
              <React.Fragment key={variant.name}>
                {/*<Typography.Text view="primary-large" weight="bold">*/}
                {/*  {variant.name}*/}
                {/*</Typography.Text>*/}
                <Typography.TitleResponsive
                  tag="h3"
                  view="small"
                  font="system"
                  weight="bold"
                >
                  {variant.name}
                </Typography.TitleResponsive>
                <Gap size={16} />
                <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
                  {variant.services.map((service, index) => {
                    return (
                      <Grid.Col width="6" key={index} className={appSt.gridRow}>
                        <div
                          className={appSt.product}
                          onClick={() => {
                            toggleService(service);
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "8px",
                              gap: "0.4rem",
                              height: "85px",
                              position: "relative",
                            }}
                          >
                            <Typography.Text
                              view="primary-medium"
                              weight="bold"
                              style={{ flex: 1 }}
                            >
                              {service.name}
                            </Typography.Text>
                            <div className={appSt.selection}></div>
                            {selectedServices.find(
                              (savedService) =>
                                savedService.name === service.name,
                            ) && (
                              <StatusBadge
                                view="positive-checkmark"
                                className={appSt.statusBadge}
                              />
                            )}
                          </div>

                          <div
                            style={{
                              backgroundColor: "#F8F8F8",
                              padding: "8px",
                              borderRadius: "1rem",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.4rem",
                            }}
                          >
                            {service.descriptions.map((description) => {
                              return (
                                <Typography.Text
                                  view="primary-small"
                                  key={description}
                                >
                                  {description}
                                </Typography.Text>
                              );
                            })}
                          </div>
                        </div>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
                {array.length - 1 !== index && <Gap size={16} />}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          disabled={selectedServices.length === 0}
          block
          view="primary"
          onClick={submit}
        >
          Добавить
        </ButtonMobile>
      </div>
    </>
  );
};
