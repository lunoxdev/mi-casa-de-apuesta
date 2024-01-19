import { useProgressiveNumber } from '../../hooks/useProgressiveNumber';
import { useEffect } from 'react';

export const CountUp = ({ initial, final, duration, showPlusSign = true }: { initial: number, final: number, duration?: number, showPlusSign?: boolean }) => {
  const [count, setCount] = useProgressiveNumber(initial, duration);

  useEffect(() => {
    setCount(final);
  }, []);

  const formattedCount = new Intl.NumberFormat().format(count); // Formatea el número con la coma

  return (
    <p className="text-3xl sm:text-4xl font-semibold">
      {showPlusSign ? `+${formattedCount}` : formattedCount}
    </p>
  );
};
