import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { casesSourceData } from '../features/data';
import type { Case } from '../features/types';
import { css } from '../../styled-system/css';

export const Cases: React.FC = () => {
    const [selectedCase, setSelectedCase] = useState<Case | null>(null);

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

    const casesGrid = css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
        gap: '24px',
    });

    const caseCardHeader = css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        borderBottom: '1px solid var(--colors-brand-border-light)',
        paddingBottom: '12px',
    });

    const caseBadge = css({
        fontSize: '0.75rem',
        fontWeight: '800',
        color: 'white',
        padding: '4px 10px',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, var(--colors-brand-primary), var(--colors-brand-primary-dark))',
    });

    const caseMeta = css({
        fontSize: '0.85rem',
        color: 'var(--colors-brand-text-muted)',
        fontWeight: '600',
    });

    const caseTitle = css({
        fontSize: '1.2rem',
        fontWeight: '800',
        color: 'var(--colors-brand-text-main)',
        marginBottom: '12px',
    });

    const fieldsContainer = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '20px',
        borderTop: '1px dashed var(--colors-brand-border-light)',
        paddingTop: '12px',
    });

    const fieldItem = css({
        display: 'flex',
        fontSize: '0.875rem',
        lineHeight: '1.4',
    });

    const fieldLabel = css({
        fontWeight: '700',
        color: 'var(--colors-brand-text-muted)',
        fontSize: '0.8rem',
        minWidth: '110px',
    });

    const fieldValue = css({
        color: 'var(--colors-brand-text-main)',
    });

    const caseCardInner = css({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    });

    const buttonPush = css({
        marginTop: 'auto',
    });

    // Details sections style inside modal
    const modalSection = css({
        marginBottom: '20px',
        paddingLeft: '16px',
        borderLeft: '4px solid',
        _last: {
            marginBottom: '0',
        }
    });

    const modalSectionLabel = css({
        fontSize: '0.8rem',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: 'var(--colors-brand-text-muted)',
        marginBottom: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
    });

    const modalSectionText = css({
        fontSize: '0.95rem',
        color: 'var(--colors-brand-text-main)',
        lineHeight: '1.6',
        textAlign: 'justify',
    });

    return (
        <div className={containerStyle}>
            <div>
                <h2 className={pageTitle}>Кейс-лабораторія інклюзивного навчання</h2>
                <p className={css({ color: 'var(--colors-brand-text-muted)', marginTop: '-12px', marginBottom: '24px' })}>
                    Практичний аналіз психолого-педагогічного розвитку учнів ООП та ТОП
                </p>
            </div>

            <div className={casesGrid}>
                {casesSourceData.map((c) => (
                    <Card key={c.number} interactive glowColor="var(--colors-brand-primary-light)" className={css({ display: 'flex', flexDirection: 'column' })}>
                        <div className={caseCardInner}>
                            <div className={caseCardHeader}>
                                <span className={caseBadge}>Кейс №{c.number}</span>
                                <span className={caseMeta}>{c.age} р. • {c.grade} кл. ({c.type})</span>
                            </div>
                            <h3 className={caseTitle}>Учень {c.initial}</h3>

                            <div className={fieldsContainer}>
                                <div className={fieldItem}>
                                    <span className={fieldLabel}>🏥 Група ООП:</span>
                                    <span className={fieldValue}><strong>{c.diagnosis}</strong></span>
                                </div>
                                <div className={fieldItem}>
                                    <span className={fieldLabel}>👥 Супровід:</span>
                                    <span className={fieldValue}>{c.specialists}</span>
                                </div>
                                <div className={fieldItem}>
                                    <span className={fieldLabel}>📋 Програма:</span>
                                    <span className={fieldValue}>{c.curriculum}</span>
                                </div>
                            </div>

                            <div className={buttonPush}>
                                <Button
                                    variant="primary"
                                    fullWidth
                                    onClick={() => setSelectedCase(c)}
                                >
                                    📊 Розгорнути аналітичну карту
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Case Details Dialog */}
            <Dialog
                isOpen={selectedCase !== null}
                onClose={() => setSelectedCase(null)}
                title={selectedCase ? `Детальний аналіз кейсу: Учень ${selectedCase.initial}` : ''}
                description={selectedCase ? `Вік: ${selectedCase.age} років | Клас: ${selectedCase.grade} (${selectedCase.type}) | Категорія: ${selectedCase.diagnosis}` : ''}
            >
                {selectedCase && (
                    <div className={css({ display: 'flex', flexDirection: 'column', gap: '20px' })}>
                        <div className={modalSection} style={{ borderLeftColor: 'var(--colors-brand-primary)' }}>
                            <div className={modalSectionLabel}>📋 Клініко-педагогічний статус</div>
                            <p className={modalSectionText}>{selectedCase.status_text}</p>
                        </div>

                        <div className={modalSection} style={{ borderLeftColor: 'var(--colors-nozology-top)' }}>
                            <div className={modalSectionLabel}>🕊️ Контекст та життєві обставини</div>
                            <p className={modalSectionText}>{selectedCase.war_text}</p>
                        </div>

                        <div className={modalSection} style={{ borderLeftColor: 'var(--colors-nozology-ras)' }}>
                            <div className={modalSectionLabel}>🧠 Навчальна діяльність та когнітивна сфера</div>
                            <p className={modalSectionText}>{selectedCase.cognition_text}</p>
                        </div>

                        <div className={modalSection} style={{ borderLeftColor: 'var(--colors-nozology-rdug)' }}>
                            <div className={modalSectionLabel}>🤝 Соціальна взаємодія та поведінкові реакції</div>
                            <p className={modalSectionText}>{selectedCase.social_text}</p>
                        </div>

                        <div className={modalSection} style={{ borderLeftColor: 'var(--colors-nozology-znm)' }}>
                            <div className={modalSectionLabel}>🚨 Поведінка під час повітряної тривоги</div>
                            <p className={modalSectionText}>{selectedCase.alarm_text}</p>
                        </div>

                        <div className={modalSection} style={{ borderLeftColor: 'var(--colors-nozology-ora)' }}>
                            <div className={modalSectionLabel}>🇬🇧 Особливості вивчення англійської мови</div>
                            <p className={modalSectionText}>{selectedCase.english_text}</p>
                        </div>

                        <div className={modalSection} style={{ borderLeftColor: 'var(--colors-nozology-zpr)' }}>
                            <div className={modalSectionLabel}>🛡️ Стратегії стабілізації та копінг-ресурси</div>
                            <p className={modalSectionText}>{selectedCase.stabilization_text}</p>
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    );
};
