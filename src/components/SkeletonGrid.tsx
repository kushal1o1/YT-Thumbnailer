import './SkeletonGrid.css';

const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-info">
            <div className="skeleton-badge" />
            <div className="skeleton-badge small" />
          </div>
          <div className="skeleton-button" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonGrid;
