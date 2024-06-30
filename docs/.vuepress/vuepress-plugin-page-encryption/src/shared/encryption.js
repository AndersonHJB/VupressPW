export const validatePassword = (passwords, inputPassword) => {
    const currentDate = new Date();
    for (const pwd of passwords) {
      if (pwd.value === inputPassword && (pwd.expiry === -1 || new Date(pwd.expiry) > currentDate)) {
        return true;
      }
    }
    return false;
  };
  