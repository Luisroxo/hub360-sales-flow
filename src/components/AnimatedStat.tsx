
import { useCountAnimation } from "@/hooks/useCountAnimation";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export const AnimatedStat = ({ value, suffix = "", label, delay = 0 }: AnimatedStatProps) => {
  const { count, ref } = useCountAnimation({ 
    end: value, 
    duration: 2000 + delay 
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-purple-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-600">{label}</div>
    </div>
  );
};
