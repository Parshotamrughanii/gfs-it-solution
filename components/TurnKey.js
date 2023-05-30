
import Image from "next/image";

const TurnKey = ({leftImg,title,description,ParentDivColor,ChildDivColor}) => {
  return (
    <div>
      <div className="row g-0">
        <div className="col-12 col-md-6 p-0">
          <Image
            src={require(`../src/assets/images/consulting/${leftImg}.png`)}
            className="devop-app-turn-key-img animate-left"
            alt=""
          />
        </div>
        <div className="col-12 col-md-6 devop-app-turn-key-desc" style={{backgroundColor:ParentDivColor}}>
          <div className="devop-app-turn-key-box" style={{backgroundColor:ChildDivColor}}>
            <h3 className="devop-app-turn-key-heading animate-down my-4">
             {title}
            </h3>
            <p className="devop-app-turn-key-subheading animate-left">
           {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnKey;
