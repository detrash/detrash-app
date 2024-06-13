'use client';
import { useTranslation } from 'react-i18next';
import { CheckIcon, LanguagesIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '../../ui/button';

const locales = [
  {
    icon: '🇺🇸',
    name: 'English',
    value: 'en',
  },
  {
    icon: '🇪🇸',
    name: 'Español',
    value: 'es',
  },
  {
    icon: '🇵🇹',
    name: 'Português',
    value: 'pt',
  },
];

export default function LocaleToggler() {
  // const changeLocale = useChangeLocale({ preserveSearchParams: true });
  // const currentLocale = useCurrentLocale();

  const { t, i18n } = useTranslation();

  console.log('t', t);
  console.log('i18n', i18n);

  // TODO: remove
  const currentLocale = 'en';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <LanguagesIcon className="h-6 w-6" />
          <span className="sr-only">Change Locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.value}
            onClick={() => i18n.changeLanguage(locale.value)}
            disabled={locale.value === currentLocale}
          >
            <span className="cursor-pointer">
              {locale.name} {locale.icon}
            </span>
            {locale.value === currentLocale ? (
              <DropdownMenuShortcut>
                <CheckIcon className="h-4 w-4" />
              </DropdownMenuShortcut>
            ) : undefined}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
