export const valPass = {
  upper: new RegExp(/(?=.*?[A-Z])/),
  lower: new RegExp(/(?=.*?[a-z])/),
  digit: new RegExp(/(?=.*?[0-9])/),
  special: new RegExp(/(?=.*?[#?!@$%^&*-])/),
  length: new RegExp(/.{8,}$/),
}

export const valEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)