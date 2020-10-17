const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
    //Inserir dados na tabela
    await saveOrphanage(db, {
        lat:"-16.728913",
        lng:"-43.850132",
        name: "Lar das meninas",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "9898998989",
        images: [
            "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours:"Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    }) 
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
   /*  const orphanage = await db.get('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage) */

    //deletar um dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))

    
})