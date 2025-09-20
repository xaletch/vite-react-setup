// import { factory, primaryKey } from '@mswjs/data';
// import { nanoid } from 'nanoid';

// const models = {
//   user: {
//     id: primaryKey(nanoid),
//   },
// };

// const db = factory(models);
// type Model = keyof typeof models;

// const dbFilePath = 'db.json';

// export const loadDB = async () => {
//   if (typeof window !== 'undefined') {
//     const { readFile, writeFile } = await import('fs/promises');

//     try {
//       const data = await readFile(dbFilePath, 'utf-8');
//       return JSON.parse(data);
//     } catch (err: any) {
//       if (err?.code === 'ENOENT') {
//         const emptyDB = {};
//         await writeFile(dbFilePath, JSON.stringify(emptyDB, null, 2));
//         return emptyDB;
//       } else {
//         console.error('Ошибка загрузки mock DB:', err);
//         return null;
//       }
//     }
//   }

//   return Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));
// }

// export const storeDB = async (data: string) => {
//   if (typeof window !== 'undefined') {
//     const { writeFile } = await import('fs/promises');
//     await writeFile(dbFilePath, data);
//   } else {
//     window.localStorage.setItem('msw-db', data);
//   }
// };

// export const persistDB = async (model: Model) => {
//   if (process.env.NODE_ENV === 'test') return;
//   const data = await loadDB();
//   data[model] = db[model].getAll();
//   await storeDB(JSON.stringify(data));
// };

// export const initializeDb = async () => {
//   const database = await loadDB();
//   Object.entries(db).forEach(([key, model]) => {
//     const dataEntres = database[key];
//     if (dataEntres) {
//       dataEntres?.forEach((entry: Record<string, any>) => {
//         model.create(entry);
//       });
//     }
//   });
// };

// export const resetDB = () => { window.localStorage.clear() };