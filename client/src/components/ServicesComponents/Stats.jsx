import './Stats.css';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat">
        <span className="stat-val">200+</span>
        <span className="stat-lbl">Bioprocess Projects Delivered</span>
      </div>
      <div className="stat">
        <span className="stat-val">40%</span>
        <span className="stat-lbl">Avg. Energy Reduction Achieved</span>
      </div>
      <div className="stat">
        <span className="stat-val">95%</span>
        <span className="stat-lbl">CO₂ Capture Efficiency</span>
      </div>
      <div className="stat">
        <span className="stat-val">30+</span>
        <span className="stat-lbl">Years in Green Process Engineering</span>
      </div>
    </div>
  );
};

export default Stats;
