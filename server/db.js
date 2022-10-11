const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const ConnectDB = async () => {
    try {
        await client.connect();
        console.log('Connection established');
    } catch (e) {
        console.error(e);
    }
}

const ActionsDB = async (db, collection, action, query) => {
    try {
        const database = client.db(db);
        let docs = database.collection(collection).find(query).toArray();
        return docs;
    } catch (e) {
        console.log(e);
    };
};

exports.ConnectDB = ConnectDB()
exports.ActionsDB = ActionsDB();

module.exports = ConnectDB;
module.exports = ActionsDB;

