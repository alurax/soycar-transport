interface FilterTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterTabs({ activeCategory, onCategoryChange }: FilterTabsProps) {
  const categories = [
    { id: 'most-popular', label: 'MOST POPULAR' },
    { id: 'inland-tour', label: 'INLAND TOUR' },
    { id: 'rent-a-car', label: 'RENT A CAR' },
    { id: 'adventure', label: 'ADVENTURE' },
    { id: 'other-offers', label: 'OTHER OFFERS' }
  ];

  return (
    <div className="filter-tabs">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(cat.id)}
        >
          {activeCategory === cat.id && '✓ '}
          {cat.label}
        </button>
      ))}
    </div>
  );
}
