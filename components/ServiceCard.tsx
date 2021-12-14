import { FC } from "react";
import { IService } from "../type";

const ServiceCard: FC<{ service: IService }> = ({
  service: { Icon, about, title }
}) => {
  const createMarkup = () => {
    return {
      __html: about
    };
  };

  return (
    <div className="p-2 flex items-center space-x-4">
      {title.includes("Frontend") ? (
        <Icon className="w-16 h-16 text-blue-600" />
      ) : (
        <Icon className="w-12 h-12 text-blue-600" />
      )}

      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};
export default ServiceCard;
