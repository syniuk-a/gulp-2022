// получаем имя папки проэкта
import * as nodePath from 'path';
import { mainModule } from 'process';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`; //можно использовать название проэкта вместо DIST
const srcFolder = `./src`;

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files`,
    },
    src: {
        scss: `${srcFolder}/scss/main.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        scss:`${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}