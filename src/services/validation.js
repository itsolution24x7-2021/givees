/* eslint-disable no-useless-escape */
export const nameRegex = /^[a-zA-Z]+$/;
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const NameRegex = /^[0-9]{4,6}$/;
export const phoneRegex = /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{6})$/;
export const reqTitleRegex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{8,70}$/;
export const reqDespRegex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{20,}$/;
export const reqPriceRegex = /^[1-9]\d*(\.\d+)?$/;
export const reqTagsRegex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{2,}$/;
export const contactRegex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{3,120}$/;
export const contact2Regex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{3,120}$/;

  export function validate(value, regex, message) {
    if (value === '' || value == null || String(() => value.trim()) === '') {
      return 'This field is requried';
    } else {
      if (regex.test(value)) {
        return null;
      } else {
        return message;
      }
    }
  }
