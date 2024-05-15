import "./SkillCard.css";

const SkillCard = (props) => {
  return (
    <div className="card">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card-inner col-lg-3 text-center">
        <img src={props.data.img} />
      </div>
    </div>
  );
};

export default SkillCard;
