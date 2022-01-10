let data = [
  {
    id: 1,
    name: "Pizzaria Freddy Fazbear",
    "daily-hours": 2,
    "total-hours": 2,
    created_at: Date.now(),
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 5,
    "total-hours": 40,
    created_at: Date.now(),
  },
];

module.exports = {
  get() {
    return data;
  },
  update(newJob) {
    data = newJob;
  },
  delete(id) {
    data = data.filter((job) => Number(job.id) !== Number(id));
  },
};