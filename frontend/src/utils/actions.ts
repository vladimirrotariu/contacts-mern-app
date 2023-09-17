export const deleteContact = async (id: string) => {
  await fetch("https://contacts-09i3.onrender.com/contact-delete", {method: "DELETE", body: id});
}
