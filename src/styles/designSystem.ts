export const designTokens = {
  colors: {
    emerald: {
      50: 'bg-emerald-50',
      100: 'bg-emerald-100',
      500: 'bg-emerald-500',
      600: 'bg-emerald-600',
      text: {
        500: 'text-emerald-500',
        600: 'text-emerald-600',
        700: 'text-emerald-700',
        800: 'text-emerald-800',
        900: 'text-emerald-900',
      },
      border: {
        200: 'border-emerald-200',
        300: 'border-emerald-300',
      }
    },
    blue: {
      50: 'bg-blue-50',
      100: 'bg-blue-100',
      500: 'bg-blue-500',
      600: 'bg-blue-600',
      text: {
        500: 'text-blue-500',
        600: 'text-blue-600',
        700: 'text-blue-700',
        800: 'text-blue-800',
      },
      border: {
        200: 'border-blue-200',
      }
    },
    purple: {
      50: 'bg-purple-50',
      100: 'bg-purple-100',
      500: 'bg-purple-500',
      600: 'bg-purple-600',
      text: {
        600: 'text-purple-600',
        700: 'text-purple-700',
        800: 'text-purple-800',
      },
      border: {
        200: 'border-purple-200',
      }
    },
    cyan: {
      50: 'bg-cyan-50',
      100: 'bg-cyan-100',
      500: 'bg-cyan-500',
      600: 'bg-cyan-600',
      text: {
        600: 'text-cyan-600',
        700: 'text-cyan-700',
      },
      border: {
        200: 'border-cyan-200',
      }
    },
    orange: {
      50: 'bg-orange-50',
      100: 'bg-orange-100',
      500: 'bg-orange-500',
      600: 'bg-orange-600',
      text: {
        600: 'text-orange-600',
        700: 'text-orange-700',
      },
      border: {
        200: 'border-orange-200',
      }
    },
    red: {
      50: 'bg-red-50',
      100: 'bg-red-100',
      500: 'bg-red-500',
      600: 'bg-red-600',
      text: {
        600: 'text-red-600',
        700: 'text-red-700',
      },
      border: {
        200: 'border-red-200',
      }
    },
    amber: {
      50: 'bg-amber-50',
      100: 'bg-amber-100',
      500: 'bg-amber-500',
      600: 'bg-amber-600',
      text: {
        600: 'text-amber-600',
        700: 'text-amber-700',
      },
      border: {
        200: 'border-amber-200',
      }
    },
    pink: {
      50: 'bg-pink-50',
      100: 'bg-pink-100',
      text: {
        600: 'text-pink-600',
      }
    },
    violet: {
      50: 'bg-violet-50',
      100: 'bg-violet-100',
      text: {
        600: 'text-violet-600',
      }
    },
    slate: {
      50: 'bg-slate-50',
      100: 'bg-slate-100',
      text: {
        600: 'text-slate-600',
        700: 'text-slate-700',
        900: 'text-slate-900',
      }
    }
  },
  spacing: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
  padding: {
    card: 'p-6',
    cardLg: 'p-8',
    section: 'py-20 px-6 lg:px-8',
    sectionLg: 'py-32 px-6 lg:px-8',
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },
  rounded: {
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
  },
  transitions: {
    fast: 'transition-all duration-200',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  }
};

export const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-200',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-200',
    },
    cyan: {
      bg: 'bg-cyan-100',
      text: 'text-cyan-600',
      border: 'border-cyan-200',
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-200',
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      border: 'border-red-200',
    },
    amber: {
      bg: 'bg-amber-100',
      text: 'text-amber-600',
      border: 'border-amber-200',
    },
    pink: {
      bg: 'bg-pink-100',
      text: 'text-pink-600',
      border: 'border-pink-200',
    },
    violet: {
      bg: 'bg-violet-100',
      text: 'text-violet-600',
      border: 'border-violet-200',
    },
  };

  return colorMap[color] || colorMap.blue;
};
