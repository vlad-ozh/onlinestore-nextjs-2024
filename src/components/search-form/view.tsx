'use client';

import { useForm } from 'react-hook-form';
import { SubmitIcon, TextInput } from '@/ui';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ISearchForm } from '@/types/forms';
import { useTranslations } from 'next-intl';

import style from './styles.module.scss';

export const SearchForm: React.FC = () => {
  const t = useTranslations();
  const {
    register,
  } = useForm<ISearchForm>();


  return (
    <form className={style.form}>
      <TextInput
        register={register('search', {
          required: true,
        })}
        name='search'
        placeholder={t('Header.searchPlaceholder')}
        type='text'
        autoComplete='on'
        className={style.formInput}
      />

      <SubmitIcon
        icon={<MagnifyingGlassIcon width={24} />}
        className={style.formSubmit}
      />
    </form>
  );
};
