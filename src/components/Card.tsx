import React from 'react';
import { motion } from 'framer-motion';
import { css, cx } from '../../styled-system/css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    interactive?: boolean;
    variant?: 'default' | 'glass' | 'borderless';
    glowColor?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    interactive = false,
    variant = 'default',
    glowColor,
    ...props
}) => {
    const cardStyle = css({
        borderRadius: 'card',
        padding: '28px',
        border: '1px solid',
        borderColor: 'var(--colors-brand-border-light)',
        background: 'var(--colors-brand-bg-card)',
        boxShadow: 'soft',
        position: 'relative',
        overflow: 'hidden',
    });

    const variantStyle = css(
        variant === 'glass' && {
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
        },
        variant === 'borderless' && {
            border: 'none',
            boxShadow: 'none',
            background: 'transparent',
            padding: '0',
        }
    );

    const glowStyle = glowColor ? css({
        _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: glowColor,
        }
    }) : '';

    if (interactive) {
        return (
            <motion.div
                whileHover={{
                    y: -5,
                    boxShadow: 'var(--shadows-premium)',
                    borderColor: 'rgba(99, 102, 241, 0.2)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={cx(cardStyle, variantStyle, glowStyle, className)}
                {...(props as any)}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div className={cx(cardStyle, variantStyle, glowStyle, className)} {...props}>
            {children}
        </div>
    );
};
