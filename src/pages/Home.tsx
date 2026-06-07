import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { css } from '../../styled-system/css';

interface HomeProps {
    onNavigate: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const pageContainer = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        animation: 'fadeIn 0.5s ease-out',
    });

    const heroBanner = css({
        background: 'linear-gradient(135deg, #ffffff 0%, var(--colors-brand-primary-light) 100%)',
        borderRadius: 'card',
        padding: { base: '32px 24px', md: '56px 48px' },
        textAlign: 'center',
        boxShadow: 'soft',
        border: '1px solid var(--colors-brand-border-light)',
        position: 'relative',
        overflow: 'hidden',
        _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, var(--colors-brand-primary), var(--colors-brand-secondary), var(--colors-nozology-ras))',
        }
    });

    const heroTitle = css({
        fontSize: { base: '1.75rem', md: '2.5rem' },
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        lineHeight: '1.2',
        marginBottom: '16px',
        letterSpacing: '-0.5px',
    });

    const heroSubtitle = css({
        fontSize: { base: '1rem', md: '1.2rem' },
        color: 'var(--colors-brand-primary-dark)',
        fontWeight: '600',
        maxWidth: '850px',
        margin: '0 auto 16px auto',
        lineHeight: '1.4',
    });

    const heroDesc = css({
        fontSize: '0.95rem',
        color: 'var(--colors-brand-text-muted)',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6',
    });

    const homeGrid = css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '320px 1fr' },
        gap: '32px',
        alignItems: 'start',
    });

    const authorCardStyle = css({
        background: 'var(--colors-brand-bg-card)',
        textAlign: 'center',
        position: { lg: 'sticky' },
        top: '100px',
    });

    const avatar = css({
        width: '110px',
        height: '110px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--colors-brand-primary-light), var(--colors-brand-secondary-light))',
        margin: '0 auto 16px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        border: '4px solid white',
        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.15)',
    });

    const authorName = css({
        fontSize: '1.25rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        marginBottom: '6px',
    });

    const authorRole = css({
        fontSize: '0.8rem',
        color: 'var(--colors-brand-primary-dark)',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        background: 'var(--colors-brand-primary-light)',
        padding: '6px 16px',
        borderRadius: 'pill',
        display: 'inline-block',
        marginBottom: '20px',
    });

    const detailsList = css({
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        borderTop: '1px dashed',
        borderColor: 'var(--colors-brand-border-light)',
        paddingTop: '20px',
    });

    const detailItem = css({
        fontSize: '0.875rem',
        lineHeight: '1.4',
    });

    const detailLabel = css({
        fontWeight: '700',
        color: 'var(--colors-brand-text-muted)',
        marginBottom: '2px',
    });

    const detailValue = css({
        color: 'var(--colors-brand-text-main)',
    });

    const mainContent = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    });

    const introBox = css({
        background: 'linear-gradient(to right, var(--colors-brand-primary-light), transparent)',
        borderLeft: '4px solid var(--colors-brand-primary)',
        padding: '24px',
        borderRadius: '16px',
        fontSize: '1rem',
        lineHeight: '1.7',
        color: 'var(--colors-brand-text-main)',
        textAlign: 'justify',
    });

    const sectionTitle = css({
        fontSize: '1.5rem',
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
            height: '24px',
            background: 'linear-gradient(to bottom, var(--colors-brand-primary), var(--colors-brand-secondary))',
            borderRadius: 'pill',
        }
    });

    const capabilitiesGrid = css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
        gap: '20px',
    });

    const capCard = css({
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        gap: '20px',
    });

    const capIconWrapper = css({
        width: '56px',
        height: '56px',
        minWidth: '56px',
        borderRadius: 'innerCard',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        background: 'var(--colors-brand-bg-main)',
        border: '1px solid var(--colors-brand-border-light)',
    });

    const capContent = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });

    const capTitle = css({
        fontSize: '1.05rem',
        fontWeight: '700',
        color: 'var(--colors-brand-text-main)',
        _hover: {
            color: 'var(--colors-brand-primary)',
        }
    });

    const capText = css({
        fontSize: '0.875rem',
        color: 'var(--colors-brand-text-muted)',
        lineHeight: '1.5',
    });

    const capabilitiesList = [
        {
            icon: "📚",
            title: "Теоретична платформа",
            tab: "theory",
            text: "Концептуалізація ООП, нормативно-правове регулювання інклюзивної освіти в Україні та світі, календар важливих дат."
        },
        {
            icon: "🧪",
            title: "Кейс-лабораторія",
            tab: "cases",
            text: "Аналіз реальних психолого-педагогічних кейсів 11 учнів початкової школи з детальним описом їхніх особливостей та копінг-стратегій."
        },
        {
            icon: "📖",
            title: "Рекомендаційний довідник",
            tab: "recs",
            text: "Методичні та лінгводидактичні рекомендації для 6 категорій нозологій, включаючи адаптації простору й темпу уроку."
        },
        {
            icon: "🛠️",
            title: "Діагностичний конструктор",
            tab: "recs", // Opens recommendations with the constructor subtab active
            text: "Інтерактивний підбір симптомів та експрес-генерація індивідуального плану корекційної підтримки для конкретного учня."
        },
        {
            icon: "🎡",
            title: "Калейдоскоп методик",
            tab: "methods",
            text: "35 інноваційних технік навчання англійської мови, структурованих за 7 методологічними групами у 3D-форматі."
        },
        {
            icon: "🗄️",
            title: "Методична бібліотека",
            tab: "library",
            text: "Зручний інтерфейс для перегляду та завантаження авторських дидактичних матеріалів для уроків англійської мови."
        }
    ];

    return (
        <div className={pageContainer}>
            {/* HERO BANNER */}
            <div className={heroBanner}>
                <h1 className={heroTitle}>ЦИФРОВИЙ МЕТОДИЧНИЙ КЕЙС</h1>
                <p className={heroSubtitle}>
                    з технології навчання англійської мови учнів з особливими освітніми потребами в інклюзивних класах початкової школи
                </p>
                <p className={heroDesc}>
                    Науково-методичний посібник для вчителів, асистентів учителів та студентів педагогічних спеціальностей
                </p>
            </div>

            {/* HOME GRID */}
            <div className={homeGrid}>
                {/* AUTHOR CARD */}
                <Card className={authorCardStyle}>
                    <div className={avatar}>🎓</div>
                    <h2 className={authorName}>Дроздова Ксенія Олексіївна</h2>
                    <span className={authorRole}>Автор розробки</span>

                    <div className={detailsList}>
                        <div className={detailItem}>
                            <div className={detailLabel}>Спеціальність</div>
                            <div className={detailValue}>014 Середня освіта (Мова і література (англійська))</div>
                        </div>
                        <div className={detailItem}>
                            <div className={detailLabel}>Кваліфікаційна робота</div>
                            <div className={detailValue}>бакалавра</div>
                        </div>
                        <div className={detailItem}>
                            <div className={detailLabel}>Заклад освіти</div>
                            <div className={detailValue}>Національний університет кораблебудування імені адмірала Макарова</div>
                        </div>
                        <div className={detailItem}>
                            <div className={detailLabel}>Інститут / Кафедра</div>
                            <div className={detailValue}>Гуманітарний інститут, кафедра теоретичної та прикладної лінгвістики</div>
                        </div>
                        <div className={detailItem}>
                            <div className={detailLabel}>Академічна група</div>
                            <div className={detailValue}>група 4721</div>
                        </div>
                        <div className={detailItem}>
                            <div className={detailLabel}>Контактний Email</div>
                            <div className={detailValue}>teac4er1@gmail.com</div>
                        </div>
                    </div>
                </Card>

                {/* MAIN CONTENT AREA */}
                <div className={mainContent}>
                    <div className={introBox}>
                        Цей цифровий ресурс розроблено з метою оптимізації освітнього процесу та забезпечення якісного навчання англійської мови молодших школярів в інклюзивних класах. Тут поєднано теоретико-правовий фундамент, практичні психолого-педагогічні профілі дітей (кейси) та інтерактивні інструменти для моделювання уроків.
                    </div>

                    <div>
                        <h2 className={sectionTitle}>Можливості вебресурсу</h2>
                        <div className={capabilitiesGrid}>
                            {capabilitiesList.map((cap, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => onNavigate(cap.tab)}
                                    style={{ height: '100%' }}
                                >
                                    <Card interactive className={capCard}>
                                        <div className={capIconWrapper}>{cap.icon}</div>
                                        <div className={capContent}>
                                            <h3 className={capTitle}>{cap.title}</h3>
                                            <p className={capText}>{cap.text}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
