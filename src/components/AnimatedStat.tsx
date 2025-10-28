
import { useCountAnimation } from "@/hooks/useCountAnimation";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  color?: 'purple' | 'blue' | 'green' | 'orange' | 'pink';
}

export const AnimatedStat = ({ value, suffix = "", label, delay = 0, color = 'purple' }: AnimatedStatProps) => {
  const { count, ref } = useCountAnimation({ 
    end: value, 
    duration: 2000 + delay 
  });

  const colorClasses = {
    purple: 'text-neon-purple neon-border-purple neon-glow-purple',
    blue: 'text-neon-blue neon-border-blue neon-glow-blue',
    green: 'text-neon-green neon-border-green neon-glow-green',
    orange: 'text-neon-orange neon-border-orange neon-glow-orange',
    pink: 'text-neon-pink neon-border-pink',
  };

  return (
    <div ref={ref} className={`text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm ${colorClasses[color]} border-2 transition-all hover:scale-105`}>
      <div className={`text-5xl md:text-6xl font-bold mb-3 ${colorClasses[color].split(' ')[0]}`}>
        {count}{suffix}
      </div>
      <div className="text-foreground/70 text-lg">{label}</div>
    </div>
  );
};
