function parseDuration(value: string): number {
  const match = value.match(/^(\d+)(s|m|h|d)$/);

  if (!match) {
    throw new Error("Invalid duration format. Use s, m, h, or d");
  }

  const amount = Number(match[1]);
  const unit = match[2];

  switch (unit) {
    case "s":
      return amount;
    case "m":
      return amount * 60;
    case "h":
      return amount * 60 * 60;
    case "d":
      return amount * 60 * 60 * 24;
    default:
      throw new Error("Invalid time unit");
  }
}

export default parseDuration