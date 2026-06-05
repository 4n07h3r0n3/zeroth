const teacher_name = document.getElementsByClassName("teacher-name")[0];
const parent_name = document.getElementsByClassName("parent-name")[0];
const student_name = document.getElementsByClassName("student-name")[0];
const lesson_time = document.getElementsByClassName("lesson-time")[0];
const ktalk_link = document.getElementsByClassName("ktalk-link")[0];
const course = document.getElementsByClassName("course")[0];

const inputs = [
    teacher_name,
    parent_name,
    student_name,
    lesson_time,
    ktalk_link,
    course
];

const hello_textarea = document.getElementsByClassName("hello")[0];
const bye_textarea = document.getElementsByClassName("bye")[0];

const hello_copy = document.getElementsByClassName("hello-copy")[0];
const bye_copy = document.getElementsByClassName("bye-copy")[0];

const update_hello = function() {
    let hello = "";

    hello += `Добро пожаловать в школу программирования "Квантастика"!

Меня зовут ${teacher_name.value}, я преподаватель программирования. Сегодня я проведу у ${student_name.value} первый урок нашего курса 😊.
    `;

    if (course.value === "hiexp") {
        hello += `
На уроке мы познакомимся, изучим базовые навыки работы с Контур.Толк и компьютером, а также начнём устанавливать программу Unity 👨‍💻. 
        `;
    }
    else {
        hello += `
На уроке мы познакомимся, изучим базовые навыки работы с Контур.Толк и компьютером, а также сделаем увлекательный проект 👨‍💻. 
        `;
    }

    hello += `
Жду на занятии в ${lesson_time.value} (МСК)!

Чтобы занятие было максимально эффективным и комфортным, попрошу немного подготовиться: 

1️⃣ Подготовьте ноутбук/компьютер со стабильным интернетом и мышку, наушники и камеру, если они не встроены в ноутбук. Если не установлен Контур.Толк, скачайте и установите по инструкции: 
https://docs.google.com/document/d/1OEjgE3hCGig9WAimDMQ3oBZWJppyfDFYmpaDq7vAHWg/edit?hl=ru&tab=t.0
Если у вас возникли сложности, посмотрите видеоинструкцию по входу в конференцию: 
https://rutube.ru/video/private/6268e29d4a0812221be6ff04734963b7/?p=PfgBIZUYn8Pc7-TnRzy7Mw 

2️⃣Сохраните в закладки браузера ссылку на Личный кабинет ученика: https://lk.kvantastica.ru/login
Логин и пароль можно посмотреть в сообщениях от администратора.
    `;

    if (course.value === "hisup") {
        hello += `
3️⃣Также необходимо по инструкции установить Visual Studio Code, в нем мы будем работать: https://docs.google.com/document/d/1Ci10HJ_tH_9nFeEnmBLhsQGgVYXphQdhm7xUlilvBW0/edit?usp=sharing
(Live Server устанавливать не нужно)
        `;
    }

    hello += `
На урок подключаемся по ссылке:

${ktalk_link.value}

P.S. Если будут вопросы, то пишите! Будем рады помочь! 😊
    `;

    hello_textarea.value = hello;
}

