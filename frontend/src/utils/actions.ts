export const deleteContact = async (name: string, phone: string) => {
  const bodyData = JSON.stringify({name, phone});
  await fetch("https://contacts-09i3.onrender.com/contact-delete", {method: "DELETE", body: bodyData});
}
