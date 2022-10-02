const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connection established')
    } catch (e) {
        console.error(e)
    } finally {
        await client.close();
    }
}

main();