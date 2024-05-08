const mon = Math.floor(Math.random() * 3);

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Попов",
            "id_3": "Савельев",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Бауман",
            "id_7": "Беляев",
            "id_8": "Васнецов",
            "id_9": "Дурнев",
            "id_10": "Челноков",
            "id_11": "Коротков",
            "id_12": "Медведев",
            "id_13": "Федоров",
            "id_14": "Павлов",
            "id_15": "Сибиряков"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Иван",
            "id_2": "Олег",
            "id_3": "Сергей",
            "id_4": "Артем",
            "id_5": "Василий",
            "id_6": "Данил",
            "id_7": "Даниил",
            "id_8": "Матвей",
            "id_9": "Егор",
            "id_10": "Владимир"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елизавета",
            "id_2": "Анна",
            "id_3": "Мария",
            "id_4": "Александра",
            "id_5": "Наталья",
            "id_6": "Яна",
            "id_7": "Светлана",
            "id_8": "Марина",
            "id_9": "Любовь",
            "id_10": "Татьяна"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Иванов",
            "id_2": "Григорьев",
            "id_3": "Тимофеев",
            "id_4": "Сергеев",
            "id_5": "Васильев",
            "id_6": "Данилов",
            "id_7": "Андреев",
            "id_8": "Михайлов",
            "id_9": "Егоров",
            "id_10": "Владимиров"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Программист",
            "id_2": "Врач",
            "id_3": "Водитель",
            "id_4": "Юрист",
            "id_5": "Сварщик",
            "id_6": "Электрик",
            "id_7": "Охранник",
            "id_8": "Военный",
            "id_9": "Пожарный"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Учительница",
            "id_3": "Стюардесса",
            "id_4": "Уборщица",
            "id_5": "Парикмахер",
            "id_6": "Переводчица",
            "id_7": "Фельдшер",
            "id_8": "Официантка",
            "id_9": "Повар"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMonth31: function randomMonth() {
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() {
		let month = `февраля`
		return month;
	},

    rendomYear: function() {
        return this.randomIntNumber(1950, 1990) + " г.р.";
    },

    randomРrofession: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28);
        }
        this.person.year = this.rendomYear(1950, 1990);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};