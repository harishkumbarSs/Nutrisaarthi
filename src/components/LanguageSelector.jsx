import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <select
      value={i18n.language}
      onChange={e => i18n.changeLanguage(e.target.value)}
      className="m-4 p-2 border rounded"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
}
