const Database = require("./config");
// await é para o JS terminar de rodar uma coisa p depois outra

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
        )`);

    await db.exec(`CREATE TABLE jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            created_at DATETIME
        )`);

    await db.run(`
        INSERT INTO profile (
            id,
            name,
            avatar, 
            monthly_budget,
            days_per_week, 
            hours_per_day, 
            vacation_per_year,
            value_hour
        ) VALUES (
            1,
            "Joel",
            "https://github.com/joelCatarino.png",
            3500,
            5,
            8,
            2,
            100
        );
        `);

    await db.run(`
        INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "Pizzaria Freddy Fazbear",
            2,
            2,
            1617514376018
        );
        `);

    await db.run(`
        INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "OneTwo Project",
            5,
            40,
            1617514376018
        );
        `);
    await db.close();
  },
};

initDb.init();