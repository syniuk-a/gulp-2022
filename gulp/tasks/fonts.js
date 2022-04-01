import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

// задача 1
export const otfToTtf = () => {
    // ищем файлы формата .otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
    )
    // конвертируем в формат .ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        // выгрузка в исходную папку
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

// задача 2. поиск из исходника и выгрузка
export const ttfToWoff = () => {
    // ищем файлы формата .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
        )
        // конвертируем в формат  .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        // выгрузка в папку с результатом
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        //  ищем файлы в формате .ttf
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        // конвертируем в формат .woff2
        .pipe(ttf2woff2())
        //  выгрузка в папку с результатом
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

// задача 3. подключение шрифтов ф файл стилей
export const fontsStyle = () => {
    // файл подключения стилей шрифтов
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    // проверка наличия файлов шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // проверка существуют ли файлы для подключения шрифтов
            if (!fs.existsSync(fontsFile)) {
                // если файла нет, создаём его
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    // записываем подключение шрифтов в файл стилей
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                // если файл есть, выводим сообщение
                console.log(" ТЫ ШО ЫВСЯ? Фыйл scss/fonts.scss уже существует. Для обновления файла нужно удалить его");
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() {}
}