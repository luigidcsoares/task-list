export function loadLocalData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
