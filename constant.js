        // Theme handling
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            document.getElementById('theme-toggle').innerHTML = '<i class="bi bi-sun"></i>';
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
                document.getElementById('theme-toggle').innerHTML = '<i class="bi bi-sun"></i>';
            } else {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
                document.getElementById('theme-toggle').innerHTML = '<i class="bi bi-moon"></i>';
            }
        });

        document.getElementById('theme-toggle').addEventListener('click', function() {
            if (document.body.classList.contains('light')) {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
                this.innerHTML = '<i class="bi bi-sun"></i>';
            } else {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
                this.innerHTML = '<i class="bi bi-moon"></i>';
            }
        });

        // Position to grade mapping
        const positionToGrade = {
            "Рекрутер начального уровня (J/J+)": ["J", "J+"],
            "Рекрутер среднего уровня (M/M+)": ["M", "M+"],
            "Старший рекрутер (S/S+)": ["S", "S+"],
            "Ведущий рекрутер (L/L+)": ["L", "L+"],
            "Руководитель направления (H)": ["H"]
        };

        // Skills data structure
        const skills = [
            {
                id: 1,
                title: "Умение работать с ключевыми платформами для поиска кандидатов",
                description: "Rabota.by / hh.ru / linkedin.com / career.habr.ru",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 2,
                title: "Использование базовых инструментов для работы",
                description: "Владение MS Office (Word, Excel, PowerPoint), Zoom, Календари, K-Talk, Jira, Confluence",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 3,
                title: "Знание индустрии и принятие решений на основе этих знаний",
                description: "Знание специфики банка и процессов, регламента, законодательной базы",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 4,
                title: "Составление профилей должности и кандидатов",
                description: "Скрининг и выявление базовых потребностей кандидатов (зарплата, график), интейк-интервью",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 5,
                title: "Онлайн и очная оценка кандидатов",
                description: "Проведение интервью, модерация встреч",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 6,
                title: "Поиск кандидатов и вакансий",
                description: "Определение и анализ ключевых требований и источников поиска, mapping, проработка компаний-доноров",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 7,
                title: "Обеспечение коммуникации и обратной связи",
                description: "Формирование корректных и грамотных фидбеков (письменно/устно), работа в команде (согласование, HR-системы)",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 8,
                title: "Применение классических и трендовых методик / методологий в найме",
                description: "Глубокий анализ кандидатов по соцсетям и цифровому следу, применение кейс-интервью, стресс-интервью, использование STAR, PARLA, SPIN-метод",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 9,
                title: "Менеджмент. Управление вакансиями, процессами, временем и командой",
                description: "Планирование, расстановка приоритетов, принятие решений, ненасильственный менеджмент 3.0",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 10,
                title: "Навыки продаж и сервиса",
                description: "Мотивация кандидатов, выявление их потребности, консультирование, умение продавать кандидатов нанимающему менеджеру",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 11,
                title: "Ведение и формирование аналитических данных",
                description: "В том числе предиктивных, создание дашбордов и отчетов",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 12,
                title: "Формирование talent pool (кадрового резерва)",
                description: "Наполнение и работа с базой кандидатов с учетом требований НЦЗПД, хантинг и долгий найм",
                grades: { "J": 1, "J+": 2, "M": 3, "M+": 4, "S": 5, "S+": 6, "L": 7, "L+": 8, "H": 9 }
            },
            {
                id: 13,
                title: "Взаимодействие с учебными заведениями и профессиональными сообществами",
                description: "Стажировки, практика, распределение, подрядчики и вендоры",
                grades: { "S": 4, "S+": 5, "L": 6, "L+": 7, "H": 8 }
            },
            {
                id: 14,
                title: "Разработка/исполнение roadmap и проведение анализа",
                description: "Координация руководства как на уровне предложений, так и на уровне отчетности (проведение PESTEL и SWOT-анализа)",
                grades: { "S": 4, "S+": 5, "L": 6, "L+": 7, "H": 8 }
            },
            {
                id: 15,
                title: "Развитие и формирование HR-бренда",
                description: "Участие в конференциях, подготовка образовательных материалов, внедрение инновационных подходов и Agile-практик",
                grades: { "M+": 3, "S": 4, "S+": 5, "L": 6, "L+": 7, "H": 8 }
            },
            {
                id: 16,
                title: "Запуск пилотов и внедрение инноваций",
                description: "Управление портфелем HR-проектов и внедрение новых решений/автоматизаций, в том числе AI-решений для оптимизации процессов. Использование HADI-циклов и метода SMART для качественной проработки продуктов и решений",
                grades: { "L": 6, "L+": 7, "H": 8 }
            },
            {
                id: 17,
                title: "Использование LinkedIn и X-Ray запросов для сорсинга специалистов",
                description: "Размещение вакансий, отслеживание активностей",
                grades: { "J+": 1, "M": 2, "M+": 3, "S": 4, "S+": 5, "L": 6, "L+": 7, "H": 8 }
            },
            {
                id: 18,
                title: "Поиск по специализированным платформам, блогам и соцсетям",
                description: "Поиск специалистов на мероприятиях",
                grades: { "M+": 3, "S": 4, "S+": 5, "L": 6, "L+": 7, "H": 8 }
            },
            {
                id: 19,
                title: "Знание технических и технологических специфик в ИТ и digital направлениях",
                description: "Понимание, для чего они необходимы рекрутерам, навыки технического рекрутинга",
                grades: { "M": 2, "M+": 3, "S": 4, "S+": 5, "L": 6, "L+": 7, "H": 8 }
            }
        ];

        // Update grades to include values 9 and 10 for H grade
        skills.forEach(skill => {
            if (skill.grades["H"]) {
                // If the skill has an H grade, make sure it includes values 9 and 10
                // For most skills, this is already set to 9, but we'll ensure it's consistent
                skill.grades["H"] = 9;
                // Remove H+ grade if it exists
                if (skill.grades["H+"]) {
                    delete skill.grades["H+"];
                }
            }
        });

        // Grade descriptions
        const gradeDescriptions = {
            "J": "Junior - Начинающий специалист с минимальным опытом",
            "J+": "Junior+ - Специалист с растущим опытом и потенциалом",
            "M": "Middle - Специалист среднего уровня с базовыми навыками",
            "M+": "Middle+ - Опытный специалист со сформированными навыками",
            "S": "Senior - Специалист высокого уровня с глубокой экспертизой",
            "S+": "Senior+ - Специалист-эксперт с обширным профессиональным опытом",
            "L": "Lead - Ведущий специалист с навыками руководства",
            "L+": "Lead+ - Опытный ведущий специалист с сильными управленческими компетенциями",
            "H": "Head - Руководитель высшего звена с комплексными компетенциями",
        };

        // Skill level descriptions
        const skillLevels = {
            1: "Базовый уровень (Junior)",
            2: "Начальный уровень (Junior+)",
            3: "Средний уровень (Middle)",
            4: "Выше среднего (Middle+)",
            5: "Высокий уровень (Senior)",
            6: "Экспертный уровень (Senior+)",
            7: "Лидерский уровень (Lead)",
            8: "Продвинутый лидерский уровень (Lead+)",
            9: "Уровень руководителя (Head)",
        };

        // Skill descriptions by level
        const skillDescriptions = {
            "Умение работать с ключевыми платформами для поиска кандидатов": {
                1: "Имеет личные учетные записи (rabota.by, hh.ru, LinkedIn, career.habr.ru) и публикует вакансии по готовому шаблону. Просматривает резюме без ошибок в структуре объявления и оформления. Выполняет элементарные действия: подходящие резюме сохраняет в избранное, не нарушает политики портала во время размещения.",
                2: "Применяет простые фильтры (ключевые слова, регион, опыт), формирует первичные списки кандидатов. Ведёт краткую переписку с кандидатами (шаблонные ответы, приглашение на интервью). Знает базовые ограничения порталов (например, не превышать лимит на отклики/сообщения).",
                3: "Понимает расширенный поиск (булевы операторы, логические скобки) и умеет применять их на hh.ru, LinkedIn и других площадках. Анализирует специфику каждой платформы (как лучше формулировать заголовок/ключевые слова). Знает внутренние сорсинговые алгоритмы компании (если они есть), привязывает результаты поиска к ним.",
                4: "Настраивает тексты объявлений под требования конкретной платформы (SEO-заголовки, использование региональных уточнений). Управляет одновременным поиском в нескольких источниках, сопоставляет эффективность (какая платформа даёт больше релевантных откликов). Использует open-аналитику (stat.rabota.by, аналитику hh.ru) для оценки конкуренции и динамики вакансий.",
                5: "Систематически замеряет конверсию (отклики → приглашения → оффер → трудоустройство), ищет причины падения или роста, корректирует объявления (заголовки, текст, требования). Уверенно владеет дополнительными способами: например, экспериментирует с вариациями текста, анализирует статистику (время просмотров за сутки, CTR и т.д.).",
                6: "Активно применяет продвинутые методы сорсинга: X-Ray, Boolean-цепочки, нестандартные площадки (нишевые сайты), умеет создавать и настраивать встроенных ботов для фильтрации входящих откликов и приглашения 'холодных' специалистов.",
                7: "Разрабатывает централизованные гайдлайны и шаблоны для создания вакансий, организует обучение рекрутеров (как формулировать требования, какие фильтры применять). Создаёт и настраивает менеджерские аккаунты на платформах для подчинённых.",
                8: "Внедряет сквозную стратегию сорсинга: контролирует KPI (время закрытия, стоимость найма, конверсия) и бюджеты на порталах по своему направлению. Формирует пакетные договоры с площадками, ведёт переговоры о дополнительных услугах.",
                9: "Создаёт и масштабирует глобальную экосистему поиска, разрабатывая собственные AI-инструменты и (или) интегрируясь с API крупных площадок (в том числе автоматическая рассылка приглашений через чат-бота).",
                10: "Формирует передовые рыночные практики: сотрудничает с платформами для запуска пилота новых функций. Проводит детальный анализ эффективности отдела в масштабах всей организации."
            },
            "Использование базовых инструментов для работы": {
                1: "Открывает и редактирует файлы (Word, Excel), создаёт события в календаре, проводит встречи в Zoom (без технических проблем).",
                2: "Использует офисные пакеты (Office, Google Workspace) для рабочих документов; ведёт Jira/Confluence на базовом уровне (создание/редактирование задач).",
                3: "Анализирует данные в Excel (формулы, сводные таблицы), полноценно ведёт задачи в Jira (статусы, приоритеты, описание), структурно оформляет базы знаний в Confluence.",
                4: "Настраивает рабочие процессы и интеграции в Jira (воронки, автоматические уведомления), создаёт презентации в PowerPoint с графиками и наглядными схемами.",
                5: "Разрабатывает удобное рабочее окружение (шаблоны Excel, шаблоны задач, дашборды), частично автоматизирует повторяющиеся операции.",
                6: "Обучает коллег работе с продвинутыми функциями офисных инструментов, настраивает связи между системами (интеграции Jira/Confluence/почта и т.д.).",
                7: "Осуществляет управление корпоративными решениями (выбор ПО, безопасность), утверждает регламенты, контролирует соблюдение стандартов ведения рабочей документации.",
                8: "Оптимизирует и унифицирует весь IT-ландшафт HR, учитывая опыт пользователей (UX) и нормативы ИБ, организует корпоративные тренинги по эффективному использованию.",
                9: "Определяет стратегию развития корпоративного набора инструментов (Office 365, Atlassian пакет и т.д.) на уровне организации.",
                10: "Внедряет масштабные обновления с учётом ROI и бизнес-приоритетов на уровне всей организации."
            },
            "Знание индустрии и принятие решений на основе этих знаний": {
                1: "Знает базовую структуру банковской сферы (продукты, типовые вакансии), понимает общие нормы трудового права в банке.",
                2: "Уточняет специфику подразделений банка, их функции, ориентируется в ключевых внутренних регламентах и инструкциях.",
                3: "Учитывает особенности банковских услуг (прямые и непрямые), их KPI, знаком с локальными нормативными актами в области найма и внутренних перемещений.",
                4: "Соотносит требования комплаенса, безопасности и других регуляторов с процессом найма, консультируя нанимающего менеджера по рискам.",
                5: "Самостоятельно анализирует банковские процессы, преemptively корректирует стратегию найма под законодательные изменения, минимизирует риски несоответствия нормам.",
                6: "Ведёт сложные проекты с учётом юр. тонкостей и бизнес-интересов, подключает юридические отделы при возникновении коллизий, полностью понимает бизнес-модель организации.",
                7: "Формирует долгосрочные решения по найму, согласуя их с топ-менеджментом и регуляторными органами, выстраивает кадровую стратегию в рамках глобальных целей банка.",
                8: "Адаптирует крупные законодательные изменения под процессы рекрутинга, взаимодействует с руководством для согласования необходимых корректировок политик и процедур.",
                9: "Разрабатывает отраслевые стандарты найма в банковской сфере, консультирует внешние организации по оптимальным практикам.",
                10: "Способен влиять на формирование рынка труда в банковском сегменте, выступает экспертом на законодательном уровне."
            },
            "Составление профилей должности и кандидатов": {
                1: "Собирает минимум требований для вакансии, умеет находить ключевые моменты в резюме, задаёт стандартные вопросы из скрипта.",
                2: "Дополняет профиль роли (опыт, навыки, ожидания по ЗП/графику), фиксирует первичные запросы кандидатов, проводит уточняющие беседы.",
                3: "Проводит полноценные интейк-встречи с нанимающим менеджером, формирует детализированный портрет кандидата (технические/личностные качества).",
                4: "Анализирует рынок (конкурирующие компании, зарплатные вилки) и вносит предложения по коррекции требований вместе с нанимающим менеджером.",
                5: "Разрабатывает структурированные формы скрининга (чек-листы, анкеты), использует различные техники для анализа мотивации кандидатов.",
                6: "Организует процесс скрининга 'от запроса до оффера', отслеживает результаты (отказы, выходы) и на основе статистики корректирует сам процесс.",
                7: "Создаёт универсальные шаблоны интейк-интервью, обучает всю рекрутинговую команду, внедряет систему аналитики (воронки, время принятия офферов).",
                8: "Меняет подходы к формированию профилей под долгосрочные цели компании (например, формирование кадрового резерва), совершенствует инструменты оценки потребностей.",
                9: "Определяет корпоративные стандарты профилирования должностей, внедряет лучшие практики на уровне всей организации.",
                10: "Внедряет лучшие практики за пределами организации (branch offices/дочерние компании), формирует экосистему профилирования."
            }
        };

        // Generate skills cards
        const skillsContainer = document.getElementById('skillsContainer');

        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'card skill-card';
            
            // Проверяем, нужно ли добавить кнопку тестового задания
            const hasTestTask = [
                "Ведение и формирование аналитических данных",
                "Разработка/исполнение roadmap и проведение анализа",
                "Использование LinkedIn и X-Ray запросов для сорсинга специалистов",
                "Знание технических и технологических специфик в ИТ и digital направлениях"
            ].includes(skill.title);
            
            skillCard.innerHTML = `
                <div class="card-header">
                    <h5 class="mb-0">${skill.title}</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">${skill.description}</p>
                    
                    <div class="skill-level-description" id="skill${skill.id}Description">
                        Выберите уровень владения навыком
                    </div>
                    
                    <div class="range-container">
                        <div class="mb-3">
                            <label for="skill${skill.id}Range" class="form-label">Оценка: <span id="skill${skill.id}Value">5</span>/10</label>
                            <input type="range" class="form-range" min="0" max="10" step="1" id="skill${skill.id}Range" value="5">
                        </div>
                        
                        <div class="grades-row">
                            ${generateGradeIndicators(skill)}
                        </div>
                        
                        ${hasTestTask ? `<button class="btn-test-task" data-skill-id="${skill.id}" data-skill-title="${skill.title}">
                            <i class="bi bi-file-earmark-text"></i> Тестовое задание
                        </button>` : ''}
                    </div>
                </div>
            `;
            skillsContainer.appendChild(skillCard);
            
            // Add event listener for range input
            const rangeInput = document.getElementById(`skill${skill.id}Range`);
            const valueDisplay = document.getElementById(`skill${skill.id}Value`);
            const descriptionDisplay = document.getElementById(`skill${skill.id}Description`);
            
            rangeInput.addEventListener('input', function() {
                const value = parseInt(this.value);
                valueDisplay.textContent = value;
                updateGradeIndicators(skill, value);
                updateSkillDescription(skill, value);
            });
            
            // Initialize grade indicators and description
            updateGradeIndicators(skill, 5);
            updateSkillDescription(skill, 5);
            
            // Добавляем обработчик для кнопки тестового задания
            if (hasTestTask) {
                const testTaskBtn = skillCard.querySelector('.btn-test-task');
                if (testTaskBtn) {
                    console.log('Creating test task button for:', skill.title);
                    testTaskBtn.addEventListener('click', function() {
                        const skillId = this.getAttribute('data-skill-id');
                        const skillTitle = this.getAttribute('data-skill-title');
                        console.log('Test task button clicked:', { skillId, skillTitle });
                        openTestTaskModal(skillId, skillTitle);
                    });
                }
            }
        });

        // Generate grade indicators HTML
        function generateGradeIndicators(skill) {
            const grades = Object.keys(skill.grades);
            let html = '';
            
            grades.forEach(grade => {
                html += `
                    <div class="grade-indicator">
                        <span class="grade-label">${grade}</span>
                        <div class="value-indicator" id="skill${skill.id}Grade${grade}"></div>
                    </div>
                `;
            });
            
            return html;
        }

        // Update grade indicators based on current value
        function updateGradeIndicators(skill, value) {
            const grades = Object.keys(skill.grades);
            
            grades.forEach(grade => {
                const indicator = document.getElementById(`skill${skill.id}Grade${grade}`);
                if (!indicator) return; // Skip if element doesn't exist
                
                const expectedValue = skill.grades[grade];
                
                // Reset classes
                indicator.classList.remove('value-matched', 'value-close', 'value-distant');
                
                // Determine class based on proximity to expected value
                if (value === expectedValue) {
                    indicator.classList.add('value-matched');
                } else if (Math.abs(value - expectedValue) <= 1) {
                    indicator.classList.add('value-close');
                } else {
                    indicator.classList.add('value-distant');
                }
                
                // Special case: values 9 and 10 should correspond to H
                if (grade === "H" && (value === 9 || value === 10)) {
                    indicator.classList.add('value-matched');
                    indicator.classList.remove('value-close', 'value-distant');
                }
            });
        }

        // Update skill description based on current value
        function updateSkillDescription(skill, value) {
            const descriptionElement = document.getElementById(`skill${skill.id}Description`);
            if (!descriptionElement) return; // Skip if element doesn't exist
            
            // Try to get specific description for this skill and value
            if (skillDescriptions[skill.title] && skillDescriptions[skill.title][value]) {
                descriptionElement.textContent = skillDescriptions[skill.title][value];
                return;
            }
            
            // Find the closest grade
            let closestGrade = null;
            let minDifference = Infinity;
            
            Object.entries(skill.grades).forEach(([grade, gradeValue]) => {
                const difference = Math.abs(value - gradeValue);
                if (difference < minDifference) {
                    minDifference = difference;
                    closestGrade = grade;
                }
            });
            
            // Special case: values 9 and 10 correspond to H
            if (value >= 9 && Object.keys(skill.grades).includes("H")) {
                closestGrade = "H";
            }
            
            // If we have a description for this skill at a specific grade level, use it
            if (skillDescriptions[skill.title] && closestGrade && 
                skillDescriptions[skill.title][skill.grades[closestGrade]]) {
                descriptionElement.textContent = skillDescriptions[skill.title][skill.grades[closestGrade]];
            } else {
                // Fallback to general level description
                descriptionElement.textContent = `Уровень ${value}/10 ~ ${closestGrade}: ${skillLevels[value] || 'Выберите уровень владения навыком'}`;
            }
        }

        // Get expected grade for a position
        function getExpectedGradeForPosition(position) {
            if (!position) return "M"; // Default to M if no position selected
            
            const gradeMap = positionToGrade[position];
            if (!gradeMap || gradeMap.length === 0) return "M";
            
            // Return the highest grade for the position
            return gradeMap[gradeMap.length - 1];
        }

        // Analyze button click handler
        document.getElementById('analyzeBtn').addEventListener('click', function() {
            try {
                // Get candidate info
                const candidateName = document.getElementById('candidateName').value || 'Кандидат';
                const desiredGrade = document.getElementById('desiredGrade').value || '';
                const interviewDate = document.getElementById('interviewDate').value || new Date().toISOString().split('T')[0];
                const interviewer = document.getElementById('interviewer').value || 'Неуказанный интервьюер';
                const salary = document.getElementById('salary').value || 'Не указано';
                const comments = document.getElementById('comments').value || '';
                
                // Update display fields
                document.getElementById('salary-display').textContent = salary ? `${salary} бел. руб.` : 'Не указано';
                document.getElementById('desired-grade-display').textContent = desiredGrade ? `${desiredGrade} - ${gradeDescriptions[desiredGrade] || ''}` : 'Не указан';
                document.getElementById('comments-display').textContent = comments || 'Нет комментариев';
                
                // Collect all skill ratings
                const ratings = {};
                skills.forEach(skill => {
                    const rangeElement = document.getElementById(`skill${skill.id}Range`);
                    if (rangeElement) {
                        ratings[skill.id] = parseInt(rangeElement.value);
                    }
                });
                
                // Generate report
                generateReport(candidateName, desiredGrade, interviewDate, interviewer, ratings, salary, comments);
                
                // Show result section
                document.getElementById('result-section').style.display = 'block';
                
                // Scroll to result section
                document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error("Error generating analysis:", error);
                alert("Произошла ошибка при анализе данных. Пожалуйста, проверьте введенную информацию.");
            }
        });

        // Generate report
        function generateReport(name, desiredGrade, date, interviewer, ratings, salary, comments) {
            // Calculate grade matches
            const gradeMatches = calculateGradeMatches(ratings);
            
            // Determine best grade
            const bestGrade = determineBestGrade(gradeMatches);
            
            // Update result section
            document.getElementById('result-grade').textContent = `${name}`;
            document.getElementById('result-description').textContent = `Рекомендуемый грейд: ${bestGrade} (${gradeDescriptions[bestGrade]})
                ${desiredGrade ? `| Желаемый грейд: ${desiredGrade} (${gradeDescriptions[desiredGrade] || ''})` : ''}`;
            
            // Generate detailed skills analysis
            generateDetailedAnalysis(ratings, bestGrade);
            
            // Generate recommendations
            generateRecommendations(ratings, bestGrade, bestGrade, gradeMatches);
            
            // Generate radar chart
            generateSkillsChart(ratings, bestGrade);
        }

        // Calculate grade matches
        function calculateGradeMatches(ratings) {
            const grades = ["J", "J+", "M", "M+", "S", "S+", "L", "L+", "H"];
            const matches = {};
            const exactMatches = {};
            const closeMatches = {};
            
            // Initialize counters
            grades.forEach(grade => {
                matches[grade] = 0;
                exactMatches[grade] = 0;
                closeMatches[grade] = 0;
            });
            
            // Count matches for each skill
            skills.forEach(skill => {
                const rating = ratings[skill.id];
                if (rating === undefined) return; // Skip if rating is not available
                
                Object.entries(skill.grades).forEach(([grade, expectedValue]) => {
                    // Special case for H grade: values 9 and 10 should match
                    if (grade === "H" && (rating === 9 || rating === 10)) {
                        matches[grade] = (matches[grade] || 0) + 1;
                        exactMatches[grade] = (exactMatches[grade] || 0) + 1;
                    }
                    else if (rating === expectedValue) {
                        matches[grade] = (matches[grade] || 0) + 1;
                        exactMatches[grade] = (exactMatches[grade] || 0) + 1;
                    } else if (Math.abs(rating - expectedValue) <= 1) {
                        matches[grade] = (matches[grade] || 0) + 0.5;
                        closeMatches[grade] = (closeMatches[grade] || 0) + 1;
                    }
                });
            });
            
            return { matches, exactMatches, closeMatches };
        }

        // Determine best grade
        function determineBestGrade(gradeMatches) {
            const { matches } = gradeMatches;
            const grades = Object.keys(matches);
            
            // Find grade with highest match count
            let bestGrade = grades[0];
            let highestMatch = matches[bestGrade];
            
            grades.forEach(grade => {
                if (matches[grade] > highestMatch) {
                    highestMatch = matches[grade];
                    bestGrade = grade;
                }
            });
            
            return bestGrade;
        }

        // Generate detailed analysis
        function generateDetailedAnalysis(ratings, expectedGrade) {
            const detailedAnalysis = document.getElementById('detailed-skills-analysis');
            if (!detailedAnalysis) return; // Skip if element doesn't exist
            
            detailedAnalysis.innerHTML = '';
            
            // Group skills by strength level
            const strengths = [];
            const weaknesses = [];
            
            skills.forEach(skill => {
                const rating = ratings[skill.id];
                if (rating === undefined) return; // Skip if rating is not available
                
                const expectedValue = skill.grades[expectedGrade] || 0;
                const difference = rating - expectedValue;
                
                const skillAnalysis = {
                    title: skill.title,
                    rating: rating,
                    expected: expectedValue,
                    difference: difference
                };
                
                if (difference >= 1) {
                    strengths.push(skillAnalysis);
                } else if (difference <= -1) {
                    weaknesses.push(skillAnalysis);
                }
            });
            
            // Sort by difference magnitude
            strengths.sort((a, b) => b.difference - a.difference);
            weaknesses.sort((a, b) => a.difference - b.difference);
            
            // Generate HTML
            let html = '<div class="row">';
            
            // Strengths
            html += `
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0">Сильные стороны</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
            `;
            
            if (strengths.length > 0) {
                strengths.forEach(item => {
                    html += `
                        <li class="list-group-item">
                            <strong>${item.title}</strong>
                            <div class="mt-1">
                                Оценка: ${item.rating}/10 
                                <span class="text-success">(+${item.difference} к ожидаемому)</span>
                            </div>
                        </li>
                    `;
                });
            } else {
                html += `<li class="list-group-item text-muted">Нет выраженных сильных сторон</li>`;
            }
            
            html += `
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            
            // Weaknesses
            html += `
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header bg-warning text-dark">
                            <h6 class="mb-0">Области для развития</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
            `;
            
            if (weaknesses.length > 0) {
                weaknesses.forEach(item => {
                    html += `
                        <li class="list-group-item">
                            <strong>${item.title}</strong>
                            <div class="mt-1">
                                Оценка: ${item.rating}/10 
                                <span class="text-danger">(${item.difference} к ожидаемому)</span>
                            </div>
                        </li>
                    `;
                });
            } else {
                html += `<li class="list-group-item text-muted">Нет выраженных слабых сторон</li>`;
            }
            
            html += `
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            
            html += '</div>';
            detailedAnalysis.innerHTML = html;
        }

        // Generate recommendations
        function generateRecommendations(ratings, bestGrade, expectedGrade, gradeMatches) {
            const recommendationsContainer = document.getElementById('recommendations');
            if (!recommendationsContainer) return; // Skip if element doesn't exist
            
            const grades = ["J", "J+", "M", "M+", "S", "S+", "L", "L+", "H"];
            const currentGradeIndex = grades.indexOf(bestGrade);
            const nextGrade = currentGradeIndex < grades.length - 1 ? grades[currentGradeIndex + 1] : null;
            
            let html = '';
            
            // General recommendation
            html += `
                <p>Кандидат соответствует грейду <strong>${bestGrade}</strong> (${gradeDescriptions[bestGrade]}).</p>
            `;
            
            // Compare with expected grade for position
            if (expectedGrade && expectedGrade !== bestGrade) {
                const expectedIndex = grades.indexOf(expectedGrade);
                const currentIndex = grades.indexOf(bestGrade);
                
                if (currentIndex < expectedIndex) {
                    html += `
                        <div class="alert alert-warning">
                            <i class="bi bi-exclamation-triangle-fill me-2"></i>
                            Фактический грейд кандидата (${bestGrade}) ниже ожидаемого для выбранной должности (${expectedGrade}).
                            Необходимо дополнительное обучение или поиск кандидата с более высоким уровнем компетенций.
                        </div>
                    `;
                } else if (currentIndex > expectedIndex) {
                    html += `
                        <div class="alert alert-info">
                            <i class="bi bi-info-circle-fill me-2"></i>
                            Фактический грейд кандидата (${bestGrade}) выше ожидаемого для выбранной должности (${expectedGrade}).
                            Кандидат может быть сверхквалифицирован или иметь потенциал для более высокой позиции.
                        </div>
                    `;
                }
            }
            
            // Skills to improve for the next grade
            if (nextGrade) {
                const skillsToImprove = [];
                
                skills.forEach(skill => {
                    if (skill.grades[nextGrade]) {
                        const currentRating = ratings[skill.id];
                        if (currentRating === undefined) return; // Skip if rating is not available
                        
                        const nextGradeExpected = skill.grades[nextGrade];
                        
                        if (currentRating < nextGradeExpected - 1) {
                            skillsToImprove.push({
                                title: skill.title,
                                current: currentRating,
                                required: nextGradeExpected,
                                gap: nextGradeExpected - currentRating
                            });
                        }
                    }
                });
                
                if (skillsToImprove.length > 0) {
                    // Sort by gap size (largest first)
                    skillsToImprove.sort((a, b) => b.gap - a.gap);
                    
                    html += `
                        <h6 class="mt-3">Для достижения следующего грейда (${nextGrade}) рекомендуется улучшить:</h6>
                        <ul class="list-group">
                    `;
                    
                    skillsToImprove.forEach(skill => {
                        html += `
                            <li class="list-group-item">
                                <strong>${skill.title}</strong>
                                <div class="mt-1">
                                    Текущая оценка: ${skill.current}/10,
                                    Требуемая: ${skill.required}/10 
                                    <span class="text-danger">(разрыв: ${skill.gap})</span>
                                </div>
                            </li>
                        `;
                    });
                    
                    html += `</ul>`;
                } else {
                    html += `
                        <div class="alert alert-success mt-3">
                            <i class="bi bi-check-circle-fill me-2"></i>
                            Кандидат близок к достижению следующего грейда (${nextGrade}). Рекомендуется рассмотреть возможность повышения в ближайшее время при стабильных результатах работы.
                        </div>
                    `;
                }
            } else {
                html += `
                    <div class="alert alert-info mt-3">
                        <i class="bi bi-info-circle-fill me-2"></i>
                        Кандидат достиг наивысшего грейда в системе оценки.
                    </div>
                `;
            }
            
            recommendationsContainer.innerHTML = html;
        }

        // Generate radar chart
        function generateSkillsChart(ratings, expectedGrade) {
            const chartCanvas = document.getElementById('skills-radar-chart');
            if (!chartCanvas) return; // Skip if element doesn't exist
            
            const ctx = chartCanvas.getContext('2d');
            
            // Prepare data
            const labels = skills.map(skill => skill.title.substring(0, 30) + (skill.title.length > 30 ? '...' : ''));
            const candidateData = skills.map(skill => ratings[skill.id] || 0);
            const expectedData = skills.map(skill => skill.grades[expectedGrade] || 0);
            
            // Create or update chart
            if (window.skillsChart) {
                window.skillsChart.destroy();
            }
            
            window.skillsChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Оценка кандидата',
                            data: candidateData,
                            backgroundColor: 'rgba(93, 92, 222, 0.2)',
                            borderColor: 'rgba(93, 92, 222, 1)',
                            pointBackgroundColor: 'rgba(93, 92, 222, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(93, 92, 222, 1)'
                        },
                        {
                            label: `Ожидаемый уровень (${expectedGrade})`,
                            data: expectedData,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
                        }
                    ]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 2
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    aspectRatio: 1.5
                }
            });
        }

        // Open report in new tab
        document.getElementById('openReportBtn').addEventListener('click', function() {
            try {
                // Get candidate info
                const candidateName = document.getElementById('candidateName').value || 'Кандидат';
                const desiredGrade = document.getElementById('desiredGrade').value || '';
                const interviewDate = document.getElementById('interviewDate').value || new Date().toISOString().split('T')[0];
                const interviewer = document.getElementById('interviewer').value || 'Неуказанный интервьюер';
                const salary = document.getElementById('salary').value || 'Не указано';
                const comments = document.getElementById('comments').value || 'Нет комментариев';
                
                // Get grade info
                const gradeElement = document.getElementById('result-grade');
                const gradeDescriptionElement = document.getElementById('result-description');
                
                if (!gradeElement || !gradeDescriptionElement) {
                    throw new Error("Результаты анализа не найдены");
                }
                
                // Get chart image
                const chartCanvas = document.getElementById('skills-radar-chart');
                let chartImage = '';
                
                if (chartCanvas) {
                    try {
                        chartImage = chartCanvas.toDataURL('image/png');
                    } catch (e) {
                        console.error('Error converting chart to image:', e);
                    }
                }
                
                // Create HTML content for the report
                const reportHTML = `
                <!DOCTYPE html>
                <html lang="ru">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Отчет по кандидату: ${candidateName}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            margin: 0;
                            padding: 20px;
                            color: #333;
                        }
                        .header {
                            text-align: center;
                            margin-bottom: 30px;
                            padding-bottom: 20px;
                            border-bottom: 1px solid #ddd;
                        }
                        .section {
                            margin-bottom: 30px;
                            padding-bottom: 20px;
                            border-bottom: 1px solid #eee;
                        }
                        h1 {
                            color: #333;
                        }
                        h2 {
                            color: #5D5CDE;
                            margin-top: 30px;
                        }
                        h3 {
                            color: #333;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 15px 0;
                        }
                        table, th, td {
                            border: 1px solid #ddd;
                        }
                        th, td {
                            padding: 10px;
                            text-align: left;
                        }
                        th {
                            background-color: #f8f8f8;
                            width: 30%;
                        }
                        .strength {
                            color: #28a745;
                        }
                        .weakness {
                            color: #dc3545;
                        }
                        .recommendation {
                            margin: 15px 0;
                            padding: 15px;
                            background-color: #f8f8f8;
                            border-radius: 5px;
                        }
                        .footer {
                            margin-top: 30px;
                            text-align: center;
                            font-size: 0.8em;
                            color: #777;
                        }
                        .chart-container {
                            display: flex;
                            justify-content: center;
                            margin: 20px 0;
                            width: 100%;
                        }
                        .print-button {
                            background-color: #5D5CDE;
                            color: white;
                            border: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 16px;
                            margin: 20px 0;
                        }
                        .print-button:hover {
                            background-color: #4b4ab2;
                        }
                        .comments {
                            background-color: #f9f9f9;
                            padding: 15px;
                            border-radius: 5px;
                            margin-top: 15px;
                            white-space: pre-line;
                        }
                        .info-row {
                            display: flex;
                            justify-content: space-between;
                            margin: 20px 0;
                        }
                        .info-card {
                            flex: 1;
                            margin: 0 10px;
                            padding: 15px;
                            background-color: #f9f9f9;
                            border-radius: 5px;
                            border: 1px solid #eee;
                        }
                        .info-card h4 {
                            margin-top: 0;
                            color: #5D5CDE;
                        }
                        @media print {
                            .print-button {
                                display: none;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>Отчет по анализу кандидата</h1>
                        <p>Дата: ${interviewDate}</p>
                        <button class="print-button" onclick="window.print()">Распечатать отчет</button>
                    </div>
                    
                    <div class="section">
                        <h2>Информация о кандидате</h2>
                        <table>
                            <tr>
                                <th>ФИО</th>
                                <td>${candidateName}</td>
                            </tr>
                            <tr>
                                <th>Желаемый грейд</th>
                                <td>${desiredGrade ? `${desiredGrade} - ${gradeDescriptions[desiredGrade] || ''}` : 'Не указан'}</td>
                            </tr>
                            <tr>
                                <th>Финансовые ожидания</th>
                                <td>${salary} бел. руб.</td>
                            </tr>
                            <tr>
                                <th>Дата интервью</th>
                                <td>${interviewDate}</td>
                            </tr>
                            <tr>
                                <th>Интервьюер</th>
                                <td>${interviewer}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="section">
                        <h2>Итоговая оценка</h2>
                        <p><strong>${gradeElement.textContent}</strong></p>
                        <p>${gradeDescriptionElement.textContent}</p>
                        
                        <div class="chart-container">
                            ${chartImage ? `<img src="${chartImage}" alt="График навыков" style="max-width: 100%;">` : '<p>График недоступен</p>'}
                        </div>
                        
                        <div class="info-row">
                            <div class="info-card">
                                <h4>Финансовые ожидания</h4>
                                <p>${salary} бел. руб.</p>
                            </div>
                            <div class="info-card">
                                <h4>Желаемый грейд</h4>
                                <p>${desiredGrade ? `${desiredGrade} - ${gradeDescriptions[desiredGrade] || ''}` : 'Не указан'}</p>
                            </div>
                            <div class="info-card">
                                <h4>Комментарий</h4>
                                <p>${comments}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <h2>Детальный анализ навыков</h2>
                        
                        <h3>Сильные стороны</h3>
                        <div id="report-strengths">
                            ${generateReportStrengths()}
                        </div>
                        
                        <h3>Области для развития</h3>
                        <div id="report-weaknesses">
                            ${generateReportWeaknesses()}
                        </div>
                    </div>
                    
                    <div class="section">
                        <h2>Рекомендации</h2>
                        <div class="recommendation">
                            ${document.getElementById('recommendations').innerHTML}
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>Отчет сформирован автоматически с помощью Анализатора кандидатов на интервью.</p>
                        <p>© ${new Date().getFullYear()}</p>
                    </div>
                </body>
                </html>
                `;
                
                // Open new tab with report
                const reportWindow = window.open('', '_blank');
                if (reportWindow) {
                    reportWindow.document.write(reportHTML);
                    reportWindow.document.close();
                } else {
                    alert("Пожалуйста, разрешите открытие всплывающих окон для этого сайта, чтобы просмотреть отчет.");
                }
            } catch (error) {
                console.error("Error generating report:", error);
                alert("Произошла ошибка при создании отчета. Пожалуйста, сформируйте анализ перед просмотром отчета.");
            }
        });

        // Helper functions for report generation
        function generateReportStrengths() {
            try {
                const strengthsItems = document.querySelectorAll('.col-md-6:first-child .list-group-item');
                let html = '<ul>';
                
                if (!strengthsItems || strengthsItems.length === 0) {
                    return '<p>Информация о сильных сторонах недоступна</p>';
                }
                
                strengthsItems.forEach(item => {
                    if (!item.classList.contains('text-muted')) {
                        html += `<li>${item.innerHTML}</li>`;
                    } else {
                        html += `<li>${item.textContent}</li>`;
                    }
                });
                
                html += '</ul>';
                return html;
            } catch (error) {
                console.error("Error generating strengths report:", error);
                return '<p>Не удалось сформировать список сильных сторон</p>';
            }
        }

        function generateReportWeaknesses() {
            try {
                const weaknessItems = document.querySelectorAll('.col-md-6:last-child .list-group-item');
                let html = '<ul>';
                
                if (!weaknessItems || weaknessItems.length === 0) {
                    return '<p>Информация об областях для развития недоступна</p>';
                }
                
                weaknessItems.forEach(item => {
                    if (!item.classList.contains('text-muted')) {
                        html += `<li>${item.innerHTML}</li>`;
                    } else {
                        html += `<li>${item.textContent}</li>`;
                    }
                });
                
                html += '</ul>';
                return html;
            } catch (error) {
                console.error("Error generating weaknesses report:", error);
                return '<p>Не удалось сформировать список областей для развития</p>';
            }
        }
