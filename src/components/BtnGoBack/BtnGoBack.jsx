import css from './BtnGoBack.module.css';

export const BtnGoBack = () => {
  return (
    <div>
      <button className={css.button} type="button">Go back</button>
    </div>
  );
};