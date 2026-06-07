import React from 'react';
import { motion } from 'framer-motion';
import { css, cx } from '../../styled-system/css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    ...props
}) => {
    // Panda CSS styles
    const buttonStyle = css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans',
        fontWeight: '700',
        borderRadius: 'button',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        outline: 'none',
        border: '1px solid transparent',
        width: fullWidth ? '100%' : 'auto',
        gap: '2',

        _focus: {
            boxShadow: '0 0 0 3px var(--colors-brand-primary-light)',
        },

        _disabled: {
            opacity: 0.5,
            cursor: 'not-allowed',
        }
    });

    const variantStyle = css(
        variant === 'primary' && {
            background: 'linear-gradient(135deg, var(--colors-brand-primary), var(--colors-brand-primary-dark))',
            color: 'white',
            boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.25)',
            border: 'none',
            _hover: {
                boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.35)',
            }
        },
        variant === 'secondary' && {
            background: 'linear-gradient(135deg, var(--colors-brand-secondary), var(--colors-brand-secondary-dark))',
            color: 'white',
            boxShadow: '0 4px 14px 0 rgba(14, 165, 233, 0.25)',
            border: 'none',
            _hover: {
                boxShadow: '0 6px 20px 0 rgba(14, 165, 233, 0.35)',
            }
        },
        variant === 'outline' && {
            background: 'transparent',
            borderColor: 'var(--colors-brand-primary)',
            color: 'var(--colors-brand-primary)',
            _hover: {
                background: 'var(--colors-brand-primary-light)',
            }
        },
        variant === 'ghost' && {
            background: 'transparent',
            color: 'var(--colors-brand-text-muted)',
            _hover: {
                background: 'var(--colors-brand-primary-light)',
                color: 'var(--colors-brand-primary)',
            }
        },
        variant === 'text' && {
            background: 'transparent',
            color: 'var(--colors-brand-text-muted)',
            padding: '0!',
            _hover: {
                color: 'var(--colors-brand-primary)',
            }
        }
    );

    const sizeStyle = css(
        size === 'sm' && {
            padding: '8px 16px',
            fontSize: '0.85rem',
        },
        size === 'md' && {
            padding: '12px 24px',
            fontSize: '0.95rem',
        },
        size === 'lg' && {
            padding: '16px 36px',
            fontSize: '1.05rem',
            borderRadius: '16px',
        }
    );

    return (
        <motion.button
            whileHover={{ scale: props.disabled ? 1 : 1.02 }}
            whileTap={{ scale: props.disabled ? 1 : 0.98 }}
            className={cx(buttonStyle, variantStyle, sizeStyle, className)}
            {...(props as any)}
        >
            {children}
        </motion.button>
    );
};
