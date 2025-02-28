export const sendDataToGAWithoutContacts = async (
  payload: Record<string, number>,
) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbyYwROw23A-n-Z6SKG9Ek7Krw3fiLglDP2SNQAU3V8S7hIxmAkxgGgQO_GIGk4A71OX/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, ...payload }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};

export const sendDataToGAWithContacts = async (
  payload: Record<string, number | string>,
) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbyv4di4SLA8cZDaCwxj_5ys3J_N4tuvuWFyl_apI-WUu2YDvSRWL6eLnVrINAkEGuucuA/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, ...payload }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
