import { cn } from '~/utils/';

export default function GPTIcon({
  size = 25,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const unit = '41';
  const height = size;
  const width = size;

  return (

    <svg xmlns="http://www.w3.org/2000/svg" width={width}
      height={height} viewBox="0 0 24 24" strokeWidth="1.5"
      className={cn(className, '')} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 10v3" /><path d="M6 6v11" /><path d="M10 3v18" /><path d="M14 8v7" /><path d="M18 5v13" /><path d="M22 10v3" />
      </svg>
  );
}
