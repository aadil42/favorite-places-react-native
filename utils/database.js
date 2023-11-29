import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {

        database.transaction((tsx) => {
            tsx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                  )`,
                  [],
                  ()=>{
                    resolve();
                  },
                  (_,error)=>{
                    reject(error);
                  }
            );
        });
    });

    return promise;
}

export const insertPlace = (place) => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tsx) => {
            tsx.executeSql(
                `INSERT INTO PLACES (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)`,
                [
                    place.title,
                    place.imageUri,
                    place.address,
                    place.location.lat,
                    place.location.lng
                ],
                (_, result) =>  {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            )
        });
    });    
    
    return promise;
}

export const fetchPlaces = () => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tsx) => {
            tsx.executeSql('SELECT * FROM places',
            [],
            (_,result) =>  {
                // const places = [];
                // console.log(result, 'from database');
                resolve(result.rows._array);
            },
            (_, error) => {
                reject(error);
            });
        })
    });

    return promise;
}