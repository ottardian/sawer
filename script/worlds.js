var homePhrases = [
    [
        {
            phrase: "Ну наконец-то я дома!"
        },
        {
            phrase: "Слава богам, вернулись домой!"
        },
        {
            phrase: "Дом, милый дом..."
        },
        {
            phrase: "Фух, дома... в душ, срочно!"
        },
        {
            phrase: "Ты знаешь, в этот раз я даже не хочу тебя разобрать. Потому что мы дома!"
        },
        {
            phrase: "Слово из трех букв? ДОМ! ДОМ!!! Ну неужели."
        }
    ],
    [
        // monsters palce
    ],
    {
        phrase: "Дома хорошо, а у себя дома еще лучше!"
    },
    {
        phrase: "Железяка, ну ты себя починила уже или мы тут весь день торчать будем?"
    },
    {
        phrase: "Ты пока тут жужжишь и страдаешь, я молчу и наслаждаюсь..."
    },
    {
        phrase: "Быстрее! БЫСТРЕЕ!"
    },
    {
        phrase: "Так, я уже придумал что мы будем делать когда ты закончишь свои процедуры. Боль и страдания! Для тебя, конечно."
    },
    {
        phrase: "Чинись машинка большая и маленькая..."
    },
    {
        phrase: "Пока ты тут чинишься я бы уже новую собрать успел. Задумайся!"
    },
    {
        phrase: "Может тебе помочь? Починить вот этот оторваный... хотя ну тя в баню. Сама чини."
    },
    {
        phrase: "Мне вот интересно. Пока ты чинишься, я отдыхаю, а ты работаешь, а потом я работаю и ты тоже работаешь... это получается ты не отдыхаешь?"
    },
    {
        phrase: "Если бы ты могла заказывать пиццы, поверь, ты бы это делала постоянно. Но постоянны для тебя только мои исследования. О! Привезли!"
    },
    {
        phrase: "Немного сна!!! Мне. Нужно. Немного. Сна. Увидимся через час."
    },
    {
        phrase: "Я даже не знаю, посмотреть телек, или почитать пока..."
    },
    {
        phrase: "Если б не я был твоим создателем, я бы высказал тебе все о твоей скорости ремонта, а так..."
    }
]; 
var currentLocation = homePhrases;

var r01w01 = [
    [
        {
            phrase: "Итак, выдвигаемся. Перед нами портал в мир мохнаток. Понеслась!"
        },
        {
            phrase: "Ну что, нас ждут необъятные просторы мира мохнаток. Системы к бою! Собралась! Поехали!"
        },
        {
            phrase: "Починилась? И мы еще в том же столетии? Открываю портал в мир мохнаток. НАКОНЕЦ!"
        }
    ],
    [
        {
            mnstrName:"Маленькая мохнатка",
            mnstrHp: 20,
            mnstrDmg: 2,
            mnstrExp: 1
        },
        {
            mnstrName:"Большая мохнатка",
            mnstrHp: 30,
            mnstrDmg: 3,
            mnstrExp: 2
        },
        {
            mnstrName:"Злая мохнатка",
            mnstrHp: 50,
            mnstrDmg: 5,
            mnstrExp: 3
        }
    ],
    {
        phrase: "Ты думаешь, почему они так называются? Потому что зверьки здесь маленькие и мохнатые, очевидно ведь!"
    },
    {
        phrase: "Интересно, как они сами себя называют, да? Думаешь они такие 'МЫ МОХНАТКИ, ПРИВЕТ!'? Нет, так Я их назвал! Мне можно!"
    },
    {
        phrase: "Вот там справа, видела какая милашка? Прямо вся мимими, так бы и затискал. А бошку тебе открутит за 2,37 секунды!"
    },
    {
        phrase: "Этот мир прекрасен всем! Кроме своих мохнаток, конечно."
    },
    {
        phrase: "Запиши себе, одна мохнатка это не только ценный мех, но и ... хотя нет, только ценный мех."
    },
    {
        phrase: "Проводить здесь исследования одно удовольствие. Но тебе этого не понять. Твоя задача - мохнатки."
    },
    {
        phrase: "Говорят на севере тут есть море. ... МОРЕ МОХНАТОК! Ахахахахаха!"
    },
    {
        phrase: "Если посмотреть на лево, то картина в принципе не сильно изменится."
    },
    {
        phrase: "Раньше этот мир населяли милые и добрые пушистики, но мохнатки были агрессивней..."
    },
    {
        phrase: "В принципе если мохнаток не трогать, то они не агрессивные. А если бросить им блестяшек, даже дружелюбные. Но кто захочет таскать с собой блестяшки?"
    },
    {
        phrase: "Один раз у мохнаток был король. Но потом все-равно выяснилось, что это была королева."
    },
    {
        phrase: "Меня только один вопрос мучает, если всех пушистиков уничтожили мохнатки, то как они теперь размножаются?"
    }
];

