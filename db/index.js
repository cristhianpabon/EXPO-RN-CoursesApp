import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('courses0.db');

export const init = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS courses (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, createdBy TEXT NOT NULL, isAdded INTEGER NOT NULL, isWished INTEGER NOT NULL);",
            [],
            () => resolve(),
            (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const insertCourse = (title, image, createdBy, isAdded, isWished) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO courses (title, image, createdBy, isAdded, isWished) values (?, ?, ?, ?, ?);",
                [title, image, createdBy, isAdded, isWished],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
} 

export const fetchCourses = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM courses;",
                [],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}

export const fetchCourseByTitle = (title) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `SELECT * FROM courses WHERE title = ?`,
                [title],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}

export const deleteCourse = (id) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            console.log(id);
            tx.executeSql(
                "DELETE FROM courses WHERE id = ?",
                [id],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}