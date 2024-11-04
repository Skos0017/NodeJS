// Функция для получения списка задач с сервера
function getTasks() {
    // Выполняем GET-запрос к серверу для получения списка задач
    fetch('http://192.168.10.217:8080/tasks')
        .then(response => response.json()) // Преобразуем ответ от сервера в формат JSON
        .then(tasks => {
            const tasksList = document.getElementById('tasks'); // Получаем элемент списка задач по его ID
            tasksList.innerHTML = ''; // Очищаем содержимое списка задач перед добавлением новых задач
            // Проходим по каждой задаче, полученной с сервера
            tasks.forEach(task => {
                const li = document.createElement('li'); // Создаем новый элемент списка для каждой задачи
                // Устанавливаем текстовое содержимое элемента списка, отображая ID, заголовок и статус завершенности задачи
                li.textContent = `ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`;
                li.id = task.id; // Устанавливаем ID элемента списка, чтобы можно было его идентифицировать

                // Добавляем обработчик события клика на элемент списка
                li.addEventListener('click', (event) => {
                    // Устанавливаем значение скрытого поля 'task-id' равным ID выбранной задачи
                    document.getElementById('task-id').value = event.target.id;

                    let list = document.querySelectorAll('li'); // Получаем все элементы списка задач
                    // Сбрасываем стиль для всех элементов списка
                    list.forEach(element => {
                        element.style = null; // Убираем все стили, чтобы выделить только выбранный элемент
                    });

                    // Устанавливаем стиль для выделенного элемента списка (цвет фона и текста)
                    event.target.style.backgroundColor = 'green'; // Задаем зеленый фон
                    event.target.style.color = 'white'; // Задаем белый цвет текста
                });
                // Добавляем созданный элемент списка в DOM
                tasksList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error)); // Обрабатываем возможные ошибки запроса
}

// Функция для обработки отправки формы задачи (добавление новой задачи)
function submitTaskForm(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

    // Получаем значения полей формы
    const title = document.getElementById('task-title').value; // Получаем текст заголовка задачи
    const completed = document.getElementById('task-completed').checked; // Получаем статус завершенности задачи (отмечено или нет)

    // Создаем объект задачи с полученными значениями
    const task = { title, completed };

    // Выполняем POST-запрос для добавления новой задачи на сервер
    fetch('http://192.168.10.217:8080/tasks', {
        method: 'POST', // Указываем метод запроса
        headers: { 'Content-Type': 'application/json' }, // Устанавливаем заголовок для указания типа передаваемых данных
        body: JSON.stringify(task) // Преобразуем объект задачи в строку JSON для отправки на сервер
    })
        .then(response => response.text()) // Получаем ответ от сервера в виде текста
        .then(() => {
            document.getElementById('task-form').reset(); // Сбрасываем форму после успешной отправки
            getTasks(); // Обновляем список задач, чтобы отобразить добавленную задачу
        })
        .catch(error => console.error('Error:', error)); // Обрабатываем возможные ошибки запроса и выводим их в консоль
}

// Функция для обновления существующей задачи
function updateTask() {
    // Получаем значения полей формы для обновления задачи
    const id = document.getElementById('task-id').value; // Получаем ID задачи, которую нужно обновить
    const title = document.getElementById('task-title').value; // Получаем новое название задачи
    const completed = document.getElementById('task-completed').checked; // Получаем новый статус завершенности задачи (отмечено или нет)

    // Создаем объект задачи с новыми значениями
    const task = { title, completed };

    // Выполняем PUT-запрос для обновления задачи на сервере
    fetch(`http://192.168.10.217:8080/tasks?id=${id}`, {
        method: 'PUT', // Указываем метод запроса (PUT для обновления)
        headers: { 'Content-Type': 'application/json' }, // Устанавливаем заголовок для указания типа передаваемых данных
        body: JSON.stringify(task) // Преобразуем объект задачи в строку JSON для отправки на сервер
    })
        .then(response => response.text()) // Получаем ответ от сервера в виде текста
        .then(() => {
            document.getElementById('task-form').reset(); // Сбрасываем форму после успешного обновления
            getTasks(); // Обновляем список задач, чтобы отобразить измененные данные
        })
        .catch(error => console.error('Error:', error)); // Обрабатываем возможные ошибки запроса и выводим их в консоль
}

// Функция для удаления задачи
function deleteTask(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    const id = document.getElementById('delete-id').value; // Получаем ID задачи, которую нужно удалить

    // Выполняем DELETE-запрос для удаления задачи с сервера
    fetch(`http://192.168.10.217:8080/tasks?id=${id}`, {
        method: 'DELETE' // Указываем метод запроса (DELETE для удаления)
    })
        .then(() => {
            document.getElementById('delete-form').reset(); // Сбрасываем форму удаления после успешного выполнения
            getTasks(); // Обновляем список задач, чтобы отобразить изменения
        })
        .catch(error => console.error('Error:', error)); // Обрабатываем возможные ошибки запроса и выводим их в консоль
}