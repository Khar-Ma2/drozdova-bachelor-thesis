import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { recsDatabase } from '../features/data';
import { css, cx } from '../../styled-system/css';

interface RecommendationsProps {
    defaultSubTab?: 'handbook' | 'constructor';
}

export const Recommendations: React.FC<RecommendationsProps> = ({ defaultSubTab = 'handbook' }) => {
    const [activeTab, setActiveTab] = useState<'handbook' | 'constructor'>(defaultSubTab);

    useEffect(() => {
        setActiveTab(defaultSubTab);
    }, [defaultSubTab]);
    const [selectedNozology, setSelectedNozology] = useState<string>('ras');
    const [symptoms, setSymptoms] = useState<Record<string, boolean>>({
        ind_form: false,
        fatigue: false,
        regulation: false,
        air_alert: false,
        speech_barrier: false,
        sensory_hyper: false,
    });

    const toggleSymptom = (key: string) => {
        setSymptoms(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

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

    const tabsHeader = css({
        display: 'flex',
        gap: '12px',
        borderBottom: '1px solid var(--colors-brand-border-light)',
        paddingBottom: '12px',
        marginBottom: '12px',
    });

    const tabTrigger = css({
        padding: '10px 20px',
        borderRadius: 'pill',
        fontWeight: '700',
        fontSize: '0.925rem',
        cursor: 'pointer',
        transition: 'all 0.2s',
        border: '1px solid transparent',
        background: 'transparent',
        color: 'var(--colors-brand-text-muted)',

        _hover: {
            color: 'var(--colors-brand-primary)',
            background: 'var(--colors-brand-primary-light)',
        }
    });

    const activeTabTrigger = css({
        background: 'var(--colors-brand-primary)!',
        color: 'white!',
        boxShadow: '0 4px 10px rgba(99, 102, 241, 0.2)',
    });

    const handbookLayout = css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '300px 1fr' },
        gap: '32px',
        alignItems: 'start',
    });

    const sidebarList = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    });

    const sidebarBtn = css({
        padding: '16px',
        borderRadius: 'innerCard',
        border: '1px solid var(--colors-brand-border-light)',
        background: 'var(--colors-brand-bg-card)',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',

        _hover: {
            background: 'var(--colors-brand-primary-light)',
            borderColor: 'rgba(99, 102, 241, 0.2)',
            transform: 'translateX(6px)',
        }
    });

    const activeSidebarBtn = css({
        background: 'var(--colors-brand-primary-light)!',
        borderColor: 'var(--colors-brand-primary)!',
        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.08)',
    });

    const sidebarIconContainer = css({
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: 'var(--colors-brand-bg-page)',
        flexShrink: 0,
        boxShadow: 'soft',
    });

    const sidebarContent = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    });

    const sidebarTitle = css({
        fontSize: '0.95rem',
        fontWeight: '700',
        color: 'var(--colors-brand-text-main)',
    });

    const sidebarSubtitle = css({
        fontSize: '0.775rem',
        fontWeight: '600',
        color: 'var(--colors-brand-text-muted)',
    });

    const contentPane = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    });

    const categoryHeader = css({
        padding: '24px',
        borderRadius: 'card',
        border: '1px solid var(--colors-brand-border-light)',
        background: 'var(--colors-brand-bg-card)',
        position: 'relative',
        overflow: 'hidden',
        _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--header-glow)',
        }
    });

    const categoryTitle = css({
        fontSize: '1.25rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
    });

    const recsList = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    });

    const recItemCard = css({
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
    });

    const itemNum = css({
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'var(--colors-brand-primary-light)',
        color: 'var(--colors-brand-primary-dark)',
        fontWeight: '800',
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '32px',
    });

    const itemContent = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        width: '100%',
    });

    const itemTitle = css({
        fontSize: '1.05rem',
        fontWeight: '700',
        color: 'var(--colors-brand-text-main)',
    });

    const itemText = css({
        fontSize: '0.925rem',
        color: 'var(--colors-brand-text-muted)',
        lineHeight: '1.6',
        textAlign: 'justify',
    });

    const expertTipBox = css({
        marginTop: '12px',
        padding: '14px 16px',
        borderRadius: 'innerCard',
        background: 'var(--colors-brand-bg-page)',
        borderLeft: '4px solid var(--tip-color)',
        fontSize: '0.875rem',
        lineHeight: '1.6',
        color: 'var(--colors-brand-text-main)',
        fontWeight: '600',
        boxShadow: 'soft',
    });

    // Constructor styles
    const constructorGrid = css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
        gap: '32px',
        alignItems: 'start',
    });

    const optionCard = css({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        borderRadius: 'innerCard',
        border: '1px solid var(--colors-brand-border-light)',
        background: 'var(--colors-brand-bg-card)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginBottom: '10px',
        _last: {
            marginBottom: '0',
        },
        _hover: {
            background: 'var(--colors-brand-primary-light)',
            borderColor: 'rgba(99, 102, 241, 0.2)',
        }
    });

    const activeOptionCard = css({
        background: 'var(--colors-brand-primary-light)!',
        borderColor: 'rgba(99, 102, 241, 0.4)!',
    });

    const checkboxStyle = css({
        width: '18px',
        height: '18px',
        accentColor: 'var(--colors-brand-primary)',
        cursor: 'pointer',
    });

    const optionText = css({
        fontSize: '0.925rem',
        fontWeight: '600',
        color: 'var(--colors-brand-text-main)',
        userSelect: 'none',
    });

    const strategyPlaceholder = css({
        color: 'var(--colors-brand-text-muted)',
        fontSize: '0.95rem',
        textAlign: 'center',
        padding: '40px 20px',
        border: '2px dashed var(--colors-brand-border-light)',
        borderRadius: 'innerCard',
    });

    const strategyList = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        paddingLeft: '20px',
        marginTop: '16px',
        listStyleType: 'disc',
    });

    const strategyItem = css({
        fontSize: '0.925rem',
        color: 'var(--colors-brand-text-main)',
        lineHeight: '1.6',
        textAlign: 'justify',
        marginBottom: '12px',
        _last: {
            marginBottom: '0',
        }
    });

    const nozologyCategories = [
        { id: 'ras', icon: '🧩', title: 'Учні з РАС', subtitle: '6 практичних кроків', color: 'var(--colors-nozology-ras)' },
        { id: 'top', icon: '🕊️', title: 'Діти з ТОП (Війна)', subtitle: '4 практичні кроки', color: 'var(--colors-nozology-top)' },
        { id: 'ora', icon: '♿', title: 'Учні з порушенням ОРА', subtitle: '5 практичних кроків', color: 'var(--colors-nozology-ora)' },
        { id: 'zpr', icon: '🧠', title: 'Учні з ЗПР', subtitle: '3 практичні кроки', color: 'var(--colors-nozology-zpr)' },
        { id: 'rdug', icon: '⚡', title: 'Учні з РДУГ', subtitle: '5 практичних кроків', color: 'var(--colors-nozology-rdug)' },
        { id: 'znm', icon: '🗣️', title: 'Учні з ЗНМ', subtitle: '4 практичні кроки', color: 'var(--colors-nozology-znm)' },
    ];

    const activeRec = recsDatabase[selectedNozology] || recsDatabase.ras;

    const constructorOptions = [
        { id: 'ind_form', text: "Потреба в індивідуальній формі та особливому темпі" },
        { id: 'fatigue', text: "Швидка когнітивна втомлюваність та виснаження" },
        { id: 'regulation', text: "Слабкість саморегуляції, потреба в асистенті" },
        { id: 'air_alert', text: "Гостра реакція на сигнали повітряної тривоги" },
        { id: 'speech_barrier', text: "Труднощі відтворення лексики та порушення вимови" },
        { id: 'sensory_hyper', text: "Сенсорна гіперчутливість до сильного шуму" },
    ];

    const expertTips: Record<string, Record<number, string>> = {
        ras: {
            6: "💡 Порада вчителю: Завжди тримайте готовими картки PECS швидкого реагування, навіть якщо дитина розмовляє. У стані сенсорного перевантаження мовленнєвий центр блокується найпершим."
        },
        top: {
            1: "💡 Порада вчителю: Зберігайте гнучкість. Якщо тема «My Home» викликає сльози, миттєво перемикайтеся на малювання вигаданого казкового замку для ельфа."
        },
        rdug: {
            5: "💡 Порада вчителю: Під час евакуації в укриття доручіть дитині з РДУГ «відповідальну місію» (наприклад, тримати ліхтарик або стежити за орієнтирами). Це фокусує увагу та збиває тривожність."
        }
    };

    const hasAnySymptom = Object.values(symptoms).some(v => v);

    return (
        <div className={containerStyle}>
            <div>
                <h2 className={pageTitle}>Рекомендаційний Довідник та Діагностичний Конструктор</h2>
                <p className={css({ color: 'var(--colors-brand-text-muted)', marginTop: '-12px', marginBottom: '24px' })}>
                    Методична база та інтерактивні прийоми інклюзивного супроводу
                </p>
            </div>

            {/* TAB SELECTION */}
            <div className={tabsHeader}>
                <button
                    className={cx(tabTrigger, activeTab === 'handbook' && activeTabTrigger)}
                    onClick={() => setActiveTab('handbook')}
                >
                    📖 Довідник рекомендацій
                </button>
                <button
                    className={cx(tabTrigger, activeTab === 'constructor' && activeTabTrigger)}
                    onClick={() => setActiveTab('constructor')}
                >
                    🛠️ Експрес-конструктор стратегій
                </button>
            </div>

            {/* HANDBOOK TAB VIEW */}
            {activeTab === 'handbook' && (
                <div className={handbookLayout}>
                    {/* Sidebar categories selector */}
                    <div className={sidebarList}>
                        {nozologyCategories.map(cat => (
                            <div
                                key={cat.id}
                                className={cx(sidebarBtn, selectedNozology === cat.id && activeSidebarBtn)}
                                style={selectedNozology === cat.id ? { borderLeft: `4px solid ${cat.color}` } : {}}
                                onClick={() => setSelectedNozology(cat.id)}
                            >
                                <div className={sidebarIconContainer}>{cat.icon}</div>
                                <div className={sidebarContent}>
                                    <h4 className={sidebarTitle}>{cat.title}</h4>
                                    <span className={sidebarSubtitle}>{cat.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content pane */}
                    <div className={contentPane}>
                        <div className={categoryHeader} style={{ '--header-glow': activeRec.badgeColor } as React.CSSProperties}>
                            <h3 className={categoryTitle}>{activeRec.title}</h3>
                        </div>

                        <div className={recsList}>
                            {activeRec.items.map((item) => {
                                const tip = expertTips[selectedNozology]?.[item.num];
                                return (
                                    <Card key={item.num} className={recItemCard}>
                                        <div className={itemNum}>{item.num}</div>
                                        <div className={itemContent}>
                                            <h4 className={itemTitle}>{item.title}</h4>
                                            <p className={itemText}>{item.text}</p>
                                            {tip && (
                                                <div 
                                                    className={expertTipBox} 
                                                    style={{ '--tip-color': activeRec.badgeColor } as React.CSSProperties}
                                                >
                                                    {tip}
                                                </div>
                                            )}
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* DIAGNOSTIC CONSTRUCTOR TAB VIEW */}
            {activeTab === 'constructor' && (
                <div className={constructorGrid}>
                    {/* Checklist form */}
                    <Card>
                        <h3 className={css({ fontSize: '1.2rem', fontWeight: '800', color: 'var(--colors-brand-text-main)', marginBottom: '16px' })}>
                            🔍 Виявлена симптоматика у дитини:
                        </h3>
                        <p className={css({ fontSize: '0.875rem', color: 'var(--colors-brand-text-muted)', marginBottom: '20px' })}>
                            Оберіть маркери поведінки та діяльності учня на уроках англійської мови, щоб сформувати індивідуальні компенсаторні стратегії:
                        </p>

                        <div>
                            {constructorOptions.map(opt => (
                                <div
                                    key={opt.id}
                                    className={cx(optionCard, symptoms[opt.id] && activeOptionCard)}
                                    onClick={() => toggleSymptom(opt.id)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={symptoms[opt.id]}
                                        onChange={() => {}} // Controlled click handles it
                                        className={checkboxStyle}
                                    />
                                    <span className={optionText}>{opt.text}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Results panel */}
                    <Card glowColor="var(--colors-nozology-ora)">
                        <h3 className={css({ fontSize: '1.2rem', fontWeight: '800', color: 'var(--colors-brand-secondary-dark)', marginBottom: '16px' })}>
                            📋 Комплексна стратегія підтримки:
                        </h3>

                        {!hasAnySymptom ? (
                            <div className={strategyPlaceholder}>
                                Позначте хоча б один маркер ліворуч для автоматичної побудови карти компенсаторного навчання.
                            </div>
                        ) : (
                            <div>
                                <h4 className={css({ color: 'var(--colors-nozology-ora)', fontWeight: '800', fontSize: '1.05rem', marginBottom: '12px' })}>
                                    🌟 Персоналізований комплекс рекомендацій:
                                </h4>
                                <ul className={strategyList}>
                                    {symptoms.ind_form && (
                                        <li className={strategyItem}>
                                            <strong>При потребі індивідуального темпу (ЗПР, ОРА, РАС):</strong> Робота в індивідуальному спокійному темпі. Фронтальні методи є неефективними. Доцільно впроваджувати прийоми скафолдингу: <em>Sentence Starters Frame</em> та індивідуальні карти процесів.
                                        </li>
                                    )}
                                    {symptoms.fatigue && (
                                        <li className={strategyItem}>
                                            <strong>При швидкому когнітивному виснаженні (ЗПР, ЗНМ, РДУГ):</strong> Дробіть завдання на короткі сесії (до 5-7 хвилин). Складні та усні види діяльності плануйте на першу третину уроку. Впроваджуйте <em>Task Visual Checklist</em>.
                                        </li>
                                    )}
                                    {symptoms.regulation && (
                                        <li className={strategyItem}>
                                            <strong>Для розвитку саморегуляції (РАС, РДУГ):</strong> Забезпечуйте чітку візуальну структуру кожного уроку. Використовуйте тактильні заземлювачі (м'які предмети) та елементи ізотерапії за допомогою асистента вчителя.
                                        </li>
                                    )}
                                    {symptoms.air_alert && (
                                        <li className={strategyItem}>
                                            <strong>Реакція на сигнали небезпеки (ТОП, РДУГ):</strong> Попереднє заспокоєння дитини, рух до укриття в звичному ритмі із фокусом на дихальні стабілізуючі практики англійською (<em>Breathe and Listen Ritual</em>).
                                        </li>
                                    )}
                                    {symptoms.speech_barrier && (
                                        <li className={strategyItem}>
                                            <strong>Порушення вимови та мовлення (ЗНМ):</strong> Знизьте навантаження на текстове переписування. Задійте мультисенсорний підхід із яскравою аудіовізуальною опорою. Корисними будуть прийоми <em>Finger Writing</em> та <em>Sensory Bag</em>.
                                        </li>
                                    )}
                                    {symptoms.sensory_hyper && (
                                        <li className={strategyItem}>
                                            <strong>При сенсорній гіперчутливості до шумів (РАС):</strong> Облаштуйте відокремлене робоче місце подалі від джерел акустичного навантаження. Забезпечте можливість короткочасного відпочинку. Прийом: <em>Nature Sounds</em>.
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </Card>
                </div>
            )}
        </div>
    );
};