const update_bye = function() {
    let bye = "";

    bye += `${parent_name.value}, наш бонусный урок прошёл очень хорошо! 👍`;

    switch (course.value) {
        case 'jun':
            bye += `
Мы познакомились, потренировались работать в Контур.Толке, проверили навыки работы за компьютером и сделали небольшой проект "Geometry Dash" в Scratch! 💪
У ${student_name.value} навыки уверенного пользователя: хорошо ориентируется в разных приложениях, быстро понимает и выполняет задания!🔥

Домашнее задание: Измени внешний вид игрока. Измени цвет заднего фона. Добавь ещё шипов.
https://rutube.ru/video/private/034501904ce13c248869f1c7f12703ca/?p=DLOvpCgpNpAqYUleg9VwYg
            `;
            break;
        case 'mid':
            bye += `
Мы познакомились, потренировались работать в Контур.Толк проверили навыки работы за компьютером и сделали небольшой проект "Гонки" в Scratch! 💪
У ${student_name.value} навыки уверенного пользователя: хорошо ориентируется в разных приложениях, быстро понимает и выполняет задания!🔥

Домашнее задание №1 (5 КодКойнов): Добавь в игру увеличивающуюся скорость.
https://rutube.ru/video/private/ade554cc2f47f72ef80b5a79bc142628/?p=qUrHvI35a8ZOyTHhFNJW1w
Домашнее задание №2 (5 КодКойнов): Добавь разворот болида при заезде на траву. Добавь систему повреждений при столкновении с соперниками.
https://rutube.ru/video/private/5dfa1fa9d3f685a0267bdaf6dabd11be/?p=-uxkPG7vQnkaQxJCdirJGQ
            `;
            break;
        case 'hi':
            bye += `
Мы познакомились, потренировались работать в Контур.Толк, проверили навыки работы за компьютером и сделали небольшой проект "Doors" в Scratch! 💪
У ${student_name.value} навыки уверенного пользователя: хорошо ориентируется в разных приложениях, быстро понимает и выполняет задания!🔥

Домашнее задание: Добавь в игру врага и шкаф, в котором можно от него прятаться.
https://rutube.ru/video/private/27aea3b326e46c788a4170f3ab56f0e4/?p=acCzJqtNbQjGKNgNNUOUQg
            `;
            break;
        case 'hiexp':
            bye += `
Мы познакомились, потренировались работать в Контур.Толк, проверили навыки работы за компьютером и начали установку Unity! 💪
У ${student_name.value} навыки уверенного пользователя: хорошо ориентируется в разных приложениях, быстро понимает и выполняет задания!🔥

Домашнее задание: закончить установку программы Unity, ведь на первом уроке мы уже начнём там работать!
Инструкция по установке: https://docs.google.com/document/d/1dQnyILlvvie9BLVEXF1ZU3X6sPO7x2uolAqz4tRNnfU/edit?usp=sharing 
            `;
            break;
        case 'hisup':
            bye += `
Мы познакомились, потренировались работать в Контур.Толк, проверили навыки работы за компьютером и сделали сайт с играми Scratch внутри! 💪
У ${student_name.value} навыки уверенного пользователя: хорошо ориентируется в разных приложениях, быстро понимает и выполняет задания!🔥
            `;
            break;
    }

    if (course.value !== "hisup" && course.value !== "hiexp") {
        bye += `
Домашнее задание проверит преподаватель в начале следующего урока. За его успешное выполнение можно заработать 10 КодКойнов!
        `;
    }

    bye += `
${parent_name.value}, ещё у нас есть для Вас небольшой подарок🎁: Руководство по мотивации ребенка. Оно касается уже не только Квантастики, но и обучения чему угодно!
Вот ссылка:
https://drive.google.com/file/d/1LBO-uUdGtdcFz1QYySsUi0Hsszppyp3x/view?usp=sharing 
    `;

    if (course.value !== "hisup" && course.value !== "hiexp") {
        bye += `
Если вы забыли, как открыть свой проект в Scratch, мы подготовили для вас небольшую шпаргалку! 🔥
Вот ссылка: https://rutube.ru/video/private/2cea6ec1ed3a0a96dd1cdb5fa22295c7/?p=Ae5tUDmCCeKvq7_0a5mk-Q 
        `;
    }

    bye += `
Желаю интересной и продуктивной учебы!💻
    `;

    bye_textarea.value = bye;
}

const update_msgs = function() {
    update_hello();
    update_bye();
} 

hello_copy.addEventListener('click', async () => {
    const text = hello_textarea.value;

    try {
        await navigator.clipboard.writeText(text);
    }
    catch (err) {
        console.log("failed copy to clipboard");
    }
});

bye_copy.addEventListener('click', async () => {
    const text = bye_textarea.value;

    try {
        await navigator.clipboard.writeText(text);
    }
    catch (err) {
        console.log("failed copy to clipboard");
    }
});

window.addEventListener('DOMContentLoaded', () => {
    inputs.forEach(input => {
        const key = `cache_${input.className}`;
        const value = localStorage.getItem(key);
      
        if (value !== null) {
            input.value = value;
        }
    });
    update_msgs();
});

teacher_name.addEventListener('input', (e) => {
    const key = `cache_teacher-name`;
    localStorage.setItem(key, teacher_name.value);
    update_msgs();
});
parent_name.addEventListener('input', (e) => {
    const key = `cache_parent-name`;
    localStorage.setItem(key, parent_name.value);
    update_msgs();
});
student_name.addEventListener('input', (e) => {
    const key = `cache_student-name`;
    localStorage.setItem(key, student_name.value);
    update_msgs();
});
lesson_time.addEventListener('input', (e) => {
    const key = `cache_lesson-time`;
    localStorage.setItem(key, lesson_time.value);
    update_msgs();
});
ktalk_link.addEventListener('input', (e) => {
    const key = `cache_ktalk-link`;
    localStorage.setItem(key, ktalk_link.value);
    update_msgs();
});
course .addEventListener('input', (e) => {
    const key = `cache_course`;
    localStorage.setItem(key, course.value);
    update_msgs();
});
