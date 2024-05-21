const { Firestore } = require('@google-cloud/firestore');

async function getHistories() {
    const db = new Firestore();

    return new Promise((resolve, reject) => {
        db.collection('Predictions').get()
            .then(snapshot => {
                const data = [];
                snapshot.forEach(document => {
                    data.push({ id: document.id, history: { ...document.data() } });
                });
                resolve(data);
            })
            .catch(error => {
                console.error('Gagal mendapatkan riwayat: ', error);
                reject(error);
            });
    });
}

module.exports = getHistories;