export default class Base {
  async run(params) {
    const clean = await this.validate(params);
    return this.execute(clean);
  }
}
