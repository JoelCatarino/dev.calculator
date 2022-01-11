const Profile = require("../model/Profile");

module.exports = {
  async index(req, res) {
    return res.render("profile", { profile: await Profile.get() });
  },

  async update(req, res) {
    // req.body para pegar os dados
    const data = req.body;
    // definir qnts semanas tem num ano
    const weeksPerYear = 52;
    // remover das semanas de ferias do ano para pegar qnts semanas tem em 1 ano
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;
    // total de horas trabalhadas no mes
    const weekTotalHours  = data["days-per-week"] * data["hours-per-day"];
    // horas trabalhadas no mes
    const monthlyTotalHours = weekTotalHours * weeksPerMonth
    // qual sera o valor da minha hora?
    const valueHour = data["monthly-budget"] / monthlyTotalHours;

    const profile = await Profile.get();

    Profile.update({
      ... profile,
      ...req.body,
      "value-hour": valueHour
    });

    return res.redirect("/profile");
  },
};
