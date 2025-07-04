// get cookie
// NAME - cookie name
// used - getCookie("cookie_name")
export const getCookie = (name: string) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

// create cookie
// KEY - cookie name
// VALUE - cookie value
// MINUTES - cookie expiration time in minutes - optional
// used - getCookie("cookie_name", value, 10)
export const setCookie = ( key: string, value: string, minutes?: number): void => {
  const now = new Date();
  
  if (typeof minutes === "number") {
    now.setTime(now.getTime() + minutes * 60 * 1000);
  } else {
    now.setFullYear(now.getFullYear() + 10);
  }

  const expires = `expires=${now.toUTCString()}`;
  document.cookie = `${key}=${value}; ${expires}; path=/;`;
}

// delete cookie
// KEY - cookie name
// used - deleteCookie("cookie_name")
export const deleteCookie = (key: string): void => {
  setCookie(key, "", -1);
}