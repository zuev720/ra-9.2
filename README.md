[![Build status](https://ci.appveyor.com/api/projects/status/5n7fxsveu1e1f2we?svg=true)](https://ci.appveyor.com/project/zuev720/ra-9-2)


[GitHub-pages](https://zuev720.github.io/ra-9.2/)




CRUD
===

Вам необходимо реализовать CRUD при работе с HTTP с использование Router'а.

Backend вы можете либо написать сами, либо взять готовый (из каталога `backend`).

![CRUD](https://github.com/netology-code/ra16-homeworks/raw/master/router/crud/assets/main.png)

Нас интересует только id, content и created, в качестве остальных значений (имя, фото) можете поставить заглушки.

## Общая механика

При нахождении на странице `/` отображается список существующих постов (GET на адрес http://localhost:7777/posts), полученные данные отображаются в виде карточек:

![List](https://github.com/netology-code/ra16-homeworks/raw/master/router/crud/assets/main.png)

Кнопка "Создать пост" ведёт на страницу добавления (см. ниже) `/posts/new` (помните про регулярные выражения).

При клике на саму карточку происходит переход на страницу просмотра поста (см. ниже) `/posts/{postId}`.

### Страница создания

На странице создания `/posts/new` отображается карточка создания:

![New](https://github.com/netology-code/ra16-homeworks/raw/master/router/crud/assets/new.png)

При нажатии на кнопку "Опубликовать", пост сохраняется (POST на адрес http://localhost:7777/posts body: `{"id": 0, "content": "То, что введено в поле ввода"}`), после чего осуществляется редирект на главную страницу.

При нажатии на крестик (в верхнем правом углу) происходит редирект на главную без сохранения (advanced: можете сохранить в localStorage и потом вытаскивать оттуда).

### Страница просмотра

На странице просмотра `/posts/{id}` отображается краточка просмотра:

![View](https://github.com/netology-code/ra16-homeworks/raw/master/router/crud/assets/view.png)

При клике на кнопку "Удалить" происходит удаление поста (DELETE на адрес http://localhost:7777/posts/{id}), после чего осуществляется редирект на главную страницу.

При клике на кнопку "Редактировать" карточка просмотра заменяется карточкой редактирования:

![Edit](https://github.com/netology-code/ra16-homeworks/raw/master/router/crud/assets/edit.png)

На карточке редактирования:
* кнопка сохранить приводит к сохранению поста (POST на адрес http://localhost:7777/posts body: `{"id": не 0, "content": "То, что введено в поле ввода"}`) и  отображению карточки просмотра (с обновлёнными данными).
* кнопка крестик приводит к возврату к карточки просмотра.

**Важно**:

1. Не смотрите на то, как это реализовано на фейсбуке - механика изменена
1. Но вы можете подглядеть как пользователю отображается загрузка (сетевые операции добавления/сохранения/удаления)
1. React Router позволяет использовать регулярные выражения в роутах: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0
