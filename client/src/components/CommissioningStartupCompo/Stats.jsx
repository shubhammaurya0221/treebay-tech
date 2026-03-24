import './Stats.css';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat">
        <span className="stat-val">300+</span>
        <span className="stat-lbl">Plants Commissioned</span>
      </div>
      <div className="stat">
        <span className="stat-val">98%</span>
        <span className="stat-lbl">Performance Test Pass Rate</span>
      </div>
      <div className="stat">
        <span className="stat-val">25%</span>
        <span className="stat-lbl">Avg. Schedule Compression</span>
      </div>
      <div className="stat">
        <span className="stat-val">40+</span>
        <span className="stat-lbl">Process Industries Served</span>
      </div>
    </div>
  );
};

export default Stats;
