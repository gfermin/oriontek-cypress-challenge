import dayjs from "dayjs";

/**
 * Data Builder para strings dinámicos.
 * Evita inputs estáticos y centraliza el formato.
 */

export class TextBuilder {
  constructor() {
    this._prefix = "Automated text";
    this._stampFormat = "DD-MM-YYY HH:mm:ss";
  }

  withPrefix(prefix) {
    this._prefix = prefix;
    return this;
  }

  withStampFormat(format) {
    this._stampFormat = format;
    return this;
  }

  build() {
    const stamp = dayjs().format(this._stampFormat);
    return {
      text: `${this._prefix} - ${stamp}`,
    };
  }
}
