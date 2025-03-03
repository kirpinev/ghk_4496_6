export const sendDataToGA = async (payload: Record<string, number>) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbzfy2ZzsVIj44KH79ePdsWgvWLbu5Hc4bR2q7HXyC-FOpUCEGqnrbAvU_mhH-S4Isa25g/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, variant: "var6", ...payload }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
