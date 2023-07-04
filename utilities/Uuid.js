export function uuid() {
  let d = new Date().toLocaleString();
  const id = d.replace(/\D/g, "");
  return id;
}
