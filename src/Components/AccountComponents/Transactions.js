import { useTranslation } from 'react-i18next';

const Transactions = () => {

  const { t, i18n } = useTranslation();

  return <div>{t('Transactions')} </div>;
};

export default Transactions;
