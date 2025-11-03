export const maskPassword = (password: string) => {
    let add = "";
    for (let i = 0; i < password.length; i++) {
      add += "•";
    }
    return add;
  };
