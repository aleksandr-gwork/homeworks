

//№1 Создайте обработчик события...
window.addEventListener('load', function () {

    let fullName = document.getElementsByName('Full Name')[0];
    let username = document.getElementsByName('Username')[0];
    let email = document.getElementsByName('E-mail')[0];
    let password = document.getElementsByName('Password')[0];
    let repeatPassword = document.getElementsByName('Repeat Password')[0];
    let agree = document.getElementsByName('agree')[0];
    let button = document.getElementsByClassName('button')[0];

    let question = document.getElementsByClassName('question')[0];
    let popupButton = document.getElementsByClassName('popup-button')[0];

    let popupNone = () => {
        document.getElementsByClassName('popup')[0].style.display = 'none';
    }

    //№2 В поле "Full Name" запретите вводить цифры.
    fullName.onkeydown = function (e) {
        if ("1234567890".indexOf(e.key) !== -1) {
            e.preventDefault();
        }
    }

    //№3 В поле "Your username" запретите вводить точки и запятые.
    username.onkeydown = function (e) {
        if (",.".indexOf(e.key) !== -1) {
            e.preventDefault();
        }
    }

    //№4 При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.

    agree.onchange = function (e) {
        console.log(e.target.checked ? 'Согласен' : 'Не согласен');
    }

    //№5 Проверьте на существование значения в каждом текстовом поле. Если какое-то поле не заполнено, выведите сообщение об ошибке, используя alert. Сообщение должно быть следующего вида: "Заполните поле E-mail".


    //Подсветка бордера при вводе в поле симовлов*******
    function handleInputChange(event) {
        const input = event.target;
        input.value !== '' ?
            input.style.borderColor = 'greenyellow' :
            input.style.borderColor = '';
    }
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    });
    //**************************************************
    
    let signUp = function () {
        if (!fullName.value) {
            alert('Заполните поле Full Name');
        } else if (!username.value) {
            alert('Заполните поле Username');
        } else if (!email.value) {
            alert('Заполните поле E-mail');
        } else if (!password.value) {
            alert('Заполните поле Password');
        } else if (password.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
        } else if (!repeatPassword.value) {
            alert('Заполните поле Repeat Password');
        } else if (password.value !== repeatPassword.value) {
            alert('Пароли не совпадают');
        } else if (!agree.checked) {
            alert('Согласитесь с политикой конфиденциальности');
        }

        if (fullName.value && username.value && email.value && password.value && repeatPassword.value && agree.checked) {
            document.getElementsByClassName('form')[0].reset();
            document.getElementsByClassName('popup')[0].style.display = 'flex';
            popupButton.addEventListener('click', popupNone);
            formInputs.forEach(input => {
                input.style.borderColor = '';
            })
        }
    }

    button.addEventListener('click', signUp);


    //  При нажатии на ссылку «Already have an account?», Блоки с полями "Full Name", "E-mail", "Repeat Password" удалить.
    let signIn = function () {
        if (!username.value) {
            alert('Заполните поле Username');
        } else if (!password.value) {
            alert('Заполните поле Password');
        } else if (password.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
        } else {
            alert('Добро пожаловать, ' + document.getElementsByName('Username')[0].value + '!');
            window.location.reload();
        }
    }

    let alreadyAcc = function () {
        // Текст "Get your free account" заменить на "Log in to the system".
        document.getElementsByClassName('form')[0].reset();
        document.getElementsByClassName('title')[0].innerHTML = 'Log in to the system';

        // Блоки с полями "Full Name", "E-mail", "Repeat Password" и label удалить.
        for (let i = 0; i < document.getElementsByClassName('input').length; i++) {
            if (i === 0 || i === 1 || i === 2) {
                document.getElementsByClassName('input')[i].remove();
                document.getElementsByClassName('label')[i].remove();
            }
        }

        // Блок с чекбоксом также удалить.
        document.getElementsByClassName('agree')[0].remove();

        // Текст в кнопке заменить на «Sign In».
        document.getElementsByClassName('button')[0].innerHTML = 'Sign In';

        // Ссылку "Already have an account?" удалить.
        document.getElementsByClassName('question')[0].remove();

        // Заменить слушатель события для кнопки «Sign In»: нужно проверить только то, что оба поля (Username и Password) заполнены. Если какое-то из полей не заполнено - вывести ошибку. Если оба заполнены - вывести через alert сообщение "Добро пожаловать, username!", где username - значение из соответствующего поля.
        button.removeEventListener('click', signUp);
        button.addEventListener('click', signIn);
    }

    popupButton.onclick = alreadyAcc;
    question.onclick = alreadyAcc;
})