import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Dialog } from '../components/Dialog';
import { css } from '../../styled-system/css';

export const Theory: React.FC = () => {
    const [modalData, setModalData] = useState<{ title: string; body: string } | null>(null);

    const containerStyle = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        animation: 'fadeIn 0.5s ease-out',
    });

    const pageTitle = css({
        fontSize: '1.75rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        _before: {
            content: '""',
            display: 'inline-block',
            width: '4px',
            height: '28px',
            background: 'linear-gradient(to bottom, var(--colors-brand-primary), var(--colors-brand-secondary))',
            borderRadius: 'pill',
        }
    });

    const grid2 = css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
        gap: '24px',
    });

    const textStyle = css({
        fontSize: '0.975rem',
        lineHeight: '1.6',
        color: 'var(--colors-brand-text-main)',
        textAlign: 'justify',
        marginBottom: '16px',
        _last: {
            marginBottom: '0',
        }
    });

    const calendarList = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
    });

    const calendarItem = css({
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        background: 'var(--colors-brand-bg-main)',
        borderRadius: 'innerCard',
        borderLeft: '4px solid',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        _hover: {
            transform: 'translateX(4px)',
            background: 'var(--colors-brand-primary-light)',
        }
    });

    const calendarDate = css({
        fontSize: '0.95rem',
        fontWeight: 'bold',
        color: 'var(--colors-brand-primary-dark)',
        whiteSpace: 'nowrap',
        minWidth: '90px',
    });

    const calendarTitle = css({
        fontSize: '0.95rem',
        fontWeight: '700',
        color: 'var(--colors-brand-text-main)',
    });

    const calendarHint = css({
        fontSize: '0.8rem',
        color: 'var(--colors-brand-text-muted)',
        marginTop: '2px',
    });

    const timelineSectionTitle = css({
        fontSize: '1.25rem',
        color: 'var(--colors-brand-text-main)',
        marginTop: '16px',
        fontWeight: '800',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--colors-brand-primary-light), var(--colors-brand-secondary-light))',
        padding: '16px',
        borderRadius: 'card',
        border: '1px solid var(--colors-brand-border-light)',
    });

    const timelineContainer = css({
        position: 'relative',
        paddingLeft: '24px',
        margin: '15px 0',
        _before: {
            content: '""',
            position: 'absolute',
            left: '5px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--colors-brand-primary), var(--colors-brand-secondary))',
            borderRadius: 'pill',
        }
    });

    const timelineNode = css({
        position: 'relative',
        marginBottom: '24px',
        paddingLeft: '15px',
        _last: {
            marginBottom: '0',
        },
        _before: {
            content: '""',
            position: 'absolute',
            left: '-24px',
            top: '6px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'white',
            border: '3px solid var(--colors-brand-primary-dark)',
            boxShadow: '0 0 0 4px var(--colors-brand-primary-light)',
            transition: 'all 0.2s',
            zIndex: 2,
        },
        _hover: {
            _before: {
                background: 'var(--colors-brand-secondary)',
                borderColor: 'var(--colors-brand-secondary)',
                boxShadow: '0 0 0 6px var(--colors-brand-secondary-light)',
            }
        }
    });

    const timelineMeta = css({
        display: 'inline-block',
        fontSize: '0.8rem',
        fontWeight: '800',
        color: 'var(--colors-brand-primary-dark)',
        background: 'var(--colors-brand-primary-light)',
        padding: '2px 10px',
        borderRadius: 'pill',
        marginBottom: '6px',
    });

    const timelineContent = css({
        fontSize: '0.925rem',
        color: 'var(--colors-brand-text-main)',
        lineHeight: '1.5',
    });

    const calendarDays = [
        {
            date: "2 квітня",
            title: "Всесвітній день поширення інформації про аутизм",
            color: "var(--colors-nozology-ras)",
            details: "Всесвітній день поширення інформації про аутизм. Фокус на створенні передбачуваного та візуально structured середовища для учнів з РАС."
        },
        {
            date: "3 грудня",
            title: "Міжнародний день людей з обмеженими можливостями",
            color: "var(--colors-nozology-ora)",
            details: "Міжнародний день людей з обмеженими фізичними можливостями. Актуалізація доступності, архітектурних рішень та універсального дизайну в навчанні."
        },
        {
            date: "24 січня",
            title: "Міжнародний день освіти",
            color: "var(--colors-nozology-rdug)",
            details: "Міжнародний день освіти. Наголошення на праві кожної дитини (включаючи учнів з ООП та ТОП) на якісне та безпечне навчання."
        }
    ];

    const internationalTimeline = [
        { year: "1948 р.", title: "Загальна декларація прав людини", desc: "вперше проголосила рівність прав в отриманні базової освіти." },
        { year: "1960 р.", title: "Конвенція про боротьбу з дискримінацією в галузі освіти", desc: "заборона будь-кої сегрегації чи обмежень учнів." },
        { year: "1989 р.", title: "Конвенція про права дитини", desc: "зафіксувала право на повноцінне життя та інтеграцію дітей з особливими потребами." },
        { year: "1990 р.", title: "Всесвітня декларація «Освіта для всіх»", desc: "глобальний заклик до задоволення базових потреб у навчанні." },
        { year: "1993 р.", title: "Standard Rules on the Equalization of Opportunities for Persons with Disabilities", desc: "інклюзія визнана пріоритетом розвитку освітніх систем." },
        { year: "1994 р.", title: "Саламанська декларація і План дій", desc: "офіційне світове визнання терміна «інклюзивна освіта» та її принципів." },
        { year: "1994 р.", title: "Програма дій щодо освіти осіб з особливими освітніми потребами", desc: "методологічні орієнтири для реформ." },
        { year: "2000 р.", title: "Дакарські рамки дій", desc: "підтвердження обов'язків країн ліквідувати нерівність доступу до навчання." },
        { year: "2006 р.", title: "Конвенція ООН про права осіб з інвалідністю", desc: "стаття 24 повністю гарантує права на недискримінаційну інклюзивну освіту." },
        { year: "2015 р.", title: "Інчхонська декларація", desc: "формування дорожньої карти розвитку світової освіти до 2030 року." }
    ];

    const domesticTimeline = [
        { year: "2010 р. (6 липня)", title: "Внесення змін до ЗУ «Про загальну середню освіту» (№2442-VI)", desc: "законодавче запровадження перших класів з інклюзивним навчанням." },
        { year: "2010 р. (1 жовтня)", title: "Наказ МОН України №912", desc: "затвердження Концепції розвитку інклюзивного навчання в країні." },
        { year: "2011 р. (15 серпня)", title: "Постанова КМУ №872", desc: "регламентація детального Порядку організації інклюзивного навчання в ЗНЗ." },
        { year: "2016 р. (27 жовтня)", title: "Старт реформи Нової української школи (НУШ)", desc: "ухвалення філософії дитиноцентризму, рівності, безбар'єрності та повної доступності освіти." },
        { year: "2017 р. (5 вересня)", title: "Зміни до Закону України «Про освіту» (№2145-VII)", desc: "закріплення понять «ООП», «індивідуальна програма розвитку» та державних субвенцій на супровід." }
    ];

    return (
        <div className={containerStyle}>
            <h2 className={pageTitle}>Теоретичні засади дослідження феномена інклюзії</h2>

            <div className={grid2}>
                <Card glowColor="var(--colors-brand-primary)">
                    <h3 className={css({ fontSize: '1.2rem', fontWeight: '800', color: 'var(--colors-brand-primary-dark)', marginBottom: '16px' })}>
                        📚 Концептуалізація поняття
                    </h3>
                    <p className={textStyle}>
                        Слово <strong>«інклюзія»</strong> сходить до латинського <em>inclusio</em> («замикання»), тобто «включення усередину». Первісне значення мало обмежувально-фізичну конотацію, але втратило її в англійському мовному просторі XVI ст., набувши значення <strong>«акту включення до складу»</strong>.
                    </p>
                    <p className={textStyle}>
                        <strong>Корпусний аналіз:</strong> Емпірична верифікація за допомогою інструментарію <em>Google Books Ngram Viewer</em> засвідчує різкий стрибок частотності функціювання лексеми <em>inclusion</em> на межі XX–XXI століть із піковими показниками у період 2010–2020-х років.
                    </p>
                </Card>

                <Card glowColor="var(--colors-brand-secondary)">
                    <h3 className={css({ fontSize: '1.2rem', fontWeight: '800', color: 'var(--colors-brand-secondary-dark)', marginBottom: '16px' })}>
                        📅 Календар інклюзивного амбасадора
                    </h3>
                    <div className={calendarList}>
                        {calendarDays.map((day, idx) => (
                            <div
                                key={idx}
                                className={calendarItem}
                                style={{ borderLeftColor: day.color }}
                                onClick={() => setModalData({ title: `📅 ${day.date}`, body: day.details })}
                            >
                                <span className={calendarDate}>🔹 {day.date}</span>
                                <div>
                                    <strong className={calendarTitle}>{day.title}</strong>
                                    <p className={calendarHint}>Натисніть для перегляду деталей.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <div className={timelineSectionTitle}>
                ⚖️ Нормативно-правова еволюція інклюзивної освіти
            </div>

            <div className={grid2}>
                {/* International */}
                <Card glowColor="var(--colors-brand-primary)">
                    <h3 className={css({ color: 'var(--colors-brand-primary-dark)', fontSize: '1.15rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' })}>
                        <span>🌍</span> Міжнародний вимір
                    </h3>
                    <div className={timelineContainer}>
                        {internationalTimeline.map((item, idx) => (
                            <div key={idx} className={timelineNode}>
                                <div className={timelineMeta}>{item.year}</div>
                                <div className={timelineContent}>
                                    <strong>{item.title}</strong> — {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Domestic */}
                <Card glowColor="var(--colors-brand-secondary)">
                    <h3 className={css({ color: 'var(--colors-brand-secondary-dark)', fontSize: '1.15rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' })}>
                        <span>🇺🇦</span> Вітчизняне законодавче поле
                    </h3>
                    <div className={timelineContainer}>
                        {domesticTimeline.map((item, idx) => (
                            <div key={idx} className={timelineNode}>
                                <div className={timelineMeta}>{item.year}</div>
                                <div className={timelineContent}>
                                    <strong>{item.title}</strong> — {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Notification Dialog */}
            <Dialog
                isOpen={modalData !== null}
                onClose={() => setModalData(null)}
                title={modalData?.title || ''}
            >
                <p className={css({ color: 'var(--colors-brand-text-main)', fontSize: '1rem', lineHeight: '1.6', margin: '0 0 16px 0' })}>
                    {modalData?.body}
                </p>
            </Dialog>
        </div>
    );
};