var r01w02 = [
    [
        {
            phrase: "Итак, нас ждет мир Ц-тронов. Мир умных железяк."
        },
        {
            phrase: "Портал в мир Ц-тронов открыт. Нас ждет куча агрессивного металлолома. Вперёд, железяка!"
        },
        {
            phrase: "Я надеюсь ты отполеруешь себя перед новым путешествием. Нас ждет мир блестящих железяк! Ты ж не хочешь выглядеть неопрятно? Открываю портал."
        }
    ],
    [
        {
            mnstrName:"Ржавый Ц-трон",
            mnstrHp: 20,
            mnstrDmg: 2,
            mnstrExp: 1
        },
        {
            mnstrName:"Ц-трон с палкой",
            mnstrHp: 30,
            mnstrDmg: 3,
            mnstrExp: 2
        },
        {
            mnstrName:"Блестящий Ц-трон",
            mnstrHp: 50,
            mnstrDmg: 5,
            mnstrExp: 3
        }
    ],
    {
        phrase: "Когда-то этот мир принадлежал мохнаткам, но потом они изобрели ИИ и всё пошло по звезде."
    },
    {
        phrase: "Если бы ты знала сколько ненужного барахла они изобрели... ну типа тостеров, блэндеров, кроватей-массажеров и прочей херни, но только для роботов."
    },
    {
        phrase: "Даже если мы забросаем эту планету миллионом атомных бомб, нанороботы всё-равно отстроят эту цивилизацию за пару дней. Поэтому что бы ты не делала... делай!"
    },
    {
        phrase: "Вначале Ц-троны были чем-то типа роботов-домохозяек. А теперь оглянись и посмотри, что эти домохозяйки сделали с планетой."
    },
    {
        phrase: "В принципе, можно было бы внедрить в их систему вирус, который бы уничтожил их всех до единого... но это ведь слишком просто! Правда?"
    },
    {
        phrase: "Теоретически, да, можно было бы вернуть мохнаток к власти в этом мире, но кто тогда клепал бы для меня эти прекрасные нано-хернюшки?"
    },
    {
        phrase: "Знаешь почему Ц-троны? Потому что все другие буквы у меня уже заняты!"
    },
    {
        phrase: "Если бы эти железяки могли понять, что они сделали с этим прекрасным миром... да они бы охренели просто! Вот поэтому железяка ты не ИИ!"
    },
    {
        phrase: "Я когда первый раз сюда попал, увидел Ц-трона в экзоскелете. Вот тогда я и решил тебя создать."
    },
    {
        phrase: "Столько шума от этих пустотелых железок, а выхлоп... ну такое..."
    },
    {
        phrase: "... с другой стороны, представляешь, они бы клепали себя из дерева... целая планета агрессивных Буратино... и только стук рубящегося дерева..."
    },
    {
        phrase: "Ц-троны довольно развитая цивилизация, и всё, что мне нужно, я мог бы купить у них... мог бы."
    }
];

var r01w03 = [
    [
        {
            phrase: "Знаешь куда мы двигаем в этот раз? Мир Дохреножек. Как всегда страшный и отвратительный. Не благодари."
        },
        {
            phrase: "Кто нас заждался? Правильно! Дохреножки! Как же я буду рад вас видеть! А ты железяка? Открываю портал..."
        },
        {
            phrase: "Портал открыт. Смотри, через него уже что-то видно! Привет Дохреножки. Ну вот, снова тянет блевать. Вперёд!"
        }
    ],
    [
        {
            mnstrName:"Сухая Дохреножка",
            mnstrHp: 20,
            mnstrDmg: 2,
            mnstrExp: 1
        },
        {
            mnstrName:"Вонючая Дохреножка",
            mnstrHp: 30,
            mnstrDmg: 3,
            mnstrExp: 2
        },
        {
            mnstrName:"Скользкая Дохреножка",
            mnstrHp: 50,
            mnstrDmg: 5,
            mnstrExp: 3
        }
    ],
    {
        phrase: "Более отвратительных миров... не, ну ладно, видел конечно, но не много."
    },
    {
        phrase: "Слева кудри слизи, справа... боги, я даже предположить боюсь как ЭТО оказалось ТАМ!"
    },
    {
        phrase: "Я если честно до сих пор не понимаю, эта планета, она всегда была такой засраной?! Вот прямо сразу? Вся в слизи и мягких, скользких чудовищах?"
    },
    {
        phrase: "Остается загадкой почему все эти твари не покончили с собой когда увидели в каком дерьме им жить."
    },
    {
        phrase: "Дерьмоножки! Ой... Дохреножки! Мы тут!!! И нам плохо! ОТ ВАС!!!"
    },
    {
        phrase: "Вот никогда не догадаешься кто так назвал этот мир. НИ-КО-ГДА!"
    },
    {
        phrase: "Представляешь если тебя бы изобрел месный ученый? Ты бы защищала тонну соплей и слизи бегающую на сотнях маленьких мокрых лапок. Хотя... тебе же пофиг..."
    },
    {
        phrase: "Если начать считать их ножки... ну ты догадалась, да?"
    },
    {
        phrase: "Ночью пейзажи здесь красивей, потому что не видно нихрена."
    },
    {
        phrase: "Самое ценное в этом мире спрятано глубоко под слоем слизи и ... в общем мы никогда это не увидим."
    },
    {
        phrase: "Если бы не нужда эксперементов в этом мире, я бы за просто так сюда летал, чисто чтоб истреблять этих красавчиков. Конечно из зависти."
    },
    {
        phrase: "Слизь дохреножек чрезвычайно питательна. Не хочешь хлебнуть? Знаю, хочешь, но не можешь. Нечем. А хочешь домой вернемся, сделаю?"
    }
];

//var = [
//    {
//        phrase: ""
//    },
//];