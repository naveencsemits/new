// components/CarouselItem.js
export default function CarouselItem({ children, isActive, className = '' }) {
    return (
      <div className={`w-full flex-shrink-0 ${className} ${isActive ? 'opacity-100' : 'opacity-50'}`}>
        {children}
      </div>
    );
  }
  