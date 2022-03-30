// получаем имя папки проэкта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`; //можно использовать название проэкта вместо DIST
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}