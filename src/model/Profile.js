let data = {
  name: "Joel",
  avatar: "https://github.com/joelCatarino.png",
  "monthly-budget": 3500,
  "days-per-week": 5,
  "hours-per-day": 8,
  "vacation-per-year": 2,
  "value-hour": 100,
};

module.exports = {
  get() {
    return data;
  },
  update(newData) {
      data = newData;
  }
};